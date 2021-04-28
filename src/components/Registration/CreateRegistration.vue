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
                :item-text="infoCar"
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            @click="(dialog = false), createRegistration(registration) , (snackbar = true)"
          >
            Add
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
import { mapActions, mapGetters } from "vuex";
// import Multiselect from "vue-multiselect";

export default {
  components: {
    // Multiselect,
  },
  data: () => ({
    snackbar:false,
    model: null,
    search: null,
    tab: null,
    dialog: false,
    registration: {
      car: "",
      parkingspot: "",
      date_of_entry: "",
      date_of_depature: "",
    },
    submitStatus: null,
  }),
  computed: {
    ...mapGetters(["parkingspots", "cars", "registrations_status"]),
  },
  methods: {
    ...mapActions(["createRegistration", "loadParkingSpots", "loadCars"]),
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.customer.$reset();
      this.registration.car = "";
      this.registration.parkingspot = "";
      this.registration.date_of_entry = "";
      this.registration.date_of_depature;
    },
    // customLabel({ numberspot, desc }) {
    //   return `${numberspot} – ${desc}`;
    // },
    getIdCar(item) {
      return item.id_car;
    },
    getIdParkingSpot(item) {
      return item.parkingspot;
    },
    infoCar(car) {
      return `${car.numbercar}`;
    },
  },
  mounted() {
    this.loadParkingSpots();
    this.loadCars();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.create-registration{
  width: 100%;
  height: 100%;
}
</style>