<template>
  <div class="flex">
    <img src="../assets/View.svg" />
    <p class="pay" @click="showModal">Pay Now</p>
  </div>
</template>
<script>
export default {
  name: "ActionMenu",
};
</script>
<style scoped>
.ag-cell-value {
  display: flex;
  align-items: center;
}
.pay {
  color: blue;
  padding-left: 10px;
}
.pay:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
