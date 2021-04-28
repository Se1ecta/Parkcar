<template>
  <div class="home pa-6">
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="#2C3A47" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white">mdi-brightness-1</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        TARIFS
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Total tariffs: 5</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" >
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="#2C3A47" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="pink lighten-2" elevation="0" to = "/customers">
                          <v-icon color="white">mdi-car</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        CARS
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Total cars: 130</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card color="#2C3A47" :elevation="hover ? 16 : 2">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="orange lighten-2" elevation="0">
                          <v-icon color="white">mdi-finance</v-icon>
                        </v-btn>
                      </div>
                      <v-list-item-title class="headline mb-1 white--text">
                        Revenu
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >Revenu today: $2</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tab: null,
      fill: true,
      padding: 8,
      radius: 10,
      autoLineWidth: false,
    };
  },
};
</script>
