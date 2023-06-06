import { createStore } from "vuex";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import router from "./router";

export const store = createStore({
    state: {
        user: null,

        votings: [
            {  
               id: '1234', 
               name: 'Example', description: 'This is an example of  voting', 
               candidates: [
                { firstName: 'Karen', lastName: 'Bass'},
                { firstName: "Emma", lastName: "Smith" },
                { firstName: "Daniel", lastName: "Johnson" },
                { firstName: "Avery", lastName: "Davis" },
                { firstName: "Oliver", lastName: "Garcia" },
                { firstName: "Sophia", lastName: "Wilson" },
                { firstName: "William", lastName: "Rodriguez" },
                { firstName: "Charlotte", lastName: "Lee" },
                { firstName: "Ethan", lastName: "Nguyen" },
                { firstName: "Isabella", lastName: "Kumar" },
                { firstName: "Mia", lastName: "Patel" }
               ],
               votes: [
                    {previousHash: 0, candidate_id: 0, currentHash: 1234},
               ], 
            }
        ],
        selectedVoting: 0,
        isCreateVotingFormVisible: true,
        isAddPeopleFormVisible: false,
        selectedSidebarItem: null,
    },
    mutations: {
        setUserFromLocalStorage(state) {
            const user = localStorage.getItem('user');
            state.user = user ? JSON.parse(user) : null;
        },
        
        setUser(state, user) {
            state.user = user
        },

        addVoting: (state, voting) => {
            state.votings.push(voting);
        },
        setVotings: (state, votings) => {
            state.votings = state.votings.concat(votings);
        },
        restoreVotings: (state) => {
            state.votings = [];
        },
        chooseVoting: (state, voting_id) => {
            state.selectedVoting = voting_id;
        },
        addCandidate: (state, candidate) => {
            state.votings[state.selectedVoting].candidates.push(candidate);
        },

        showCreateVotingForm: (state) => {
            state.isCreateVotingFormVisible = true;
            console.log(`Create Voting Form: ${state.isCreateVotingFormVisible}`)
        },
        hideCreateVotingForm: (state) => {
            state.isCreateVotingFormVisible = false;
        },

        showAddPeopleForm: (state) => {
            state.isAddPeopleFormVisible = true;
        },
        hideAddPeopleForm: (state) => {
            state.isAddPeopleFormVisible = false;
        },

        chooseSidebarItem: (state, index) => {
            state.selectedSidebarItem = index;
        }
    },
    actions: {
        async login(context, { email, password }) {
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              context.commit('setUser', user);
              console.log("User Succesfull Logged In");

              router.push("/dashboard");

              // Saving user in Local Storage
              const userObject = {
                email: email,
                password: password
              }
              
              console.log(userObject);
              localStorage.setItem('user', JSON.stringify(userObject));
            
            } catch (error) {
              console.log(error.message)
            }
          }
    }
})
