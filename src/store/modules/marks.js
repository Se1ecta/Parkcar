import axios from 'axios'

export default {
    state: {
        marks: [],
        marks_status: ''
    },
    actions: {
        async loadMarks({ commit }) {
            commit('MARKS_REQUEST')
            await axios.get('http://localhost:4000/api/marks')
                .then((res) => {
                    let marks = res.data.marks
                    commit('SUCCESS_GET_MARKS', marks)
                })
                .catch((err) => {
                    commit('ERROR_GET_MARKS', err)
                })
        },

        async createMark({commit}, marks){
            await axios.post('http://localhost:4000/api/marks', marks)
            .then(()=>{
                commit('MARK_CREATED')
            })
            .catch((err)=>{
                commit('ERROR_CREATE_MARK', err)
            })
        },
        async deleteMark({commit}, id){
            await axios.delete('http://localhost:4000/api/marks', id)
            .then(()=>{
                commit('MARK_DELETED')
            })
            .catch((err)=>{
                commit('ERROR_DELETE_MARK', err)
            })
        }

    },
    mutations: {
        MARKS_REQUEST(state) {
            state.marks_status = 'loading'
        },
        SUCCESS_GET_MARKS(state, marks) {
            state.marks_status = 'success'
            state.marks = marks
        }

    },
    getters: {
        marks: state => state.marks
    }
}