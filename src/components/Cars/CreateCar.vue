<template>
  <div class="create-car">
    <v-btn to="/cars">back</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add new car</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form>
              <v-text-field
                placeholder="Number car*"
                outlined
                dense
                :error-messages="numberErrors"
                :counter="6"
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
              <v-btn @click="clear">clear </v-btn>
            </form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            @click="(snackbar = true), createCar(car), clear(), (dialog = false)"
            >Add</v-btn
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
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    car: {
      numbercar: { required, maxLength: maxLength(6) },
    },
  },
  components: {
    // Multiselect,
  },
  data() {
    return {
      snackbar: false,
      selected: null,
      value: [],
      dialog: false,
      car: {
        numbercar: "",
        customer: "",
        mark: "",
      },
    };
  },
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
    ...mapActions(["createCar", "loadCustomers", "loadMarks"]),
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.car.numbercar = "";
      this.car.mark = "";
      this.car.customer = "";
    },
    infoCustomer(customer) {
      return ` ${customer.name}  ${customer.surname} (id: ${customer.id_customer})`;
    },
    infoMark(mark) {
      return ` ${mark.title}  ${mark.model} `;
    },
    getIdCustomer(item) {
      return item.id_customer;
    },
    getIdMark(item) {
      return item.id_mark;
    },

  },
  mounted() {
    this.loadCustomers();
    this.loadMarks();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.create-car{
  width: 100%;
  height: 100%;
}
</style>