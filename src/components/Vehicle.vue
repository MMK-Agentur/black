<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
    <div class="card">
      <g-image :src="imageSrc" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">MAN TGX 18.420 4X2</h3>
        <div class="card-text-promo">
          <div class="price-text">57.000,00</div>
          <small class="val-text">EUR (netto)</small>
        </div>
        <div class="card-list">
          <div class="card-list_item">
            <img class="icon" src="/assets/images/truck.svg" />

            <p class="text-list">Baustofffahrzeug</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/Enginee.svg" />
            <p class="text-list">294 kW (399 PS)</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/calendar.svg" />
            <p class="text-list">03/2013</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/calendar.svg" />
            <p class="text-list">465.359 km</p>
          </div>
          <div class="card-list_item">
            <img class="icon" src="/assets/images/location.svg" />
            <p class="text-list">Chemnitz</p>
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
      return `assets/images/${this.vehicle.Image}.jpg`;
    }
  }
};
</script>

<style>
</style>