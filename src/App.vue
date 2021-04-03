<template>
  <v-app id="inspire" style="weblit-app-region: drag">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent=""
      color="#2C3A47"
      dark
      app
    >
      <v-list-item px-2 pt-1>
        <v-list-item-title> ParkCar </v-list-item-title>
      </v-list-item>
      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['item-alt']"
            active-class="blue--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="blue--text"
            >
              <v-list-item-action v-if="item.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            route
            :to="item.route"
            active-class="blue--text"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar

        app
        color="#2C3A47"
        dark
      >
        <v-app-bar-nav-icon @click.stop="mini = !mini"  class="clickable"/>
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
        >
          <span class="hidden-sm-and-down">ParkCar</span>
        </v-toolbar-title>
        <v-spacer />
        <!-- <v-btn icon v-on:click="logout"  class="clickable">
          <v-icon>mdi-logout</v-icon>
        </v-btn> -->
      </v-app-bar>
    <v-main>
      <v-container class="scroll-y" fluid>
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    mini: false,
    group: null,
    items: [
      { icon: "mdi-order-bool-ascending", text: "Orders", route: "/orders" },
      { icon: "mdi-human-greeting", text: "Register customer", route: "/register-cust" },
      { icon: "mdi-home", text: "Dashboard", route: "/dashboard" },
      { icon: "mdi-finance", text: "Revenue", route: "/home" },
      { icon: "mdi-magnify", text: "Search", route: "/about" },
    ],
  }),
};
</script>

<style scoped>
.clickable {
  -webkit-app-region: no-drag;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>