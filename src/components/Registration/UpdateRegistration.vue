<template>
  <div class="create-registration">
    <v-card>
      <v-btn to="/registration" class="primary">Back</v-btn>
      <v-card-title>
        <span class="headline">Create new registration</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <form>
            <v-autocomplete
              :item-value="getIdCar"
              :items="cars"
              color="white"
              item-text="numbercar"
              label="Car"
              v-model="registration.car"
            ></v-autocomplete>
            <v-autocomplete
              :item-value="getIdParkingSpot"
              :items="parkingspots"
              color="white"
              item-text="numberspot"
              label="Parking spot"
              v-model="registration.parkingspot"
            ></v-autocomplete>
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          type="submit"
          @click="
            (dialog = false),
              updateRegistration(registration),
              (snackbar = true)
          "
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar">
      {{ registrations_status }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapGetters } from "vuex";

export default {

  data: () => ({
    snackbar: false,
    dialog: false,
    submitStatus: null,
    registration: {
      car: "",
      parkingspot: "",
      date_of_entry: "",
      date_of_depature: "",
    },
  }),
  computed: {
    ...mapGetters(["parkingspots", "cars", "registrations_status"]),
  },

  methods: {
    ...mapActions(["updateRegistration", "loadCars", "loadParkingSpots"]),
    submit() {
      this.$v.$touch();
    },
    getIdCar(item) {
      return item.id_car;
    },
    getIdParkingSpot(item) {
      return item.id_parkingspot;
    },
  },
  created() {
    let URL = `http://localhost:4000/api/registrations/${this.$route.params.id}`;

    axios.get(URL).then((res) => {
      this.registration = res.data.registration;
    });
  },
  mounted(){
    this.loadCars()
    this.loadParkingSpots()
  }
};
</script>


<style scoped>
.create-registration{
  width: 100%;
  height: 100%;
}
</style>