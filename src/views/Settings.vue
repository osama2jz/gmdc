<template>
  <DummyVue>
    <SideBar_2>
      <div class="settings">
        <h2 class="text-black text-center w-100">Settings</h2>
        <InputField :title="'Enter Name'" :type="'email'" class="w-50" />
        <InputField :title="'Enter Email Adress'" class="w-50" />
        <InputField :title="'Enter Password'" :type="'password'" class="w-50" />
        <InputField
          :title="'Confirm Password'"
          :type="'password'"
          class="w-50"
        />
        <InputField :title="'Enter Mobile Number'" :type="'tel'" class="w-50" />
        <Button :title="'Save'" :primary="true" style="width: 200px" />
      </div>
    </SideBar_2>
    <Footer />
  </DummyVue>
</template>
<script>
import DummyVue from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";
import SideBar_2 from "../components/SideBar2.vue";
export default {
  name: "settings_",
  components: { DummyVue, SideBar_2, Footer, Button, InputField },
};
</script>
<style scoped>
.settings {
  height: 80vh;
  width: 70vw;
  padding: 10px 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2%;
  background-color: white;
  align-items: center;
}
@media only screen and (max-width: 600px) {
  .settings {
    width: 100%;
  }
}
</style>
