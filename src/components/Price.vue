<template>
  <div>
    <b-form-select v-model="selectedPrice" :options="prices" @change="priceSelected">
      <template v-slot:first>
        <option :value="null" >-- Please select a price --</option>
      </template>
    </b-form-select>
  </div>
</template>

<static-query>
query {
  prices: allPrice {
    edges {
      node {
        records {
          PriceLegend
          From
          To
        }
      }
    }
  }
}
</static-query>

<script>
import BFormSelect from "bootstrap-vue";

export default {
  data: function () {
    return {
        selectedPrice: null
        }
  },

  computed: {
    prices: function() {
      return this.$static.prices.edges[0].node.records.map(x => x.PriceLegend);
    }
  },
  methods:{
     priceSelected(price){
         this.$emit("priceSelected", price);
     }   
    }
};
</script>

<style>
</style>