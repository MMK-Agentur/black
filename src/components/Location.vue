<template>
  <div>
    <b-form-select v-model="selectedLocation" :options="locations" @change="locationSelected">
      <template v-slot:first>
        <option :value="null" >-- Please select a location --</option>
      </template>
    </b-form-select>
  </div>
</template>

<static-query>
query {
  locations: allLocation {
    edges {
      node {
        records {
          Location
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
        selectedLocation: null
        }
  },

  computed: {
    locations: function() {
      return this.$static.locations.edges[0].node.records.map(x => x.Location);
    }
  },
  methods:{
     locationSelected(location){
         this.$emit("locationSelected", location);
     }   
    }
};
</script>

<style>
</style>