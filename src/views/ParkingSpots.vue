<template>
  <div class="parking-spots ">
    <v-container class="d-flex justify-center align-center flex-wrap">
      <ParkingSpot
        v-for="parkingspot in parkingspots"
        :key="parkingspot.id_parkingspot"
        :parkingspot="parkingspot"
      /> </v-container>
  </div>
</template>

<script>
import ParkingSpot from "../components/ParkingSpots/ParkingSpot";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    ParkingSpot,
  },
  computed: {
    ...mapGetters(["parkingspots"]),
  },
  methods: {
    ...mapActions(["loadParkingSpots"]),
  },
  mounted() {
    this.loadParkingSpots();
  },
};
</script>

<style scoped>
.parking-spots {
  width: 100%;
  height: 100%;
  padding: 20%;
}
</style>