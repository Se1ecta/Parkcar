import axios from 'axios'

export default {
    state: {
        customers: [],
        customers_status: '',
        loading: false,

    },
    actions: {
        async loadCustomers({
            commit
        }) {
            commit('CUSTOMERS_REQUEST')
            await axios("http://localhost:4000/api/customers")
                .then((res) => {
                    let customers = res.data.customers;
                    commit('SUCCESS_GET_CUSTOMERS', customers)

                })
                .catch((error) => {
                    commit('ERROR_GET_CUSTOMERS', error)
                });
        },
        async createCustomer({ commit }, customer) {
            await axios
                .post("http://localhost:4000/api/customers", customer)
                .then(() => {
                    commit("CUSTOMER_CREATED", customer)
                })
                .catch((error) => {
                    commit("ERROR_CREATE_CUSTOMER", error)
                });
        },
        async updateCustomer({ commit }, customer) {
            axios
                .put(`http://localhost:4000/api/customers/${customer.id_customer}`, customer)
                .then((res) => {
                    commit('CUSTOMER_UPDATED', res.data.msg)
                })

        },
        async deleteCustomer({ commit }, id) {
            axios
                .delete(`http://localhost:4000/api/customers/${id}`)
                .then((res) => {
                    commit('CUSTOMER_DELETED', res, id)
                })
                .catch((error) => {
                    commit('ERROR_DELETE_CUSTOMER', error)
                });
        }
    },
    mutations: {
        CUSTOMERS_REQUEST(state) {
            state.loading = true
        },
        SUCCESS_GET_CUSTOMERS(state, customers) {
            state.customers = customers
            state.loading = false


        },
        CUSTOMER_CREATED(state, customer) {
            state.customers.unshift(customer)
            state.customers_status = "Customer created succefull"
        },
        // SUCCESS_EDIT_CUSTOMER(state, customer){
        //     state.customer = customer
        //     console.log(customer)
        // },
        CUSTOMER_UPDATED(state, msg) {
            state.customers_status = msg
        },
        CUSTOMER_DELETED(state, res, id) {
            state.customers = state.customers.filter((customer) => customer.id_customer !== id)
            state.customers_status = res.data.msg
        },
        ERROR_DELETE_CUSTOMER(state, err) {
            state.customersErrors = err.response.data.msg
        }
    },
    getters: {
        customers: state => state.customers,
        customers_status: state => state.customers_status,
    },
}