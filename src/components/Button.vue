<template>
  <button v-if="icon" class="btn float-right but" :style="styles">
    <img :src="require(`@/assets/${icon}.svg`)" class="mr-2" />
    {{ title }}
  </button>

  <button v-else class="btn float-right but" :style="styles">
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
        return { "background-color": "rgb(0, 97, 158)" };
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
<style>
.but {
  min-width: 150px;
  font-weight: 100;
  font-size: small;
  text-transform: capitalize;
}
.but:hover {
  color: white;
  opacity: 0.9;
}
</style>
