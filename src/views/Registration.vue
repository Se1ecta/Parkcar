<template>
  <div class="registration">
    <v-btn to="/registration/create" class="primary">Add</v-btn>
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
        :items="registrations"
        :search="search"
        :items-per-page="5"
        class="t-registrations"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{ registrations.indexOf(row.item) + 1 }}</td>
            <td>{{ row.item.id_registration }}</td>
            <td>{{ row.item.numbercar }}</td>
            <td>{{ row.item.numberspot }}</td>
            <td>{{ row.item.date_of_entry | formatDate }}</td>
            <td>{{ row.item.date_of_depature | formatDate }}</td>
            <!-- <td>{{ row.item.date_register }}</td> -->
            <td class="text-xs-center d-flex align-center">
              <v-btn small class="primary mr-2" @click="depature(row.item)"
                >depature</v-btn
              >
              <v-btn
                small
                class="red white--text mr-2"
                @click="
                  (snackbar = true),
                    deleteRegistration(row.item.id_registration)
                "
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn
                small
                :to="{
                  name: 'UpdateRegistration',
                  params: { id: row.item.id_registration },
                }"
                class="success"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    <v-snackbar v-model="snackbar">
      <p>{{ registrations_status }}</p>

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      snackbar: false,
      dialog: false,
      loading: false,
      index: 1,
      search: "",
      headers: [
        { text: "№", value: "index", sortable: true },
        { text: "ID Registration", value: "id_registration" },
        { text: "Number car", value: "numbercar" },
        { text: "Number spot", value: "numberspot" },
        { text: "Date of entry", value: "date_of_entry" },
        { text: "Date of depature", value: "date_of_depature" },
        { text: "", value: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["registrations", "registrations_status"]),
  },
  methods: {
    ...mapActions([
      "loadRegistrations",
      "updateRegistration",
      "deleteRegistration"
    ]),
    depature(registration) {
      registration.date_of_depature = new Date();
      console.log(registration);
      this.updateRegistration(registration);
      return registration;
    },
  },
  mounted() {
    this.loadRegistrations();
  },
};
</script>

<style scoped>
.registration {
  width: 100%;
  padding: 100px;
}
</style>