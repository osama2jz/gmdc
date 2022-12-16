<template>
  <div class="d-flex flex-row sideb" style="background-color: #f8f8f8">
    <nav class="d-flex flex-column gap-4 align-items-center sidebar2">
      <router-link to="/dashboard">
        <a class="item">
          <span>Dashboard</span>
        </a>
      </router-link>
      <router-link to="/dashboard/orders">
        <a class="item">
          <span>Orders</span>
        </a>
      </router-link>
      <router-link to="/dashboard/settings">
        <a class="item">
          <span>Settings</span>
        </a>
      </router-link>
    </nav>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar_2",
};
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 3px 4px;
  height: 100%;
  width: 100px;
}
.sidebar2 {
  /* border: 1px solid gray; */
  border-radius: 10px;
  padding-top: 20px;
  width: 20%;
  margin: 10px;
  background-color: white;
}
@media only screen and (max-width: 600px) {
  .sideb {
    display: flex;
    flex-direction: column !important;
    width: 100vw !important;
  }
  .sidebar2 {
    display: flex !important;
    flex-direction: row !important;
  }
}
</style>
