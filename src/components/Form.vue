<template>
  <div
    style="
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 50px;
      padding-left: 50px;
    "
  >
    <p class="text-lg text-secondary"><b>Register a Vehicle Auction</b></p>
    <p>Fill in the data of vehicle vendor. It will take a couple of minutes.</p>
    <div class="w-100 pb-5">
      <form class="bg-white p-3 my-3 border border-gray rounded">
        <div class="flex -mx-3 pb-4">
          <InputField :title="'Business Name'" :type="'text'" />
          <InputField :title="'Phone no.'" :type="'tel'" />
        </div>
        <div class="flex -mx-3 pb-4">
          <InputField :title="'Email Id'" :type="'email'" />
          <InputField :title="'Point of Contact Person'" :type="'text'" />
        </div>
        <div class="flex -mx-3 pb-4">
          <InputField :title="'Website Address'" :type="'email'" />
          <InputField :title="'Facebook Handle'" :type="'text'" />
        </div>
        <div class="flex -mx-3 pb-4">
          <InputField :title="'Instagram Handle'" :type="'text'" />
        </div>
      </form>
      <div class="d-flex float-right">
        <ButtonVue :title="'Cancel'" />
        <ButtonVue :title="'Register'" :primary="true" />
      </div>
    </div>
  </div>
</template>
<script>
import InputField from "./InputField.vue";
import ButtonVue from "./Button.vue";
export default {
  name: "FormVue",
  components: {
    InputField,
    ButtonVue,
  },
};
</script>
<style></style>
