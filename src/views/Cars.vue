<template>
  <div class="cars">
    <v-btn to="/cars/create" class="primary">Add</v-btn>
    <v-card color="#2d3d4b" jusify="center">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          :loading="loading"
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="cars"
        :search="search"
        :items-per-page="5"
        class="t-cars"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{ cars.indexOf(row.item) + 1 }}</td>
            <td>{{ row.item.id_car }}</td>
            <td>{{ row.item.numbercar }}</td>
            <td>{{ row.item.title }}</td>
            <td>{{ row.item.name }}</td>
            <!-- <td>{{ row.item.date_register }}</td> -->
            <td class="text-xs-center d-flex align-center">
              <v-btn
                class="red white--text mr-2"
                small
                @click.prevent="(snackbar = true), deleteCar(row.item.id_car)"
                to="/cars"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
              <v-btn
                small
                :to="{
                  name: 'UpdateCar',
                  params: { id: row.item.id_car },
                }"
                class="success"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-snackbar v-model="snackbar">
                {{ cars_status }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      loading: false,
      index: 1,
      search: "",
      snackbar: false,
      headers: [
        { text: "№", value: "index", sortable: false },
        { text: "ID", value: "id_car" },
        { text: "Number car", value: "numbercar" },
        { text: "mark", value: "title" },
        { text: "customer", value: "name" },
        { text: "", value: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["cars", "cars_status"]),
  },
  methods: {
    ...mapActions(["loadCars", "deleteCar"]),
    // deleteCar(id){
    //   axios.delete(`http://localhost:4000/api/cars/${id}`)
    //     .then(()=>{
    //       this.cars = this.cars.filter((car) => car.id_car !== id)
    //     })
    // }
  },
  watch: {},
  mounted() {
    this.loadCars();
  },
};
</script>

<style scoped>
.cars {
  width: 100%;
  padding: 100px;
}
</style>