<template>
  <div class="parking-spot">
      <v-card class="d-flex justify-center flex-column align-center pa-20p" color="orange">
          {{parkingspot.numberspot}}
          <v-icon>mdi-truck</v-icon>
      </v-card>
  </div>    
</template>

<script>
export default {
    props:{
        parkingspot:{
            type:Object,
            default(){
                return {}
            }
        }
    }

}
</script>

<style scoped>
    .parking-spot{
        width: 60px;
        height: 100%;

        margin: 2px ;

    }
</style>