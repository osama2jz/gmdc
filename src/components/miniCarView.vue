<template>
  <div
    class="d-flex p-2 rounded justify-content-between align-items-center"
    style="background-color: white; width: 500px"
  >
    <p class="font-bold ml-2">{{ title }}</p>
    <img
      :src="require(`@/assets/${icon}.webp`)"
      class="mr-2"
      style="height: 70px"
    />
  </div>
</template>
<script>
export default {
  name: "MiniCarView",
  props: {
    title: String,
    icon: String,
  },
};
</script>
<style></style>
