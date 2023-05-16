import { createStore } from "vuex";



export const store = createStore({
    state: {
        votings: [
            {  name: 'Example', description: 'This is an example of  voting', 
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
        isCreateVotingFormVisible: false,
        isAddPeopleFormVisible: false,
    },
    mutations: {
        addVoting: (state, voting) => {
            state.votings.push(voting)
        },
        setVotings: (state, votings) => {
            state.votings = state.votings.concat(votings);
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
        }
    },
    methods: {}  
})
