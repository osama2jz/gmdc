<template>
  <DummyVue>
    <SideBar_2>
      <div class="d-flex flex-column align-items-center mm">
        <h1 style="color: rgb(0, 0, 0, 0.7)">User Dashboard</h1>
        <div
          style="width: 50px; background-color: rgb(0, 75, 147); height: 5px"
        ></div>
      </div>
      <div class="row maindash">
        <div class="statscard shadow col">
          <h4>Total Bookings</h4>
          <h2>15</h2>
        </div>
        <div class="statscard shadow col">
          <h4>New Bookings</h4>
          <h2>7</h2>
        </div>
        <div class="statscard shadow col">
          <h4>Payment Pending</h4>
          <h2>4</h2>
        </div>
        <div class="statscard shadow col">
          <h4>Completed</h4>
          <h2>1</h2>
        </div>
      </div>
    </SideBar_2>
    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import SideBar_2 from "../components/SideBar2.vue";
export default {
  name: "stats_",
  components: { DummyVue, SideBar_2, Footer },
};
</script>
<style scoped>
.statscard {
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: white;
  height: 80px;
}
.maindash {
  margin-left: 5%;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  width: 70vw;
  flex-direction: row;
  gap: 10%;
}
@media only screen and (max-width: 600px) {
  .maindash {
    margin: auto;
    height: 100%;
    margin-bottom: 50px;
  }
  .statscard {
    margin-bottom: 20px;
  }
}
</style>
