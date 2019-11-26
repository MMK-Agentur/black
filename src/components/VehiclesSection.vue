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
          <Location @locationSelected="filterByLocation"/>
          <Price @priceSelected="filterByPrice" />
        </div>
      </div>
      <h4 class="mt-5 mb-3"><strong>Black Friday Top Seller aus allen Regionen:</strong></h4>
    </div>

    <VehicleList :vehicles="vehiclesListed"></VehicleList>
  </div>
</template>

<script>
import VehicleList from "../components/VehicleList";
import Region from "../components/Region";
import Location from "../components/Location";
import Price from "../components/Price";
import { filter } from "lodash";

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
    filterVehicle() {
      const { Price, ...regionAndLocation } = this.filters;
      this.vehiclesListed = filter(this.vehicles, regionAndLocation);
      if (Price) {
        console.log(this.vehiclesListed);
        this.vehiclesListed = filter(this.vehiclesListed, function(vehicle) {
          const vehiclePrice = parseInt(vehicle.DiscountPrice);
          const to = parseInt(Price.To);
          const from = parseInt(Price.From);
          return vehiclePrice >= from && vehiclePrice <= to;
        });
        console.log(this.vehiclesListed);
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

    filterByLocation(location) {
      if (location) {
        this.filters = { ...this.filters, Location: location };
      } else {
        const { Location, ...newFilters } = this.filters;
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