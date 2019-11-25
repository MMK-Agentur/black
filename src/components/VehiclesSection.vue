<template>
  <div>
    <Region @regionSelected="filterByRegion" />
    <Location @locationSelected="filterByLocation" />
    <Price @priceSelected="filterByPrice" />
    <VehicleList :vehicles="vehiclesListed"></VehicleList>
  </div>
</template>

<script>
import VehicleList from "../components/VehicleList";
import Region from "../components/Region";
import Location from "../components/Location";
import Price from "../components/Price";
import {filter} from "lodash";

export default {
  components: {
    VehicleList,
    Region,
    Location,
    Price
  },

  props: {
    vehicles: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      vehiclesListed: [],
      filters: {}
    };
  },
  mounted: function() {
    this.vehiclesListed = this.vehicles;
  },
  methods: {
    
    filterByRegion(region) {
      if (region) {
        this.filters = {...this.filters,Region: region};
        
      } else {
          const {Region, ...newFilters} = this.filters;
        this.filters = newFilters;
      }
      this.vehiclesListed = filter(this.vehicles, this.filters);
    },

    filterByLocation(location) {
     if (location) {
        this.filters = {...this.filters,Location: location};
        
      } else {
          const {Location, ...newFilters} = this.filters;
        this.filters = newFilters;
      }
      this.vehiclesListed = filter(this.vehicles, this.filters);
    },
    filterByPrice(price) {
      console.log(price);
    }
  }
};
</script>

<style>
</style>