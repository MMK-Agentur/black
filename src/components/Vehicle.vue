<template>
  <div>
    <li>{{vehicle.Model}}</li>
    <li>{{vehicle.EnginePower}}</li>
  </div>
</template>

<script>
export default {
 props:{
     vehicle:{
         type: Object,
         required: true
     }
 }
}
</script>

<style>

</style>