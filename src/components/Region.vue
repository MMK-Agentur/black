<template>
  <div>
    <b-form-select v-model="selectedRegion" :options="regions" @change="regionSelected">
      <template v-slot:first>
        <option :value="null" >-- Please select a region --</option>
      </template>
    </b-form-select>
  </div>
</template>

<static-query>
query {
  regions: allRegion {
    edges {
      node {
        records {
          Region
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
        selectedRegion: null
        }
  },

  computed: {
    regions: function() {
      return this.$static.regions.edges[0].node.records.map(x => x.Region);
    }
  },
  methods:{
     regionSelected(region){
         this.$emit("regionSelected", region);
     }   
    }
};
</script>

<style>
</style>