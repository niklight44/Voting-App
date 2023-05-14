import { createStore } from "vuex";



export const store = createStore({
    state: {
        votings: [
            {
                name: 'New voting',
                description: 'This is a new voting'
              }
        ],
    },
    mutations: {
        addVoting: (state, voting) => {
            state.votings.push(voting)
        }
    },
    methods: {}  
})
