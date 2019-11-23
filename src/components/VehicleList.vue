<template>
  		<ul v-if="vehicles.length">
			<Vehicle
				v-for="vehicle in vehicles"
				:key="vehicle.id"
				:vehicle="vehicle"				
			/>
		</ul>
</template>

<script>
import Vehicle from './Vehicle';

export default {

    components: {
        Vehicle 
    },
    props:{
      vehicles: {
          type: Array,
          required: true  
      }   
    }
}
</script>

<style>

</style>