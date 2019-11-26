<template>
  <div>
      <header>
      
      <div class="container">
        <nav class="navbar-main navbar-expand-lg">
          <h4 class="nav-title">MAN TopUsed Deutschland</h4>
          <div class="nav-first-level nav-container">
             <a href="https://www.topused.man.eu/de/de/">MAN TOPUSED STARTSEITE</a>
            <a href="https://www.truck.man.eu/de/en/index.html" id="logo">
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
                <img class="img-fluid" src="/assets/images/promo.svg" alt="promo" />
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
              <h3>Unternehmen</h3>
              <div class="list-group">
                <a class="list-item link" href="#">
                  <font-awesome
                    :icon="['fas', 'chevron-left']"
                    class="mr-2 mt-4"
                    style="color: #E40045;"
                  />Kontakt
                </a>
                <a class="list-item link" href="#">
                  <font-awesome
                    :icon="['fas', 'chevron-left']"
                    class="mr-2 mt-4"
                    style="color: #E40045;"
                  />MAN Truck & Bus Unternehmen
                </a>
                <a class="list-item link" href="#">
                  <font-awesome :icon="['fas', 'stop']" class="mr-2 mt-4" style="color: #E40045;" />Karriere
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
              <a class="link mr-2" href="#">Impresium</a>
              <a class="link mr-2" href="#">Datenschutz</a>
              <a class="link" href="#">Cookies</a>
            </div>
          </div>
        </div>       
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

<style>
</style>
