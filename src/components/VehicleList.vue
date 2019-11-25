<template>
  <div class="container">
    <div class="teaser-section row">
      <div v-if="vehicles.length">
        <Vehicle v-for="vehicle in listedVehicles" :key="vehicle.id" :vehicle="vehicle" />
      </div>
      <div class="col-12">
        <b-pagination
          class="pagination justify-content-center text-center"
          hide-goto-end-buttons
          hide-ellipsis
          align="center"
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          limit="3"
        >
          <template style="color: #E40045;" v-slot:prev-text>
            <font-awesome :icon="['fas', 'chevron-left']" style="color: #E40045;" />
          </template>
          <template v-slot:next-text>
            <font-awesome :icon="['fas', 'chevron-right']" style="color: #E40045;" />
          </template>

          <template v-slot:page="{ page, active }">
            <div>{{page}}</div>
          </template>
        </b-pagination>
      </div>
    </div>
    <div></div>
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
      
      if (this.windowWidth < 768) return 1;
      if (this.windowWidth >= 768 && this.windowWidth < 922 ) return 2;
      
      return 8;
    }
  }
};
</script>

<style>
</style>