<template>
  <v-app id="inspire" style="weblit-app-region: drag">
    <WireFrame/>
    <v-main>
      <v-container class="scroll-y" fluid>
        <v-row >
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import WireFrame from './components/WireFrame'
export default {
  components:{
    WireFrame
  },
 
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