<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex align-items-center font-bold"
      style="height: 60px; background-color: white"
    >
      <a href="/" class="flex items-center space-x-2 py-4 px-2"
        ><img src="../assets/logo.svg" style="height: 50px !important" />
      </a>
      <nav class="d-flex gap-3 align-items-center" style="height: 100%">
        <router-link to="/">
          <a class="item">
            <span>Search Cars</span>
          </a>
        </router-link>
        <router-link to="/">
          <a class="item">
            <span>Sell/Trade</span>
          </a>
        </router-link>
        <router-link to="/">
          <a class="item">
            <span>Financing</span>
          </a>
        </router-link>
        <router-link to="/">
          <a class="item">
            <span>Car Finder</span>
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
.item:hover {
  background-color: #ffe15d;
}
</style>
