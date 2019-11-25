<template>
  <div class="container">
    <div class="teaser-section row">
                
      <div v-if="vehicles.length">
        <Vehicle v-for="vehicle in listedVehicles" :key="vehicle.id" :vehicle="vehicle" />
      </div>
       <div class="col-12">
            <b-pagination class="pagination justify-content-center text-center"
            hide-goto-end-buttons
            hide-ellipsis 
            align="center"
             v-model="currentPage" :total-rows="totalRows" :per-page="perPage"></b-pagination>               
       </div> 
    </div>
  </div>
</template>

<script>
import Vehicle from "./Vehicle";
import BPagination from "bootstrap-vue";

export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,     
    };
  },
  components: {
    Vehicle
  },
  props: {
    vehicles: {
      type: Array,
      required: true
    }
  },
  computed: {
   listedVehicles() {
       return this.vehicles.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
   },
   totalRows() {
       return this.vehicles.length;
   }
  }
};
</script>

<style>
</style>