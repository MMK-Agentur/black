<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="newsletter" style="margin-top: 25px;">
      <b-button class="btn-cta" v-b-modal.modal-news>Newsletter bestellen</b-button>

      <b-modal id="modal-news" title="MAN Newsletter" hide-footer >
        <div class="container">
          <form action="https://eu2.cleverreach.com/f/241851-237982/wcs/" method="post" target="_blank">
            <div class="form-group container-form col-10 mx-auto pt-5 mt-5">
              <div id="5124043" class="mb-5">
                <label for="text5124043">Name</label>
                <input id="text5124043" name="1137843" type="text" class="form-control" />
              </div>
              <div id="5124044" class="mb-5">
                <label for="text5124044" class="itemname">Vorname</label>
                <input id="text5124044" name="1137842" type="text" class="form-control" />
              </div>
              <div id="5124045" class="mb-5">
                <label for="text5124045" class="itemname">Unternehmen</label>
                <input id="text5124045" name="1137844" type="text" class="form-control" />
              </div>
            </div>
            <div id="5124051" class="form-group container-form col-10 mx-auto">
              <h5>
                <strong>Ich interessiere mich für</strong>
              </h5>
              <div class="form-check form-check-inline">
                <input id="Truck5124051"
                  class="form-check-input"
                  type="checkbox"
                  name="1138264[]"
                  value="Truck"
                />
                <label class="form-check-label" for="Truck5124051">Truck</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="Bus5124051"
                  name="1138264[]"
                  value="Bus"
                />
                <label class="form-check-label" for="Bus5124051">Bus</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="Van5124051" 
                  name="1138264[]" 
                  value="Van"
                />
                <label class="form-check-label" for="Van5124051">Van</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                id="Anh&auml;nger5124051"
                  class="form-check-input"
                  type="checkbox"
                  name="1138264[]" 
                  value="Anh&auml;nger"                
                />
                <label class="bar2 mt-2" for="Anh&auml;nger5124051">Anhänger</label>
              </div>
            </div>
            <div class="form-group container-form col-10 mx-auto">
              <div id="5123904" rel="email" class="mb-5">
                <label for="text5123904" >E-Mail</label>
                <input id="text5123904" name="email" value="" type="email" class="form-control" />
                <div id="5123906" class="mt-5">
                     <button  class="btn btn-primary" type="submit" @click="close()" >Anmelden</button>                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { BModal } from "bootstrap-vue";
export default {
  components: {
    BModal
  },
  methods: {
     close() {
        this.$bvModal.hide("modal-news");
      },
  }
};
</script>

<style>
</style>