<template>
  <DummyVue>
    <div class="contact">
      <div style="margin: auto; width: 190px">
        <h2 style="text-align: center">Visit Us Today!</h2>
        <div
          style="
            background-color: rgb(0, 97, 148);
            width: 50px;
            height: 5px;
            margin: 10px 0px;
          "
        ></div>
      </div>
      <div class="add1">Hanover Location</div>
      <div class="add">2747 Annapolis Rd, Hanover MD 21076</div>
      <div class="day">
        <p class="p">Monday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Tuesday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Wednesday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Thursday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Firday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Saturuday</p>
        9:00 AM - 8:00 PM
      </div>
      <div class="day">
        <p class="p">Sunday</p>
        Closed
      </div>
    </div>

    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Contact_",
  components: { DummyVue, Footer },
};
</script>
<style>
.contact {
  margin: auto;
  background-color: rgb(0, 0, 0, 0.1);
  width: 500px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.day {
  display: flex;

  justify-content: space-between;
}
.p {
  font-weight: bold;
}
.add {
  color: rgb(0, 97, 158);
  text-align: center;
}
.add1 {
  font-weight: bold;
  text-align: center;
}
</style>
