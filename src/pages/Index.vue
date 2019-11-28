<template>
  <Layout>
    <VehiclesSection :vehicles="vehicles"/> 
  </Layout>
</template>


<page-query>
query Vehicles {
 vehicles: allVehicle { 
    edges {
      node {
        records {
          Id,
          Model
          NormalPrice
          Mileage
          DiscountPrice
          VehicleType
          EnginePower          
          Location
          Region
          RegistrationDate
          Image
          Link
        }
      }
    }
  }
}

</page-query>

<script>

import VehiclesSection from '../components/VehiclesSection';
export default {
  components: {
    VehiclesSection
  },
  metaInfo: {
    title: 'MAN TopUsed Deutschland'
  },
  methods: {
    formatGermanTypes(value) {
        if(value.includes('Anh')){
          return 'Anhänger';
        }     
        return value;
    }

  }, 
  computed: {
    
    vehicles: function() {
      const records = this.$page.vehicles.edges[0].node.records;
      return records.map(v => {
        return {...v, VehicleType: this.formatGermanTypes(v.VehicleType) }
      })
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
