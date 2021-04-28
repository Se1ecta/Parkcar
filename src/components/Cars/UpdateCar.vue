<template>
  <div class="update-car">
    <v-btn to="/cars" class="primary">Back</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Update car</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <form>
            <v-text-field
              placeholder="Number car*"
              outlined
              dense
              label="Number"
              required
              color="blue"
              v-model="car.numbercar"
            ></v-text-field>
            <v-autocomplete
              :item-value="getIdMark"
              :items="marks"
              color="white"
              :item-text="infoMark"
              label="Mark"
              v-model="car.mark"
            ></v-autocomplete>
            <v-autocomplete
              :item-value="getIdCustomer"
              :items="customers"
              color="white"
              :item-text="infoCustomer"
              label="Customer"
              v-model="car.customer"
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
          @click="(snackbar = true), updateCar(car), (dialog = false)"
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar">
      {{ cars_status }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";


export default {

  data: () => ({
    car: {
      numbercar: "",
      customer: "",
      mark: "",
    },
    snackbar: false,
    dialog: false,
    submitStatus: null,
  }),
  computed: {
    ...mapGetters(["customers", "marks", "cars_status"]),
    numberErrors() {
      const errors = [];
      if (!this.$v.car.numbercar.$dirty) return errors;
      !this.$v.car.numbercar.maxLength &&
        errors.push("Name must be at most 6 characters long");
      !this.$v.car.numbercar.required && errors.push("Number is required.");
      return errors;
    },
  },
  methods: {
    ...mapActions(["updateCar", "loadCustomers", "loadMarks"]),
    submit() {
      this.$v.$touch();
    },
    getIdCustomer(item) {
      return item.id_customer;
    },
    infoCustomer(customer) {
      return ` ${customer.name}  ${customer.surname} (id: ${customer.id_customer})`;
    },
    getIdMark(item) {
      return item.id_mark;
    },
    infoMark(mark) {
      return ` ${mark.title}  ${mark.model} `;
    },
  },
  created() {
    let URL = `http://localhost:4000/api/cars/${this.$route.params.id}`;

    axios.get(URL).then((res) => {
      this.car = res.data.car;
    });
  },
  mounted(){
    this.loadCustomers()
    this.loadMarks()
  }
};
</script>


<style scoped>
.update-car{
  width: 100%;
  height: 100%;
}
</style>