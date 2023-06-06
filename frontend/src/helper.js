import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, push, set, update, child } from "firebase/database";

import { uploadVotesToDatabase, firebaseConfig } from "./firebase.js";
import { createBlock } from "./blockchain.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

console.log('Starting...');

// Reference to the votings collection in Firebase
// let votingsRef = ref(db, "Votings");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getVoting(id) {
    return new Promise((resolve, reject) => {
        let sample = {};
        let votingsRef = ref(db, 'Votings');
        onValue(child(votingsRef, id), (snapshot) => {
            sample.name = snapshot.child("name").val();
            sample.description = snapshot.child("description").val();
            sample.candidates = snapshot.child("candidates").val();
            sample.votes = snapshot.child("votes").val();
            resolve(sample);
        }, (error) => {
            reject(error);
        });
    });
}

async function addRandomVotes(votingID, numberOfVotes){
    let voting = await getVoting(votingID);
    
    for(let i = 0; i < numberOfVotes; i++){
        let newBlock = createBlock(voting, getRandomInt(2));
        voting.votes.push(newBlock);
    }

    uploadVotesToDatabase(votingID, voting.votes);
    console.log(`Datetime of first uploaded vote: ${voting.votes[1].datetime}`);
    console.log(`Previous Hash of first uploaded vote: ${voting.votes[1].previousHash}`);
    console.log(`Candidate ID of first uploaded vote: ${voting.votes[1].candidate_id}`);
}

addRandomVotes('-NVaXw7R2-x98d1pnMyB', 1);

