import axios from 'axios'

export default {
    state: {
        parkingspots: [],
        parkingspots_status: ''
    },
    actions: {
        async loadParkingSpots({
            commit
        }) {
            commit('PARKING_SPOTS_REQUEST')
            await axios("http://localhost:4000/api/parkingspots")
                .then((res) => {
                    let parkingspots = res.data.parkingspots;
                    commit('SUCCESS_GET_PARKING_SPOTS', parkingspots)

                })
                .catch((error) => {
                    commit('ERROR_GET_PARKIG_SPOTS', error)
                });
        },

        async createParkingSpot({ commit }, parkingspot) {
            await axios.post('http://localhost:4000/api/parkingspots', parkingspot)
                .then(() => {
                    commit('PARKING_SPOT_CREATED')
                })
                .catch((err) => {
                    commit('ERROR_CREATE_PARKING_SPOT', err)
                })
        },
        async deleteParkingSpot({ commit }, id) {
            await axios.delete('http://localhost:4000/api/parkingspots', id)
                .then(() => {
                    commit('PARKING_SPOTS_DELETED')
                })
                .catch((err) => {
                    commit('ERROR_DELETE_PARKING_SPOT', err)
                })
        }

    },
    mutations: {
        PARKING_SPOTS_REQUEST(state) {
            state.parkingspots_status = 'loading'

        },
        SUCCESS_GET_PARKING_SPOTS(state, parkingspots) {
            state.parkingspots_status = 'success'
            state.parkingspots = parkingspots
        }

    },
    getters: {
        parkingspots: state => state.parkingspots
    }
}