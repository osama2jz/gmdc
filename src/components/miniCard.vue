<template>
  <div
    class="d-flex p-2 rounded-pill justify-content-center"
    style="background-color: #ffe15d; width: 180px"
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
