// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, push, set } from "firebase/database";
import { useStore } from "vuex";

// Your web app's Firebase configuration
const firebaseConfig = {
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

// // Define the voting data
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
//       }
//     ]
//   };
  
//   // Add the new voting to the Firebase database
//   const newVotingRef = push(votingsRef);
//   set(newVotingRef, newVoting);




// Reference to the votings collection in Firebase
const votingsRef = ref(db, "Votings");

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
        votes: voting.val().votes || 0,
      });
    });
    // Update the Vuex store with the retrieved votings
    store.commit("setVotings", votingsArray);
  });
}
