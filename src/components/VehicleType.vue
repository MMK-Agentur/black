<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="form-group mb-3">
      <label for="exampleFormControlSelect1">Fahrzeugtyp</label>    
      <b-form-select class="form-control" id="exampleFormControlSelect1" v-model="selectedLocation" :options="locations" @change="locationSelected">
        <template v-slot:first>
          <option :value="null">Bitte Fahrzeugtyp auswählen</option>
        </template>
      </b-form-select>
    </div>
  </div>
</template>

<static-query>
query {
  vehicleTypes: allVehicleType {
    edges {
      node {
        records {
          Type
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
      return this.$static.vehicleTypes.edges[0].node.records.map(x => x.Type);
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