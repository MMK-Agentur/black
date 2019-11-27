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
  computed: {
    vehicles: function() {
      return this.$page.vehicles.edges[0].node.records;
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
