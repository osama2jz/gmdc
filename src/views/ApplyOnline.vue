<template>
  <DummyVue>
    <!-- <div
      style="
        width: auto;
        height: auto;
        margin: auto;
        overflow: scroll;
        overflow-x: hidden;
      "
      class="embed-responsive embed-responsive-16by9 z-depth-1-half"
    >
      <iframe
        src="https://www.carzlane.com/apply-online/"
        width="80%"
        height="1000"
        >ds</iframe
      >
    </div> -->
    <div style="margin: auto; width: 400px">
      <h1 class="top">Apply Online here</h1>
      <div
        style="
          background-color: rgb(0, 97, 148);
          width: 50px;
          height: 5px;
          margin: 10px 25px;
        "
      ></div>
    </div>
    <div
      style="
        border: 1px solid rgb(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        margin: 0px auto;
        max-width: 800px;
      "
    >
      <iframe
        scrolling="no"
        src="https://www.carzlane.com/apply-online/"
        style="
          border: 0px none;
          margin-left: -85px;
          height: 1850px;
          margin-top: -203px;
          width: 926px;
        "
      >
      </iframe>
    </div>
    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Apply_",
  components: { DummyVue, Footer },
};
</script>
<style>
.top {
  color: gray;
  text-align: center;
  margin: 0px;
}
</style>
