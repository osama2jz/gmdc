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
      <nav
        class="d-flex gap-4 align-items-center"
        style="height: 100%; margin-left: 5%"
      >
        <router-link to="/">
          <a class="item">
            <span>Home</span>
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
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
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
</style>
