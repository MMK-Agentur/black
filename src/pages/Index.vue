<template>
  <Layout>
    <VehicleList :vehicles="vehicles"></VehicleList>
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
        }
      }
    }
  }
}

</page-query>

<script>
import VehicleList from "../components/VehicleList";

export default {
  components: {
    VehicleList
  },
  metaInfo: {
    title: "Vehicles"
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
