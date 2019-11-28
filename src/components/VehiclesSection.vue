<template>
  <div>
    <div class="container">
      <div class="filter">
        <div class="filter-title">
          <h4>
            <strong>Filtern nach:</strong>
          </h4>
        </div>
         <div class="filter-group">
          <Region @regionSelected="filterByRegion" />
          <VehicleType @locationSelected="filterByVehicleType"/>
          <Price @priceSelected="filterByPrice" />
        </div> 
      </div>
      <h4 class="mt-5 mb-3"><strong>Blackout Friday Top Seller aus allen Regionen:</strong></h4>
    </div>
    <VehicleList :vehicles="vehiclesListed"></VehicleList>
  </div>
</template>

<script>
import VehicleList from "../components/VehicleList";
import Region from "../components/Region";
import VehicleType from "../components/VehicleType";
import Price from "../components/Price";
import { filter, orderBy } from "lodash";

export default {
  components: {
    VehicleList,
    Region,
    VehicleType,
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
      vehiclesListed: [...this.vehicles],
      filters: {}
    };
  },

  methods: {
    filterVehicle() {
      const { Price, ...regionAndLocation } = this.filters;
      this.vehiclesListed = filter(this.vehicles, regionAndLocation);
      if (Price) {
        if(Price === -1) {
          this.vehiclesListed = orderBy(this.vehiclesListed, x => parseInt(x.DiscountPrice), ['asc']);
          return;
        }
        if(Price === -2) {
          this.vehiclesListed = orderBy(this.vehiclesListed, x => parseInt(x.DiscountPrice), ['desc']);
          return;
        }
       
        this.vehiclesListed = filter(this.vehiclesListed, function(vehicle) {
          const vehiclePrice = parseInt(vehicle.DiscountPrice);
          const to = parseInt(Price.To);
          const from = parseInt(Price.From);
          return vehiclePrice >= from && vehiclePrice <= to;
        });
       
      }
    },
    filterByRegion(region) {
      if (region) {
        this.filters = { ...this.filters, Region: region };
      } else {
        const { Region, ...newFilters } = this.filters;
        this.filters = newFilters;
      }
      this.filterVehicle();
    },

    filterByVehicleType(vehicleType) {
      if (vehicleType) {
        this.filters = { ...this.filters, VehicleType: vehicleType };
      } else {
        const { VehicleType, ...newFilters } = this.filters;
        this.filters = newFilters;
      }
      this.filterVehicle();
    },
    filterByPrice(price) {
      if (price) {
        this.filters = { ...this.filters, Price: price };
      } else {
        const { Price, ...newFilters } = this.filters;
        this.filters = newFilters;
      }
      this.filterVehicle();
    }
  }
};
</script>

<style>
</style>