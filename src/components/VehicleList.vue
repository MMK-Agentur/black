<template >
  <div class="container">
    <div class="teaser-section row">
      <Vehicle v-for="vehicle in listedVehicles" :key="vehicle.id" :vehicle="vehicle" />
      <div class="col-12">
        <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          limit="3"
        > 
        <template v-slot:first-text>
            <font-awesome :icon="['fas', 'angle-double-left']"  style="color: #E40045;" ></font-awesome>
          </template>
          <template v-slot:prev-text>
            <font-awesome :icon="['fas', 'chevron-left']"  style="color: #E40045;" ></font-awesome>
          </template>
          <template v-slot:next-text>
            <font-awesome :icon="['fas', 'chevron-right']"  style="color: #E40045;" ></font-awesome>
          </template> 
             <template v-slot:last-text>
            <font-awesome :icon="['fas', 'angle-double-right']"  style="color: #E40045;" ></font-awesome>
          </template>        
        </b-pagination>  
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
      currentPage: 1
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
      return this.vehicles.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.vehicles.length;
    },
    perPage() {
      if (this.windowWidth < 576) return 1;
      if (this.windowWidth >= 576 && this.windowWidth <= 992) return 2;

      return 8;
    }
  }
};
</script>

<style>
</style>