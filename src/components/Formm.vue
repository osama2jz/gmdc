<template>
  <div
    style="
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 50px;
    "
  >
    <p class="text-lg text-secondary"><b>Register a Vehicle Auction</b></p>

    <p>Fill in the data of vehicle vendor. It will take a couple of minutes.</p>
    <div class="w-75 pb-5">
      <form class="bg-white p-3 my-3 border border-gray rounded">
        <div class="flex -mx-3">
          <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Business Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter business name"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone no.
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="tel"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Email Id
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder="Enter Email id"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Point of contact person
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="tel"
              placeholder="Enter point of contact person"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Website Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter website address"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Facebook handle
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="tel"
              placeholder="Enter facebook handle"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Instagram Handle
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter instagran handle"
            />
          </div>
        </div>
      </form>
      <button
        class="btn btn-wide float-right"
        style="background-color: #1f91d0"
      >
        Register
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormVue",
};
</script>
<style></style>
