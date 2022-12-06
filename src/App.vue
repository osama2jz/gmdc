<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  components: {},
  setup() {
    onMounted(() => {
      console.log("hello");
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
