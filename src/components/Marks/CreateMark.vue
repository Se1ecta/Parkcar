<template>
  <div class="register-mark ">
    <v-btn class="primary" to= "/marks">back</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add new mark</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form>
              <v-text-field
                placeholder="Name*"
                outlined
                dense
                v-model="mark.name"
                :error-messages="nameErrors"
                :counter="100"
                label="Name"
                required
                color="blue"
                @input="$v.mark.name.$touch()"
                @blur="$v.mark.name.$touch()"
              ></v-text-field>
              <v-text-field
                placeholder="Surname*"
                outlined
                dense
                v-model="mark.surname"
                :error-messages="surnameErrors"
                :counter="100"
                label="Surname"
                required
                color="blue"
                @input="$v.mark.surname.$touch()"
                @blur="$v.mark.surname.$touch()"
              ></v-text-field>
              <v-text-field
                placeholder="Phone*"
                outlined
                dense
                v-model="mark.phone"
                :error-messages="phoneErrors"
                :counter="7"
                label="Phone"
                required
                color="blue"
                @input="$v.mark.phone.$touch()"
                @blur="$v.mark.phone.$touch()"
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
              (snackbar = true), createmark(mark), clear(), (dialog = false)
            "
            >Add</v-btn
          >
        </v-card-actions>
      </v-card>
    <v-snackbar v-model="snackbar">
      {{ marks_status }}

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
    mark: {
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
    mark: {
      name: "",
      surname: "",
      phone: "",
    },
    submitStatus: null,
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.mark.name.$dirty) return errors;
      !this.$v.mark.name.maxLength &&
        errors.push("Name must be at most 100 characters long");
      !this.$v.mark.name.required && errors.push("Name is required.");
      return errors;
    },
    surnameErrors() {
      const errors = [];
      if (!this.$v.mark.surname.$dirty) return errors;
      !this.$v.mark.surname.maxLength &&
        errors.push("Surname must be at most 100 characters long");
      !this.$v.mark.surname.required && errors.push("Surname is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.mark.phone.$dirty) return errors;
      !this.$v.mark.phone.maxLength &&
        errors.push("Phone must be at most 7 characters long");
      !this.$v.mark.phone.required && errors.push("Phone is required.");
      return errors;
    },
    ...mapGetters(["marks_status"]),
  },

  methods: {
    ...mapActions(["createmark"]),
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.mark.$reset();
      this.mark.name = "";
      this.mark.surname = "";
      this.mark.phone = "";
    },
  },
};
</script>

<style scoped>
.register-mark{
  width: 100%;
  height: 100%;
}
</style>