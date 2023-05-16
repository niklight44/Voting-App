import { getAllVotings } from "./firebase";


export function createBlock(voting, candidate_id){
    let votes = voting.votes;
    checkHashes(votes);
    let previousHash = getPreviousHash(votes);
    let newHash = createNewHash(previousHash);

    return {previousHash: previousHash, candidate_id: candidate_id, currentHash: newHash}
}


const votes = [{previousHash: 0, candidate_id: 0, currentHash: 1234}, 
         {previousHash: 1234, candidate_id: 1, currentHash: 1235},
         {previousHash: 1235, candidate_id: 1, currentHash: 1236}]
    

export function checkHashes(votes) {
    // Example of votes: [{previousHash: 0, candidate_id: 0, currentHash: 1234}, {previousHash: 1234, candidate_id: 0, currentHash: 54624234}]
    // Function returns true or false

    let isValid = true;

    votes.forEach((vote) => {
        if (vote.previousHash !== 0) {
            const previousVote = votes.find((v) => v.currentHash === vote.previousHash);
            if (!previousVote) {
                isValid = false;
                return;
            }
        }
    });

    return isValid;
}

export function getPreviousHash(votes){
    // Takes last vote and make hash from it

    console.log(`Previous Hash: ${votes[votes.length - 1].currentHash}`);
    return votes[votes.length - 1].currentHash
}

export function createNewHash(previousHash){
    return previousHash+1
}

console.log(`Hashes of votes are ${checkHashes(votes)}`);

