import Vue from 'vue'
import Vuex from 'vuex'
import Customers from './modules/customers'
import Cars from './modules/cars'
import ParkingSpot from './modules/parkingspots'
import Tarif from './modules/tarifs'
import Registration from './modules/registration'
import Marks from './modules/marks'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    
  },

  modules: {
    Customers,
    Cars,
    ParkingSpot,
    Tarif,
    Registration,
    Marks

  }
})
