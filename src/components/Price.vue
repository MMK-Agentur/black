<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Preis</label>     
      <b-form-select class="form-control" id="exampleFormControlSelect1" v-model="selectedPrice" :options="prices" @change="priceSelected">
        <template v-slot:first>
          <option :value="null">Preis sortieren</option>
          <option :value="-1">Aufsteigend</option>
          <option :value="-2">Absteigend</option>
        </template>
      </b-form-select>
    </div>
  </div>
</template>

<script>
import BFormSelect from "bootstrap-vue";

export default {
  data: function() {
    return {
      selectedPrice: null,
      prices: []
    };
  },

  methods: {
    priceSelected(price) {
      this.$emit("priceSelected", price);
    }
  }
};
</script>

<style>
</style>