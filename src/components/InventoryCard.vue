<template>
  <div class="card" @click="$router.push('inventory/car')">
    <img
      :src="require(`@/assets/${icon}.webp`)"
      class="mr-2"
      style="
        height: 200px;
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      "
    />
    <div class="p-2 d-flex flex-column justify-content-between h-100">
      <div class="row d-flex gap-1">
        <h3>{{ title }}</h3>
        <h6 class="col d-flex">
          <img src="../assets/vin.svg" style="width: 20px" class="mr-2" />{{
            vin
          }}
        </h6>
        <h6 class="col d-flex">
          <img src="../assets/tire.svg" style="width: 20px" class="mr-2" />{{
            model
          }}
        </h6>
        <div class="w-100"></div>
        <h6 class="col d-flex">
          <img
            src="../assets/transmission.svg"
            style="width: 20px"
            class="mr-2"
          />{{ trans }}
        </h6>
        <h6 class="col d-flex">
          <img src="../assets/meter.svg" style="width: 20px" class="mr-2" />{{
            mileage
          }}
        </h6>
        <div class="w-100"></div>
        <h6 v-if="location" class="col d-flex">
          <img
            src="../assets/location.svg"
            style="width: 20px"
            class="mr-2"
          />{{ location }}
        </h6>
        <h6 v-if="awd" class="col d-flex">
          <img src="../assets/fwd.svg" style="width: 20px" class="mr-2" />{{
            awd
          }}
        </h6>
      </div>
      <div>
        <div class="d-flex justify-content-between">
          <h3>{{ price }}</h3>
          <h5>Est. {{ price2 }}/month</h5>
        </div>
        <div
          class="d-flex w-100 justify-content-between mt-2 align-items-center pt-1"
          style="border-top: 1px solid gray; font-size: 12px"
        >
          <p>Free Shipping</p>
          <Button
            :title="'Book Now'"
            :primary="true"
            class="btn-sm"
            style="
              min-width: 40px !important;
              font-size: 10px;
              line-height: 10px;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  name: "MiniCarView",
  props: {
    title: String,
    icon: String,
    trans: String,
    mileage: String,
    price: String,
    price2: String,
    vin: String,
    model: String,
    awd: String,
    location: String,
  },
  components: { Button },
};
</script>
<style>
.card {
  width: 350px;
  height: 400px;
  margin-bottom: 30px;
  transition: scale 0.2s;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.card:hover {
  cursor: pointer;
  scale: 1.01;
  border: 1px solid rgba(0, 75, 148);
}
</style>
