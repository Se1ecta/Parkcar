import axios from 'axios'

export default {
    state: {
        tarifs: [],
        tarifs_status: ''
    },
    actions: {
        async loadTarifs({ commit }) {
            commit('TARIFS_REQUEST')
            await axios.get('http://localhost:4000/api/tarifs')
                .then((res) => {
                    let tarifs = res.data.tarifs
                    commit('SUCCESS_GET_TARIFS', tarifs)
                })
                .catch((err) => {
                    commit('ERROR_GET_TARIFS', err)
                })
        },

        async createTarif({commit}, tarif){
            await axios.post('http://localhost:4000/api/tarifs', tarif)
            .then(()=>{
                commit('TARIF_CREATED')
            })
            .catch((err)=>{
                commit('ERROR_CREATE_TARIF', err)
            })
        },
        async deleteTarif({commit}, id){
            await axios.delete(`http://localhost:4000/api/tarifs/${id}`)
            .then(()=>{
                commit('TARIF_DELETED', id)
            })
            .catch((err)=>{
                commit('ERROR_DELETE_TARIF', err)
            })
        }

    },
    mutations: {
        TARIFS_REQUEST(state) {
            state.tarifs_status = 'loading'
        },
        SUCCESS_GET_TARIFS(state, tarifs) {
            state.tarifs_status = 'success'
            state.tarifs = tarifs
        },
        TARIF_DELETED(state, id){
            let index = state.tarifs.findIndex(tarif => tarif.id == id)
            state.tarifs.splice(index, 1)
        }

    },
    getters: {
        tarifs: state => state.tarifs,

    }
}