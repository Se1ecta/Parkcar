<template>
  <div class="create-tarif">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add tarif
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add new tarif</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <form @submit="addCustomer()">
              <v-text-field
                placeholder="Name*"
                outlined
                dense
                v-model="tarif.title"
              ></v-text-field>
              <v-text-field
                placeholder="Surname*"
                outlined
                dense
                v-model="tarif.price"
              ></v-text-field>
              <v-text-field
                placeholder="Phone*"
                outlined
                dense
                v-model="tarif.descroption"
              ></v-text-field>
              <v-btn @click="clear">clear </v-btn>
            </form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            @click="(dialog = false), create()"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      tarif: {
        title: "",
        price: "",
        description: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions(["createTarif"]),
    create() {
      this.createTarif(this.tarif);
    },
    clear() {
      this.tarif.title = "";
      this.tarif.price = "";
      this.tarif.description = "";
    },
  },
};
</script>

<style>
</style>