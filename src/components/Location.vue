<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12 mt-2">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Fahrzeugtyp</label>    
      <b-form-select class="form-control" id="exampleFormControlSelect1" v-model="selectedLocation" :options="locations" @change="locationSelected">
        <template v-slot:first>
          <option :value="null">Bitte wählen Sie ein Fahrzeugtyp aus</option>
        </template>
      </b-form-select>
    </div>
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
  data: function() {
    return {
      selectedLocation: null
    };
  },

  computed: {
    locations: function() {
      return this.$static.locations.edges[0].node.records.map(x => x.Location);
    }
  },
  methods: {
    locationSelected(location) {
      this.$emit("locationSelected", location);
    }
  }
};
</script>

<style>
</style>