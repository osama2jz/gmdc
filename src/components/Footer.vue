<template>
  <!-- Footer -->
  <MDBFooter :text="['center', 'lg-start', 'muted']" style="width: 90%">
    <!-- Section: Social media -->
    <section
      style="border-bottom: 1px solid rgb(0, 75, 154, 0.5)"
      class="w-100 m-auto d-flex justify-content-center justify-content-lg-between p-4"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->
      <!-- Right -->
      <div>
        <a href="https://www.facebook.com/carzlanellc/" class="me-4 text-reset">
          <i class="fa-brands fa-facebook fa-2xl"></i>
        </a>
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x89b7e7494d4a5d3d:0xdad828ac2746ad2d?source=g.page.m.we._"
          class="me-4 text-reset"
        >
          <i class="fa-brands fa-google fa-2xl"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fa-brands fa-instagram fa-2xl"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
    <!-- Section: Links  -->
    <section class="d-flex">
      <MDBContainer class="text-center text-md-start mt-5" style="margin: auto">
        <!-- Grid row -->
        <MDBRow class="mt-3 row topp" style="margin-left: 15%">
          <!-- Grid column -->
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4 col-5 foot">
            <!-- Content -->
            <h6
              class="text-uppercase fw-bold mb-4 d-flex d-flex align-items-center"
            >
              <img src="../assets/logo.svg" style="width: 50px" />
              GMDC
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Here you
              can use rows and columns to organize your footer content. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>

          <!-- Grid column -->
          <!-- Grid column -->
          <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4 col-md-2">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a @click="$router.push('inventory')" class="text-reset"
                >Car Finder</a
              >
            </p>
            <p>
              <a to="/" class="text-reset">Apply Online</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Contact Us</a>
            </p>
            <!-- <p>
              <a href="#!" class="text-reset">Car Finder</a>
            </p> -->
          </MDBCol>
          <!-- Grid column -->
          <!-- Grid column -->
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4 col">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i class="fas fa-home me-3"></i> 2747 Annapolis Rd , Hanover , MD
              21076
            </p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              carzlane@mail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + (240) 307-3416</p>
            <!-- <p><i class="fas fa-phone me-3"></i> + (240) 307-3416</p> -->
          </MDBCol>
          <!-- Grid column -->
        </MDBRow>
        <!-- Grid row -->
      </MDBContainer>
    </section>
    <!-- Section: Links  -->
    <!-- Copyright -->
    <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.05)">
      ?? 2022 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">GMDC</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>

<script>
export default {
  name: "FooterB",
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .foot {
    width: 100% !important;
    margin-left: 0px !important;
    text-align: justify;
  }
  .topp {
    margin-left: 5px !important;
  }
}
</style>
