// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, push, set, update, child } from "firebase/database";
import { useStore } from "vuex";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB2gJ76hYC4LCf36Z2-l75OCMRnUqEAv5o",
  authDomain: "blockchain-fdfdd.firebaseapp.com",
  projectId: "blockchain-fdfdd",
  storageBucket: "blockchain-fdfdd.appspot.com",
  messagingSenderId: "1091463908843",
  appId: "1:1091463908843:web:ef522ec042f2e6bd459dae",
  databaseURL: "https://blockchain-fdfdd-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// const votingsRef = ref(db, 'Votings/');

// Reference to the votings collection in Firebase
let votingsRef = ref(db, "Votings");

// Function to retrieve all votings and save them to the Vuex store
export function getAllVotings() {
  const store = useStore();
  onValue(votingsRef, (snapshot) => {
    // Convert the Firebase snapshot to an array of votings
    const votingsArray = [];
    snapshot.forEach((voting) => {
      votingsArray.push({
        id: voting.key,
        name: voting.val().name,
        description: voting.val().description,
        candidates: voting.val().candidates,
        votes: voting.val().votes,
      });
    });
    // Update the Vuex store with the retrieved votings
    store.commit("setVotings", votingsArray);
  });
}

// Define the voting data
// const newVoting = {
//     name: "Sample Voting 2",
//     description: "This is a sample voting 2",
//     candidates: [
//       {
//         firstName: "Candase",
//         lastName: "Owens"
//       },
//       {
//         firstName: "Daniel", 
//         lastName: "Johnson"
//       },
//     ],
//     votes: [
//       {previousHash: 0, candidate_id: 0, currentHash: 1234},
//     ]
//   };
  
//   // Add the new voting to the Firebase database
//   const newVotingRef = push(votingsRef);
//   set(newVotingRef, newVoting);

export function addVoting(voting){
  const newVotingRef = push(votingsRef);
  set(newVotingRef, newVotingRef);
}

export function updateVoting(voting){
    child(votingsRef, voting.key).update(
        {
            name: voting.name,
            description: voting.description,
            candidates: voting.candidates,
            votes: voting.votes
        }
    ).then(()=>{
        console.log('Voting updated');
    })
}

export function getVoting(id){
    let sample = {};
    let votingsRef = ref(db, 'Votings');
    onValue(child(votingsRef, id), (snapshot) => {
      sample.name = snapshot.child("name").val();
      sample.description = snapshot.child("description").val();
      sample.candidates = snapshot.child("candidates").val();
      sample.votes = snapshot.child("votes").val();
    })
    
    return sample;
}

export function uploadVotesToDatabase(votingId, votes){
    // Add votes to database
    let votingsRef = ref(db, "Votings");
    let votingRef = child(votingsRef, votingId);
    let votesRef = child(votingRef, "votes");
    
    set(votesRef, votes);
}