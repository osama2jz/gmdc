<template>
  <DummyVue>
    <Table />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Table from "../components/ViewVehicle.vue";
export default {
  name: "DataTable",
  components: { DummyVue, Table },
};
</script>
<style></style>
