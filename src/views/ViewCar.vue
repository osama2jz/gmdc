<template>
  <DummyVue>
    <threeD />
    <div>
      <carousel
        :autoplay="2000"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
        style="min-height: 200px; max-height: 500px; width: 100vw"
      >
        <slide v-for="slide in items" :key="slide.src">
          <img
            :src="slide.src"
            style="max-width: 90%; max-height: 100%; object-fit: scale-down"
          />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
    <div
      class="d-flex p-3 justify-content-between my-4 rounded align-items-center"
      style="width: 100vw; background-color: rgb(0, 0, 0, 0.1)"
    >
      <div class="mr-5">
        <h2>TOYOTA SUPRA Mk5 A90 white 2022</h2>
        <div
          class="mt-1 ml-1"
          style="background-color: rgb(0, 97, 148); width: 40%; height: 5px"
        ></div>
      </div>
      <div class="mr-4">
        <h2>$32,000</h2>
        <div
          class="mt-1 ml-1 float-right"
          style="background-color: rgb(0, 97, 148); width: 50px; height: 5px"
        ></div>
      </div>
    </div>
    <div
      style="display: flex; margin: auto; width: 90%; margin-bottom: 30px"
      class="specss"
    >
      <div class="row d-flex gap-1 ml-4 py-3 specs">
        <h3>Vehicle Specifications</h3>
        <h6 class="col d-flex mt-3 align-items-center">
          <img
            src="../assets/vin.svg"
            style="width: 20px"
            class="mr-2"
          />897482974
        </h6>
        <h6 class="col d-flex mt-3 align-items-center">
          <img src="../assets/tire.svg" style="width: 20px" class="mr-2" />2005
        </h6>
        <h6 class="col d-flex mt-3 align-items-center">
          <img
            src="../assets/transmission.svg"
            style="width: 20px"
            class="mr-2"
          />Automatic
        </h6>
        <div class="w-100"></div>
        <h6 class="col d-flex mt-3 align-items-center">
          <img
            src="../assets/meter.svg"
            style="width: 20px"
            class="mr-2"
          />2,300 miles
        </h6>
        <h6 class="col d-flex mt-3 align-items-center">
          <img
            src="../assets/location.svg"
            style="width: 20px"
            class="mr-2"
          />Islamabad
        </h6>
        <h6 class="col d-flex mt-3 align-items-center">
          <img src="../assets/fwd.svg" style="width: 20px" class="mr-2" />AWD
        </h6>
        <div
          class="mt-4 mb-2"
          style="
            border-top: 1px solid rgb(0, 0, 0, 0.1);
            width: 95%;
            margin: auto;
          "
        ></div>
        <h3>Vehicle Details</h3>
        <p>
          What is the price of a Toyota Supra? The 2023 Toyota GR Supra starts
          at $43,540. The cost of entry for the 6-cylinder engine is $52,500,
          and going all the way up to the new A91-MT model costs $58,345. The
          pricing of the GR Supra is similar to the new Nissan Z, and it's more
          affordable than the Audi TT, BMW Z4, and Porsche 718 Cayman.
          <br />
          What is the price of a Toyota Supra? The 2023 Toyota GR Supra starts
          at $43,540. The cost of entry for the 6-cylinder engine is $52,500,
          and going all the way up to the new A91-MT model costs $58,345. The
          pricing of the GR Supra is similar to the new Nissan Z, and it's more
          affordable than the Audi TT, BMW Z4, and Porsche 718 Cayman.
        </p>
      </div>
      <div class="d-flex flex-column m-auto text-center gap-y-2">
        <h4>Found your dream car?</h4>
        <Button
          @click="$router.push('/apply')"
          :title="'Book Now'"
          :primary="true"
          style="width: 300px"
        />
      </div>
    </div>
    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import Button from "@/components/Button.vue";
import threeD from "@/components/3d.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "carView",
  components: {
    DummyVue,
    Footer,
    Button,
    Carousel,
    Slide,
    Navigation,
    threeD,
  },

  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1100: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
      items: [
        {
          src: require("@/assets/s1.png"),
        },
        {
          src: require("@/assets/s2.webp"),
        },
        {
          src: require("@/assets/s3.jpg"),
        },
        {
          src: require("@/assets/s4.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/wall.webp");
  height: 550px;
  background-position: center center;
  align-items: center;
  justify-content: center;
  position: relative;
}
.search {
  display: flex;
  height: 60px;
  width: 600px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  z-index: 5;
}
.specs {
  border-right: 1px solid rgb(0, 0, 0, 0.3);
  width: 60%;
}
.cars {
  display: flex;
  gap: 5%;
  flex-direction: row;
  margin-top: 10px;
  z-index: 5;
}
h1 {
  z-index: 5;
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin: 20px 0px;
}
h2 {
  font-size: 26px;
  font-weight: bold;
}
h3 {
  font-size: 18px;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .specss {
    display: flex;
    flex-direction: column;
    margin-left: 0px !important;
  }
  .specs {
    border: none;
    width: 100vw;
    margin-left: 0px !important;
    padding-left: 0px !important;
    text-align: justify;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
}
</style>
