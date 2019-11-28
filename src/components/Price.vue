<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Preis</label>     
      <b-form-select class="form-control" id="exampleFormControlSelect1" v-model="selectedPrice" :options="prices" @change="priceSelected">
        <template v-slot:first>
          <option :value="null">Bitte Preis auswählen</option>
          <option :value="-1">Aufsteigend</option>
          <option :value="-2">Absteigend</option>
        </template>
      </b-form-select>
    </div>
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
  data: function() {
    return {
      selectedPrice: null
    };
  },

  computed: {
    prices: function() {
      return this.$static.prices.edges[0].node.records.map(function(x) {
        return {
          text: x.PriceLegend,
          value: {
            To: x.To,
            From: x.From
          }
        };
      });
    }
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