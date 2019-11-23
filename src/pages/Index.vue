<template>
  <Layout>

  <VehicleList :vehicles="$page.vehicles.edges[0].node.records">
  </VehicleList>
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
        }
      }
    }
  }
}

</page-query>

<script>

import VehicleList from '../components/VehicleList';

export default {
  components:{
    VehicleList
  },
  metaInfo: {
    title: 'Vehicles'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
