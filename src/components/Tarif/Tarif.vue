<template>
  <v-col>
    <v-hover v-slot="{ hover }" open-delay="200">
      <v-card
        class="mx-auto"
        dark
        min-height="200"
        max-height="200"
        color="#2C3A47"
        :elevation="hover ? 16 : 2"
      >
        <v-row>
          <v-col>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4"></div>
                <v-list-item-title class="headline mb-1 white--text">
                  {{ tarif.title }}
                </v-list-item-title>
                <p>{{ tarif.price }}</p>
                <p>{{ tarif.description }}</p>
                <v-list-item-group>
                  <v-btn
                    small
                    class="red white--text mr-2"
                    @click="deleteTarif(tarif.id_tarif)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn small class="success" @click="editCustom(row.item)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-list-item-group>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    tarif: {
      type: Object,
      default() {
        return {};
      },
    },
    
  },
  computed:{
  },
  methods:{
      ...mapActions(["deleteTarif"])
  }
};
</script>

<style>
</style>