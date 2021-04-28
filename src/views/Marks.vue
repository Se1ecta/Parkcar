<template>
  <div class="marks">
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
        :items="marks"
        :search="search"
        :items-per-page="5"
        class="t-marks"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{ marks.indexOf(row.item) + 1 }}</td>
            <td>{{ row.item.id_mark }}</td>
            <td>{{ row.item.title }}</td>
            <td>{{ row.item.model }}</td>
            <td class="text-center d-flex align-center">
              <v-btn
                small
                class="red white--text mr-2"
                @click="deleteMark(row.item.id_mark)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn
                small
                :to="{
                  name: 'UpdateMark',
                  params: { id: row.item.id_mark },
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      index: 1,
      search: "",
      headers: [
        { text: "№", value: "index", sortable: false },
        { text: "ID", value: "id_customer" },
        { text: "Title", value: "title" },
        { text: "Model", value: "model" },
        { text: "", value: "" },
      ],
    };
  },
  computed: {
    ...mapGetters(["marks"]),
  },
  methods: {
    ...mapActions(["loadMarks"]),
  },
  mounted() {
    this.loadMarks();
  },
};
</script>

<style scoped>
.marks {
  width: 100%;
  padding: 100px;
}
</style>