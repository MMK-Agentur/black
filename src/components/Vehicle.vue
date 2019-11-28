<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-5">    
    <div class="card h-100 ">
      <a :href="vehicle.Link" target="_blank"><g-image :src="imageSrc" class="card-img-top" alt="..." /></a>
      
      <div class="card-body">
        <h3 class="card-title">{{vehicle.Model}}</h3>
        <div class="media-promo d-flex flex-row justify-content-between">
          <h3 class="text-r">{{formatPrice(vehicle.DiscountPrice)}} EUR</h3>
          <h3 class="text-l">-20%</h3>
        </div>
        <div class="card-text-promo">
          <div class="price-text">{{formatPrice(vehicle.NormalPrice)}}</div>
          <small class="val-text">EUR (netto)</small>
        </div>
        <div class="card-list">
           <div class="card-list_item">
            <img class="icon" src="/assets/images/truck.svg" />
            <p class="text-list">{{vehicle.VehicleType}}</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/Enginee.svg" />
            <p class="text-list">{{vehicle.EnginePower}}</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/calendar.svg" />
            <p class="text-list">{{vehicle.RegistrationDate}}</p>
          </div>
          <div class="card-list_item">              
            <img class="icon" src="/assets/images/man_icons_48px_anthrazit_rot_wlan_truck.svg" />
            <p class="text-list">{{vehicle.Mileage}}</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/location.svg" />
            <p class="text-list">{{formatGermanCities(vehicle.Location)}}</p> 
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard
  },

  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc: function() {
      return `/assets/images/${this.vehicle.Image}.jpg`;
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatGermanCities(value) {
        if(value.includes('ttingen')){
          return 'Göttingen';
        }
        if(value.includes('nberg')) {
          return 'Nürnberg';
        }
    }
  }
};
</script>

<style>
</style>