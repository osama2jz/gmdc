<template>
  <div class="signinMain">
    <div class="wallpaper">
      <h1 class="head">Welcome to <br />Get My Dream Car</h1>
      <p class="text-center">A perfect place to find your dream car!</p>
    </div>
    <!-- <div class="line"></div> -->
    <div class="signinform">
      <h2 class="text-black text-center w-100">Sign Up</h2>
      <InputField :title="'Enter Name'" :type="'email'" class="w-100" />
      <InputField :title="'Enter Email Adress'" class="w-100" />
      <InputField :title="'Enter Password'" :type="'password'" class="w-100" />
      <InputField
        :title="'Confirm Password'"
        :type="'password'"
        class="w-100"
      />
      <InputField :title="'Enter Mobile Number'" :type="'tel'" class="w-100" />
      <Button
        @click="$router.push('/signin')"
        :title="'Register'"
        :primary="true"
        style="width: 200px"
      />
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-2"
      >
        <h5>Have an account already?</h5>
        <router-link to="/signin">
          <a class="text-primary">Sign In</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "signup_",
  components: {
    Button,
    InputField,
  },
};
</script>
<style scoped>
.signinMain {
  display: flex;
  flex-direction: row;
  padding: 5%;
  height: 100vh;
  border: 2px solid rgb(0, 0, 0, 0.2);
  /* background-color: rgb(0, 0, 0, 0.2); */
  background-image: linear-gradient(to right, white, gray);
}
.wallpaper {
  width: 70%;
  background-repeat: no-repeat;
  background-position: center bottom;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: rgb(247, 247, 247);
  background-image: url("../assets/wallpaper.png");
}
.signinform {
  width: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 247, 247);
  gap: 4%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.head {
  width: 100%;
  color: rgb(0, 0, 0, 0.7);
  text-align: center;
}
.line {
  width: 1px;
  height: 70%;
}
@media only screen and (max-width: 600px) {
  .wallpaper {
    display: none;
  }
  .signinform {
    width: 100vw;
    border-radius: 10px;
    height: 80vh;
    margin: auto;
  }
  .signinMain {
    background-position: center top;
    background-image: linear-gradient(to bottom, white, gray);

    background-color: white;
    /* background-repeat: no-repeat; */
    /* background-image: url("../assets/wallpaper.png"); */
  }
}
</style>
