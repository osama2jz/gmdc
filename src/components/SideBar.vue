<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex align-items-center font-bold pl-5 shadow-sm"
      style="
        height: 60px;
        width: 100vw;
        background-color: white;
        justify-content: space-around;
      "
    >
      <a
        href="/"
        class="flex items-center space-x-2 py-4 px-2"
        style="color: rgba(0, 75, 154)"
        ><img src="../assets/logo.svg" style="height: 60px !important" />GMDC
      </a>
      <nav class="d-flex gap-4 align-items-center abc">
        <router-link to="/">
          <a class="item">
            <span>Home</span>
          </a>
        </router-link>
        <router-link to="/dashboard">
          <a class="item">
            <span>Dashboard</span>
          </a>
        </router-link>
        <router-link to="/inventory">
          <a class="item">
            <span>Car Finder</span>
          </a>
        </router-link>
        <router-link to="/apply">
          <a class="item">
            <span>Apply Online</span>
          </a>
        </router-link>
        <router-link to="/contactus">
          <a class="item">
            <span>Contact Us</span>
          </a>
        </router-link>
      </nav>
      <div>
        <router-link to="/signin">
          <a class="item">
            <span>Sign In</span>
          </a>
        </router-link>
        <div class="icon text-center">
          <a @click="onClick">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div
          v-if="showSidebar"
          @blur="onBlur"
          tabindex="0"
          class="bg-white absolute z-50 shadow-bottom"
          style="
            width: 100vw !important;
            left: 0px;
            border-bottom: 1px solid rgb(0, 0, 0, 0.2);
            height: 40%;
          "
        >
          <nav
            class="d-flex gap-4 align-items-center flex-column mt-5"
            :class="!showSidebar ? 'none' : 'mobile'"
          >
            <router-link to="/">
              <a class="item">
                <span>Home</span>
              </a>
            </router-link>
            <router-link to="/dashboard">
              <a class="item">
                <span>Dashboard</span>
              </a>
            </router-link>
            <router-link to="/inventory">
              <a class="item">
                <span>Car Finder</span>
              </a>
            </router-link>
            <router-link to="/apply">
              <a class="item">
                <span>Apply Online</span>
              </a>
            </router-link>
            <router-link to="/contactus">
              <a class="item">
                <span>Contact Us</span>
              </a>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SideBar",
  setup() {
    let showSidebar = ref(false);
    const onClick = () => {
      console.log(showSidebar.value);
      if (showSidebar.value == false) showSidebar.value = true;
      else showSidebar.value = false;
    };
    const onBlur = () => {
      console.log(showSidebar.value);
      showSidebar.value = !showSidebar.value;
    };
    return {
      showSidebar,
      onClick,
      onBlur,
    };
  },
};
</script>
<style>
.item {
  display: flex;
  align-items: center;
  padding: 3px 4px;
  height: 100%;
}

.item:hover,
.router-link-active,
.router-link-exact-active {
  background-color: rgb(0, 97, 158);
  color: white;
  border-radius: 5px;
}
.icon {
  display: none;
}
@media only screen and (max-width: 600px) {
  nav .icon {
    display: block;
    position: absolute;
    right: 20px;
    top: 10;
  }
  .item {
    min-width: 100px;
  }
  .icon {
    display: block;
  }
  .abc {
    display: none !important;
  }
}
</style>
