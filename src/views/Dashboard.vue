<template>
  <DummyVue>
    <SideBar_2>
      <div class="table">
        <Table />
      </div>
    </SideBar_2>
    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import SideBar_2 from "../components/SideBar2.vue";
import Table from "./ViewOrders.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "dashboard_",
  components: { DummyVue, Footer, SideBar_2, Table },
};
</script>
<style scoped>
.table {
  width: 75vw;
}
@media only screen and (max-width: 600px) {
  .table {
    width: 100%;
  }
}
</style>
