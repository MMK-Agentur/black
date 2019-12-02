<template>
  <div>
    <header>
      <div class="container">
        <nav class="navbar-main navbar-expand-lg">
          <h4 class="nav-title">MAN TopUsed Deutschland</h4>
          <div class="nav-first-level nav-container">
            <a href="https://www.topused.man.eu/de/de/" target="_blank">MAN TOPUSED STARTSEITE</a>
            <a href="https://www.truck.man.eu/de/de/lkw.html" id="logo" target="_blank">
              <img
                src="https://www.truck.man.eu/de/media/nresources/nimages/man_logo_batch.svg"
                alt="MAN"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
    <section>
      <div class>
        <div class="header-content v-100">
          <div class="container">
            <div class>
              <div class="header-media">
                <img class="img-fluid" src="/assets/images/promo2.svg" alt="promo"/>
                <img class="img-fluid" src="/assets/images/promo2.2.svg" alt="promo"style="margin-top:5px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <slot />

      <footer>
        <div class="footer-container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
              <h3 class="mb-5">Unternehmen</h3>
              <div class="list-group">
                <a
                  class="list-item link mb-4"
                  href="https://www.topused.man.eu/de/de/topused_general/TopUsed_Kontakt"
                  target="_blank"
                >
                  <img class="mr-3" src="/assets/images/link.svg" />Kontakt
                </a>
                <a
                  class="list-item link mb-4"
                  href="https://www.mantruckandbus.com/de/index.html"
                  target="_blank"
                >
                  <img class="mr-3" src="/assets/images/link.svg" />MAN Truck & Bus Unternehmen
                </a>
                <a
                  class="list-item link mb-4"
                  href="https://www.corporate.man.eu/de/risk-und-compliance/governance_-risk-und-compliance-bei-man/Governance_-Risk-und-Compliance-bei-MAN.html"
                  target="_blank"
                >
                  <img class="mr-3" src="/assets/images/link.svg" />Compliance
                </a>
                <a
                  class="list-item link mb-4"
                  href="https://www.karriere.man.eu/de/"
                  target="_blank"
                >
                  <img class="mr-3" src="/assets/images/link.svg" />Karriere
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-12 d-dlex flex-row justify-content-between">
            <div class="mb-2">
              <span>© MAN 2019</span>
            </div>
            <div class="links">
              <a
                class="link mr-2"
                href="https://www.topused.man.eu/de/de/topused_general/topused_impressum"
                target="_blank"
              >Impressum</a>
              <a
                class="link mr-2"
                href="https://www.topused.man.eu/de/de/topused_general/TopUsed-Datenschutz-Routing"
                target="_blank"
              >Datenschutz</a>
              <a
                class="link"
                href="https://www.topused.man.eu/de/de/topused_general/topused_cookie_information"
                target="_blank"
              >Cookies</a>
            </div>
          </div>
        </div>
         <client-only>
          <cookie-law theme="bambam" buttonText="Akzeptieren" buttonLinkNewTab>
            <div slot="message">
              Diese Website verwendet Cookies. Um die Website und ihre Angebote nutzen und weiternavigieren zu können, akzeptieren Sie bitte die Verwendung dieser Cookies, indem Sie auf die rote Schaltfläche „Akzeptieren“ klicken. Die verwendeten Cookies können Sie in Ihren Browsereinstellungen ändern. Weitere Informationen finden Sie auf unserer Seite
              <a
                class="link"
                href="https://www.topused.man.eu/de/de/topused_general/topused_cookie_information"
                target="_blank"
              >Datenschutz & Cookies.</a>
            </div>
          </cookie-law>
        </client-only>
      </footer>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import ClientOnly from "vue-client-only";
import CookieLaw from "vue-cookie-law";
export default {
  components: { CookieLaw, ClientOnly }
};
</script>

<style>
</style>
