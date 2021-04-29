<template>
  <div class="customers">
    <v-btn to="/customers/create" class="primary"> Create </v-btn>
    <v-card color="#2d3d4b">
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
        :items="customers"
        :search="search"
        :items-per-page="5"
        class="t-customers"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{ customers.indexOf(row.item) + 1 }}</td>
            <td>{{ row.item.id_customer }}</td>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.surname }}</td>
            <td>{{ row.item.phone }}</td>
            <td>{{ row.item.date_register | formatDate }}</td>
            <td class="text-center d-flex align-center">
              <v-btn
                class="red white--text mr-2"
                small
                @click="(snackbar = true), deleteCustomer(row.item.id_customer)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
              <v-snackbar v-model="snackbar">
                <p>{{ customers_status }}</p>

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
              <v-btn
                small
                :to="{
                  name: 'UpdateCustomer',
                  params: { id: row.item.id_customer },
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
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
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
        { text: "№", value: "index", sortable: false },
        { text: "ID", value: "id_customer" },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Phone", value: "phone" },
        { text: "Date register", value: "date_register" },
        { text: "", value: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["customers", "customers_status"]),
  },
  methods: {
    ...mapActions(["loadCustomers", "deleteCustomer", "editCustomer"]),
    deleteBook(id) {
      const URL = `http://localhost:4000/api/customers/${id}`;
      let indexOfArrayItem = this.customers.findIndex(
        (i) => i.id_customer === id
      );
      axios
        .delete(URL)
        .then(() => {
          this.customers.splice(indexOfArrayItem, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadCustomers();
  },
};
</script>

<style scoped>
.customers {
  width: 100%;
  padding: 100px;
}
.v-card-title {
  background: "#2C3A47";
}
</style>