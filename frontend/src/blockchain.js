// import { getAllVotings } from "./firebase";

export function createBlock(voting, candidate_id){
    // voting: Object
    // candidate_id: Int
    let votes = voting.votes;
    let datetime = Date.now();
    checkHashes(votes);
    let previousHash = getPreviousHash(votes);
    let newHash = createNewHash(previousHash, datetime);

    return {
            datetime: datetime,
            previousHash: previousHash, 
            candidate_id: candidate_id, 
            currentHash: newHash
            }
}

    

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
    // Takes last vote and get hash from it

    console.log(`Previous Hash: ${votes[votes.length - 1].currentHash}`);
    return votes[votes.length - 1].currentHash
}

export function createNewHash(previousHash, datetime){
    // TODO: Add datetime to previousHash
    console.log(`PreviousHash: ${previousHash}, 
                \n Datetime: ${datetime}. Sum: ${previousHash+datetime}`);
    let newHash = previousHash + datetime
    return newHash
}

// console.log(`Hashes of votes are ${checkHashes(votes)}`);


export function sendToNodes(block){
    // Send Block to Nodes for Validation
}