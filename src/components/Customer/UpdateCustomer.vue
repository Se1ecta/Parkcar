<template>
  <div class="update-customer">
    <v-card>
      <v-btn to="/customers" class="primary">back</v-btn>
      <v-card-title>
        <span class="headline">Update customer</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <form>
            <v-text-field
              placeholder="Name*"
              outlined
              dense
              v-model="customer.name"
              :error-messages="nameErrors"
              :counter="100"
              label="Name"
              required
              color="blue"
              @input="$v.customer.name.$touch()"
              @blur="$v.customer.name.$touch()"
              >{{ customer.name }}</v-text-field
            >
            <v-text-field
              placeholder="Surname*"
              outlined
              dense
              v-model="customer.surname"
              :error-messages="surnameErrors"
              :counter="100"
              label="Surname"
              required
              color="blue"
              @input="$v.customer.surname.$touch()"
              @blur="$v.customer.surname.$touch()"
            >
              {{ customer.surname }}</v-text-field
            >
            <v-text-field
              placeholder="Phone*"
              outlined
              dense
              v-model="customer.phone"
              :error-messages="phoneErrors"
              :counter="14"
              label="Phone"
              required
              color="blue"
              @input="$v.customer.phone.$touch()"
              @blur="$v.customer.phone.$touch()"
              >{{ customer.phone }}</v-text-field
            >
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          type="submit"
          @click="(dialog = false), updateCustomer(customer), (snackbar = true)"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar">
      {{ customers_status }}

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
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  mixins: [validationMixin],

  validations: {
    customer: {
      name: { required, maxLength: maxLength(100) },
      surname: { required, maxLength: maxLength(100) },
      phone: { required, maxLength: maxLength(14) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked(val) {
          return val;
        },
      },
    },
  },

  data: () => ({
    snackbar: false,
    dialog: false,
    submitStatus: null,
    customer: {
      name: "",
      surname: "",
      phone: "",
    },
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.customer.name.$dirty) return errors;
      !this.$v.customer.name.maxLength &&
        errors.push("Name must be at most 100 characters long");
      !this.$v.customer.name.required && errors.push("Name is required.");
      return errors;
    },
    surnameErrors() {
      const errors = [];
      if (!this.$v.customer.surname.$dirty) return errors;
      !this.$v.customer.surname.maxLength &&
        errors.push("Surname must be at most 100 characters long");
      !this.$v.customer.surname.required && errors.push("Surname is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.customer.phone.$dirty) return errors;
      !this.$v.customer.phone.maxLength &&
        errors.push("Phone must be at most 7 characters long");
      !this.$v.customer.phone.required && errors.push("Phone is required.");
      return errors;
    },
    ...mapGetters(["customers_status"]),
  },

  methods: {
    ...mapActions(["updateCustomer"]),
    submit() {
      this.$v.$touch();
    },
  },
  created() {
    let URL = `http://localhost:4000/api/customers/${this.$route.params.id}`;

    axios.get(URL).then((res) => {
      this.customer = res.data.customer;
    });
  },
};
</script>
<style scoped>
.update-customer {
  width: 100%;
  height: 100%;
}
</style>