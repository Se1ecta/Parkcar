import axios from 'axios'

export default {
    state: {
        cars: [],
        cars_status: '',
    },
    actions: {
        async loadCars({ commit }) {
            commit('CARS_REQUEST')
            await axios.get('http://localhost:4000/api/cars')
                .then((res) => {
                    let cars = res.data.cars
                    commit('SUCCESS_GET_CARS', cars)
                })
                .catch((err) => {
                    commit('ERROR_GET_CARS', err)
                })
        },

        async createCar({ commit }, car) {
            await axios.post('http://localhost:4000/api/cars', car)
                .then((res) => {
                    commit('CAR_CREATED', car, res.data.msg)
                })
                .catch((err) => {
                    commit('ERROR_CREATE_CAR', err)
                })
        },
        async deleteCar({ commit }, id) {
            await axios.delete(`http://localhost:4000/api/cars/${id}`)
                .then((res) => {
                    commit('CAR_DELETED', res.data.msg, id)
                })
                .catch((err) => {
                    commit('ERROR_DELETE_CAR', err,)
                })
        },
        async updateCar({ commit }, car) {
            axios
                .put(`http://localhost:4000/api/cars/${car.id_car}`, car)
                .then((res) => {
                    commit('CAR_UPDATED', res.data.msg)
                })

        },

    },
    mutations: {
        CARS_REQUEST(state) {
            state.cars_status = 'loading'
        },
        SUCCESS_GET_CARS(state, cars) {
            state.cars_status = 'success'
            state.cars = cars
            state.cars_errors = null
        },
        CAR_CREATED(state, car, msg) {
            state.cars_status = msg
            state.cars.unshift(car)
        },
        ERROR_CREATE_CAR(state, err) {
            state.cars_errors = err.response.data.msg
        },
        CAR_DELETED(state, msg, id) {
            state.cars_status = msg
            state.cars = state.cars.filter((car) => car.id_car !== id)
            state.cars_errors = null
        },
        ERROR_DELETE_CAR(state, err) {
            state.cars_status = err.response.data.msg

        },
        CAR_UPDATED(state, msg) {
            state.cars_status = msg

        },

    },
    getters: {
        cars: state => state.cars,
        cars_errors: state => state.cars_errors,
        cars_status: state => state.cars_status,


    },

}