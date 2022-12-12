<template>
  <DummyVue>
    <div class="main2">
      <div
        style="
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: black;
          opacity: 0.4;
        "
      ></div>
      <h1>FIND YOUR SOUL RIDE</h1>
      <div class="search">
        <img src="../assets/search.svg" style="width: 25px" />
        <input
          type="text"
          placeholder="Search Make, Model or keyword"
          class="input input-ghost w-full max-w-50"
        />
        <Button :title="'GO'" :primary="true" />
      </div>
    </div>
    <div class="inven">
      <div class="filters">
        <h2 class="mb-2">Advanced Filters</h2>
        <DropDown
          style="width: 80% !important"
          :title="'Make/Model'"
          :children="[
            'Honda',
            'Toyota',
            'Nissan',
            'Suzuki',
            'Ford',
            'BMW',
            'Audi',
          ]"
          :icon2="'dropdown'"
        />
        <div class="mt-3"></div>
        <DropDown
          :title="'Car Type'"
          :children="[
            'Sedan',
            'Truck',
            'Coupe',
            'SUV',
            'Hatchback',
            'Minivan',
            'Electric',
          ]"
          :icon2="'dropdown'"
        />
        <h5 class="mt-3">Price</h5>
        <div class="d-flex align-items-center">
          <InputField :title="'From ($)'" :type="'number'" />
          <p class="mx-3">-</p>
          <InputField :title="'To ($)'" :type="'number'" />
        </div>
        <h5 class="mt-3">Transmission</h5>
        <div class="w-25">
          <label class="cursor-pointer label">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-sm mr-2"
            />
            <span class="label-text">Automatic</span>
          </label>
          <label class="cursor-pointer label">
            <input type="checkbox" class="checkbox checkbox-sm mr-2" />
            <span class="label-text">Manual</span>
          </label>
        </div>
        <h5 class="mt-3">Engine Type</h5>
        <div class="w-25">
          <label class="cursor-pointer label">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-sm mr-2"
            />
            <span class="label-text">Fuel</span>
          </label>
          <label class="cursor-pointer label">
            <input type="checkbox" class="checkbox checkbox-sm mr-2" />
            <span class="label-text">Electric</span>
          </label>
          <label class="cursor-pointer label">
            <input type="checkbox" class="checkbox checkbox-sm mr-2" />
            <span class="label-text">Hybrid</span>
          </label>
        </div>
        <h5 class="mt-3">Year</h5>
        <div class="d-flex align-items-center">
          <InputField :title="'From'" :type="'number'" />
          <p class="mx-3">-</p>
          <InputField :title="'To'" :type="'number'" />
        </div>
        <h5 class="mt-3">Mileage</h5>
        <div class="d-flex align-items-center">
          <InputField :title="'From'" :type="'number'" />
          <p class="mx-3">-</p>
          <InputField :title="'To'" :type="'number'" />
        </div>
      </div>
      <div class="row px-2 d-flex m-auto mt-2">
        <p
          style="
            color: gray;
            font-weight: bold;
            margin: 10px;
            text-align: center;
          "
        >
          Results: 120
        </p>
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'t1'"
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
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'c3'"
            :trans="'Automatic'"
            :mileage="'19,800 miles'"
            :price="'$25,000'"
            :price2="'$250'"
            :vin="'31389478324783'"
            :model="'2003'"
          />
        </div>
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'c2'"
            :trans="'Automatic'"
            :mileage="'19,800 miles'"
            :price="'$25,000'"
            :price2="'$250'"
            :vin="'31389478324783'"
            :model="'2003'"
          />
        </div>
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'c4'"
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
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'c5'"
            :trans="'Automatic'"
            :mileage="'19,800 miles'"
            :price="'$25,000'"
            :price2="'$250'"
            :vin="'31389478324783'"
            :model="'2003'"
          />
        </div>
        <div class="col mb-4">
          <InventoryCard
            @click="$router.push('inventory/car')"
            :title="'Chevrolet Silverado 1500'"
            :icon="'c7'"
            :trans="'Automatic'"
            :mileage="'19,800 miles'"
            :price="'$25,000'"
            :price2="'$250'"
            :vin="'31389478324783'"
            :model="'2003'"
          />
        </div>
      </div>
    </div>
    <Footer />
  </DummyVue>
</template>
<script>
import Button from "@/components/Button.vue";
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import DropDown from "@/components/DropDown.vue";
import InputField from "@/components/InputField.vue";
import InventoryCard from "@/components/InventoryCard.vue";
export default {
  name: "Inventory_",
  components: { DummyVue, Button, Footer, DropDown, InputField, InventoryCard },
};
</script>
<style>
.main2 {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/wall.webp");
  height: 300px;
  width: 100vw;
  text-align: center;
  background-position: center center;
  align-items: center;
  justify-content: center;
  position: relative;
}
.inven {
  display: flex;
  margin-top: 20px;
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
.filters {
  width: 35%;
  padding: 1%;
  border-right: 1px solid rgb(0, 0, 0, 0.1);
}
@media only screen and (max-width: 600px) {
  .inven {
    display: flex;
    flex-direction: column;
  }
  .filters {
    width: 90%;
    border: none;
    margin: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
}
</style>
