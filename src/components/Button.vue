<template>
  <button
    v-if="icon"
    class="btn float-right text-black"
    :style="styles"
    style="
      min-width: 150px;
      font-weight: 100;
      font-size: small;
      text-transform: capitalize;
    "
  >
    <img :src="require(`@/assets/${icon}.svg`)" class="mr-2" />
    {{ title }}
  </button>

  <button
    v-else
    class="btn float-right text-black"
    :style="styles"
    style="
      min-width: 50px;
      font-weight: 100;
      font-size: small;
      text-transform: capitalize;
    "
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "ButtonVue",
  props: {
    title: String,
    primary: Boolean,
    icon: String,
  },
  myImageSource() {
    return this.icon.length > 0 ? true : false;
  },
  computed: {
    styles() {
      if (this.primary) {
        return { "background-color": "#FFE15D" };
      }
      return {
        "background-color": "white",
        color: "gray",
        border: "1px solid #e8e8e8",
      };
    },
  },
};
</script>
<style></style>
