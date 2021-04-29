import axios from 'axios'

export default {
    state: {
        registrations: [],
        registrations_status: '',
    },
    actions: {
        async loadRegistrations({ commit }) {
            commit('REGISTRATIONS_REQUEST')
            await axios.get('http://localhost:4000/api/registrations')
                .then((res) => {
                    let registrations = res.data.registrations
                    commit('SUCCESS_GET_REGISTRATIONS', registrations)
                })
                .catch((err) => {
                    commit('ERROR_GET_REGISTRATIONS', err)
                })
        },

        async createRegistration({ commit }, registration) {
            console.log(registration)
            await axios.post('http://localhost:4000/api/registrations', registration)
                .then((res) => {
                    commit('REGISTRATION_CREATED', res.data.msg, registration)

                })
                .catch((err) => {
                    console.log(err)
                    commit('ERROR_CREATE_REGISTRATION', err)
                })
        },
        async deleteRegistration({ commit }, id) {
            await axios.delete(`http://localhost:4000/api/registrations/${id}`)
                .then((res) => {
                    console.log(res.data.msg)
                    commit('REGISTRATION_DELETED', res.data.msg, id)
                })
                .catch((err) => {
                    commit('ERROR_DELETE_REGISTRATION', err)
                })
        },
        async updateRegistration({ commit }, registration) {
            axios
                .put(`http://localhost:4000/api/registrations/${registration.id_registration}`, registration)
                .then((res) => {
                    commit('REGISTRATION_UPDATED', res.data.msg, registration)
                })
                .catch((err) => {
                    commit('ERROR_UPDATE_REGISTRATION', err)
                })

        },

    },
    mutations: {
        REGISTRATIONS_REQUEST(state) {
            state.registrations_status = 'loading'
        },
        SUCCESS_GET_REGISTRATIONS(state, registrations) {
            state.registrations = registrations
        },
        REGISTRATION_CREATED(state, msg, registration) {
            state.registrations.unshift(registration)
            state.registrations_status = msg

        },
        ERROR_CREATE_REGISTRATION(state, err) {
            state.registrationsError = err.response.data.msg
        },
        REGISTRATION_DELETED(state, msg, id) {
            let indexOfArrayItem = state.registrations.findIndex((i) => i.id_registration === id);
            state.registrations.splice(indexOfArrayItem, 1)
            state.registrations_status = msg

        },
        REGISTRATION_UPDATED(state, msg, registration) {
            state.registrations.unshift(registration)
            state.registrations_status = msg
        }

    },
    getters: {
        registrations: state => state.registrations,
        registrations_status: state => state.registrations_status
    }
}