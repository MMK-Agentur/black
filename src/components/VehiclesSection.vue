<template>
  <div>
    <Region @regionSelected="filterByRegion" />
    <Location @locationSelected="filterByLocation"/>
    <Price @priceSelected="filterByPrice"/>
    <VehicleList :vehicles="vehiclesListed"></VehicleList>
  </div>
</template>

<script>
import VehicleList from "../components/VehicleList";
import Region from "../components/Region";
import Location from "../components/Location";
import Price from "../components/Price";

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
      vehiclesListed: []
    };
  },
  mounted: function() {
    this.vehiclesListed = this.vehicles;
  },
  methods: {
    filterByRegion(region) {
      if (region) {
        this.vehiclesListed = this.vehicles.filter(x => x.Region == region);
      } else {
        this.vehiclesListed = this.vehicles;
      }
    },

    filterByLocation(location) {
      if (location) {
        this.vehiclesListed = this.vehicles.filter(x => x.Location == location);
      } else {
        this.vehiclesListed = this.vehicles;
      }
    },
     filterByPrice(price) {
      console.log(price);
      }
    }
  
};
</script>

<style>
</style>