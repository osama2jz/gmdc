<template>
  <div
    class="d-flex p-2 rounded-pill justify-content-center text-white cursor-pointer hover-zoom"
    style="
      background-color: rgb(0, 97, 158);
      width: 180px;
      border: 1px solid white;
    "
  >
    <img
      :src="require(`@/assets/${icon}.webp`)"
      class="mr-2"
      style="height: 20px"
    />
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "MiniCard",
  props: {
    title: String,
    icon: String,
  },
};
</script>
<style></style>
