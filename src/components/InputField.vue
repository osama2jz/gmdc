<template>
  <div class="w-full md:w-1/2 px-3">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-last-name"
    >
      {{ title }}
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-last-name"
      type="{{type}}"
      :placeholder="'Enter ' + title"
    />
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    title: String,
    type: String,
  },
};
</script>
<style></style>
