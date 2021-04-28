<template>
  <div class="tarifs ma-10">
    <CreaateTarif />
    <v-container class="mt-5">
      <v-row colls="12">
        <Tarif
            v-for="tarif in tarifs"
            :key="tarif.id_tarif"
            :tarif="tarif"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Tarif from '../components/Tarif/Tarif'
import CreaateTarif from "../components/Tarif/CreateTarif";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tab: null,
      fill: true,
      padding: 8,
      radius: 10,
      autoLineWidth: false,
    };
  },
  components: {
    CreaateTarif,
    Tarif
  },
  computed: {
    ...mapGetters(["tarifs"]),
  },
  methods: {
    ...mapActions(["loadTarifs"]),
  },
  mounted() {
    this.loadTarifs();
  },
};
</script>

<style>
</style>