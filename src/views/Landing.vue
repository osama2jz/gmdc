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
      <div class="cars row">
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'Trucks'"
          :icon="'trucks'"
        />
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'Hatchbacks'"
          :icon="'hatchbacks'"
        />
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'Sedans'"
          :icon="'sedan'"
        />
      </div>
      <div class="cars row">
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'Coupes'"
          :icon="'coupe'"
        />
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'Electrics'"
          :icon="'ev'"
        />
        <MiniCard
          class="col"
          @click="$router.push('inventory')"
          :title="'SUVs'"
          :icon="'suv'"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-5">
      <div
        class="d-flex rounded align-items-center mr-5"
        style="border: 1px solid rgba(0, 0, 0, 0.2); width: 35%"
      >
        <img src="../assets/l1.webp" />
        <div class="d-flex flex-column ml-5 gap-2">
          <h3>Get Pre-Qualified</h3>
          <p>See your actual monthly payment.</p>
          <Button
            :title="'View More Details'"
            @click="$router.push('inventory')"
          />
        </div>
      </div>
      <div
        class="d-flex rounded align-items-center"
        style="border: 1px solid rgba(0, 0, 0, 0.2); width: 35%"
      >
        <img src="../assets/l2.webp" class="rounded" />
        <div class="d-flex flex-column ml-5 gap-2">
          <h3>Sell/Trade Your Car</h3>
          <p>Get an offer in just 2 minutes.</p>
          <Button
            :title="'Read More Here'"
            @click="$router.push('inventory')"
          />
        </div>
      </div>
    </div>
    <h2 class="text-center">Affordable Cars Available Now</h2>
    <div class="d-flex justify-content-center pt-5 pb-5 gap-4">
      <div
        class="d-flex flex-column align-items-center justify-content-between rounded px-5 py-4 shadow"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l3.svg" />
        <h3>Cars Under $20,000</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center justify-content-between rounded px-5 py-4 shadow"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l4.svg" />
        <h3>Shop Great Deals</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center justify-content-between rounded px-5 py-4 shadow"
        style="background-color: rgb(0, 97, 158, 0.2)"
      >
        <img src="../assets/l5.svg" style="width: 40px" />
        <h3>Delivery by Saturday</h3>
      </div>
      <div
        class="d-flex flex-column align-items-center rounded px-5 py-4 shadow"
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
      <MiniCarView :title="'Honda Civic'" :icon="'p1'" />
      <MiniCarView :title="'Ford F-150'" :icon="'p2'" />
      <div class="w-100"></div>
      <MiniCarView :title="'Toyota Camry'" :icon="'p3'" />
      <MiniCarView :title="'Chevrolet Equinox'" :icon="'p4'" />
      <div class="w-100"></div>
      <MiniCarView :title="'Nissan Altima'" :icon="'p5'" />
      <MiniCarView :title="'Ford Mustang'" :icon="'p6'" />
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
export default {
  name: "Landing_",
  components: { DummyVue, Button, MiniCard, MiniCarView, Footer },
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
  width: 600px;
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
</style>
