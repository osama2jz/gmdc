<template>
  <DummyVue>
    <div class="main">
      <div
        style="
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: black;
          opacity: 0.4;
        "
      ></div>

      <h1 class="text-center mt-0">FIND YOUR SOUL RIDE</h1>
      <div class="search">
        <img src="../assets/search.svg" style="width: 25px" />
        <input
          type="text"
          placeholder="Search Make, Model or keyword"
          class="input input-ghost w-full max-w-50"
        />
        <Button
          @click="$router.push('inventory')"
          :title="'GO'"
          :primary="true"
        />
      </div>
      <div class="carss">
        <div class="cars">
          <MiniCard
            @click="$router.push('inventory')"
            :title="'Trucks'"
            :icon="'trucks'"
          />
          <MiniCard
            @click="$router.push('inventory')"
            :title="'Hatchbacks'"
            :icon="'hatchbacks'"
          />
          <MiniCard
            @click="$router.push('inventory')"
            :title="'Sedans'"
            :icon="'sedan'"
          />
        </div>
        <div class="cars">
          <MiniCard
            @click="$router.push('inventory')"
            :title="'Coupes'"
            :icon="'coupe'"
          />
          <MiniCard
            @click="$router.push('inventory')"
            :title="'Electrics'"
            :icon="'ev'"
          />
          <MiniCard
            @click="$router.push('inventory')"
            :title="'SUVs'"
            :icon="'suv'"
          />
        </div>
      </div>
    </div>
    <h2 class="text-center mt-5">Top Trending Cars</h2>
    <Carousel
      :autoplay="2000"
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      style="min-height: 200px; max-height: 500px; width: 100vw"
    >
      <slide v-for="slide in ['c2', 'c3', 'c4', 'c5', 'c7']" :key="slide">
        <div class="p-5">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="slide"
            :trans="'Automatic'"
            :mileage="'19,800 miles'"
            :price="'$25,000'"
            :price2="'$250'"
            :vin="'31389478324783'"
            :model="'2003'"
            :location="'New York'"
            :awd="'AWD'"
          />
        </div>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <!-- For Later v2 -->
    <!-- <div class="second">
      <div class="secondd">
        <img
          src="../assets/l1.webp"
          style="
            max-width: 100% !important;
            max-height: 100% !important;
            border-top-left-radius: 9px;
            border-bottom-left-radius: 9px;
          "
        />
        <div class="d-flex flex-column ml-5 gap-2 m-auto align-items-center">
          <h3>Get Pre-Qualified</h3>
          <p>See your actual monthly payment.</p>
          <Button
            :title="'View More'"
            @click="$router.push('inventory')"
            class="w-50"
          />
        </div>
      </div>
      <div class="secondd">
        <img
          src="../assets/l2.webp"
          class="rounded"
          style="
            max-width: 100% !important;
            max-height: 100% !important;
            border-top-left-radius: 9px;
            border-bottom-left-radius: 9px;
          "
        />
        <div class="d-flex flex-column ml-5 gap-2 m-auto align-items-center">
          <h3>Sell/Trade Your Car</h3>
          <p>Get an offer in just 2 minutes.</p>
          <Button
            :title="'Read More'"
            @click="$router.push('inventory')"
            class="w-50"
          />
        </div>
      </div>
    </div> -->
    <h2 class="text-center">Affordable Cars Available Now</h2>
    <div class="third">
      <div
        class="d-flex flex-column align-items-center justify-content-center rounded px-5 py-4 shadow mb-3"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l3.svg" />
        <h3>Cars Under $20,000</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center justify-content-between rounded px-5 py-4 shadow mb-3"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l4.svg" />
        <h3>Shop Great Deals</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center justify-content-between rounded px-5 py-4 shadow mb-3"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l5.svg" style="width: 40px" />
        <h3>Delivery by Saturday</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center rounded px-5 py-4 shadow mb-3"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l6.svg" />
        <h3>Shop Fuel Efficient</h3>
      </div>
    </div>
    <div
      class="row d-flex justify-content-center gap-x-5 gap-y-2 m-auto py-4"
      style="background-color: rgb(0, 97, 158, 0.2)"
    >
      <h2 class="col text-center">Shop Great Values</h2>
      <div class="w-100"></div>
      <MiniCarView :title="'Honda Civic'" :icon="'p1'" class="carcard" />
      <MiniCarView :title="'Ford F-150'" :icon="'p2'" class="carcard" />
      <div class="w-100"></div>
      <MiniCarView :title="'Toyota Camry'" :icon="'p3'" class="carcard" />
      <MiniCarView :title="'Chevrolet Equinox'" :icon="'p4'" class="carcard" />
      <div class="w-100"></div>
      <MiniCarView :title="'Nissan Altima'" :icon="'p5'" class="carcard" />
      <MiniCarView :title="'Ford Mustang'" :icon="'p6'" class="carcard" />
      <div class="w-100"></div>
      <Button
        :title="'View All'"
        @click="$router.push('inventory')"
        style="
          width: 20%;
          margin-top: 20px;
          font-weight: bold;
          border: 1px solid rgb(0, 0, 0, 0.1);
          background-color: rgb(255, 255, 255, 0.5);
        "
      />
    </div>
    <Footer />
  </DummyVue>
</template>
<script>
import Button from "@/components/Button.vue";
import MiniCard from "@/components/miniCard.vue";
import MiniCarView from "@/components/miniCarView.vue";
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import InventoryCard from "@/components/InventoryCard.vue";
export default {
  name: "Landing_",
  components: {
    DummyVue,
    Button,
    MiniCard,
    MiniCarView,
    Footer,
    Carousel,
    Slide,
    InventoryCard,
    Navigation,
  },
  data: () => ({
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
  }),
};
</script>
<style>
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
  width: 550px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  z-index: 5;
}
.cars {
  display: flex;
  gap: 5%;
  flex-direction: row;
  margin-top: 10px;
  z-index: 5;
}
.carss {
  z-index: 5;
}
.second {
  display: flex;
  justify-content: center;
  padding: 30px 0px;
}
.secondd {
  display: flex;
  border-radius: 10px;
  margin-right: 20px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 35%;
}
.third {
  display: flex;
  justify-content: center;
  gap: 2%;
  padding: 30px 0px;
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
@media only screen and (max-width: 500px) {
  .search {
    max-width: 90%;
  }
  .carss {
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 390px;
  }
  .cars {
    display: flex;
    flex-direction: column !important;
    margin-left: 10px;
  }
  .second {
    display: flex;
    flex-direction: column;
  }
  .secondd {
    width: 90%;
    margin: auto;
    margin-bottom: 50px;
    text-align: center;
    height: 150px;
  }
  .third {
    display: flex;
    flex-direction: column;
    column-gap: 10% !important;
    width: 70%;
    padding: 30px 30px;
    margin: auto;
  }
  h3 {
    font-size: 15px !important;
    margin-top: 5px;
    text-align: center;
  }
  .carcard {
    width: 80% !important;
  }
  .main {
    height: 400px !important;
  }
}
</style>
