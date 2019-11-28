<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-12">
    <div class="newsletter" style="margin-top: 25px;">
      <b-button class="btn-cta" v-b-modal.modal-news>Newsletter bestellen</b-button>

      <b-modal id="modal-news" title="MAN Newsletter" hide-footer >
        <div class="container">
          <form>
            <div class="form-group container-form col-10 mx-auto pt-5 mt-5">
              <div class="mb-5">
                <label>Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-5">
                <label>Vorname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-5">
                <label>Unternehmen</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group container-form col-10 mx-auto">
              <h5>
                <strong>Ich interessiere mich für</strong>
              </h5>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1">Truck</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineCheckbox2">Bus</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1">Van</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="bar2 mt-2" for="inlineCheckbox2">Anhänger</label>
              </div>
            </div>
            <div class="form-group container-form col-10 mx-auto">
              <div class="mb-5">
                <label>E-Mail</label>
                <input type="email" class="form-control" />
                <div class="mt-5">
                  <a class="btn btn-primary" href="#">Anmelden</a>
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
  }
};
</script>

<style>
</style>