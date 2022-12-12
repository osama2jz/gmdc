<template>
  <h4>{{ title }}</h4>
  <div class="dropdown">
    <label
      tabindex="0"
      style="
        display: flex;
        font-size: 14px;
        color: gray;
        border-radius: 3px;
        border: 1px solid #e8e8e8;
        padding: 10px;
        text-align: center;
        justify-content: space-between;
      "
    >
      <img v-if="icon1" :src="require(`@/assets/${icon1}.svg`)" class="mr-1" />
      {{ title }}
      <img v-if="icon2" :src="require(`@/assets/${icon2}.svg`)" class="ml-1" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li v-for="item in children" :key="item">
        <a>{{ item }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DropDown",
  props: {
    title: String,
    icon1: String,
    icon2: String,
    children: [],
  },
};
</script>
<style>
.dropdown {
  width: 100%;
}
</style>
