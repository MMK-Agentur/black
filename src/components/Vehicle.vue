<template>
  <div>
   <b-card
   :title="vehicle.Model"
 
   >
   <g-image :src="imageSrc"/>
   </b-card>
  </div>
</template>

<script>

import {BCard} from 'bootstrap-vue';

export default {
    components: {
BCard
    },
 props:{
     vehicle:{
         type: Object,
         required: true
     }
 },
 computed: {
     imageSrc: function() {
         return `assets/${this.vehicle.Image}.jpg`;
     }
 }
}
</script>

<style>

</style>