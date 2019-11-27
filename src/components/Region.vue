<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="form-group mb-2">
      <label for="exampleFormControlSelect1">Region</label>
      <b-form-select
        class="form-control"
        id="exampleFormControlSelect1"
        v-model="selectedRegion"
        :options="regions"
        @change="regionSelected"
      >
        <template v-slot:first>
          <option :value="null">Bitte wählen Sie eine Region aus</option>
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
      selectedRegion: null,
      regions: ["Region Süd", "Region Ost", "Region West", "Region Nord"]
    };
  },

  methods: {
    regionSelected(region) {
      this.$emit("regionSelected", region);
    }
  }
};
</script>

<style>
</style>