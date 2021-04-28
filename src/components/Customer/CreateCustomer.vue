<template>
  <div class="register-customer ">
    <v-btn class="primary" to= "/customers">back</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add new customer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form @submit="addCustomer()">
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
              ></v-text-field>
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
              ></v-text-field>
              <v-text-field
                placeholder="Phone*"
                outlined
                dense
                v-model="customer.phone"
                :error-messages="phoneErrors"
                :counter="7"
                label="Phone"
                required
                color="blue"
                @input="$v.customer.phone.$touch()"
                @blur="$v.customer.phone.$touch()"
              ></v-text-field>
              <v-btn @click="clear">clear </v-btn>
            </form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            @click="
              (snackbar = true), createCustomer(customer), clear(), (dialog = false)
            "
            >Add</v-btn
          >
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
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  mixins: [validationMixin],

  validations: {
    customer: {
      name: { required, maxLength: maxLength(100) },
      surname: { required, maxLength: maxLength(100) },
      phone: { required, maxLength: maxLength(7) },
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
    customer: {
      name: "",
      surname: "",
      phone: "",
    },
    submitStatus: null,
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
    ...mapActions(["createCustomer"]),
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.customer.$reset();
      this.customer.name = "";
      this.customer.surname = "";
      this.customer.phone = "";
    },
  },
};
</script>

<style scoped>
.register-customer{
  width: 100%;
  height: 100%;
}
</style>