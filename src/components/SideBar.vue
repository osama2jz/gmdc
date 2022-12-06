<!-- <template>
  <div class="relative min-h-screen flex">
    <div
      class="bg-gray text-slate-50 space-y-6 px-4 inset-y-0 left-0 relative -translate-x-0 text-black-75"
      style="background-color: #f8f8f8"
    >
      <a href="/" class="flex items-center space-x-2 py-4 px-2"
        ><img
          src="../assets/logo.png"
          style="height: 50px !important; margin: auto"
        />
      </a>
      <nav>
        <router-link to="/">
          <li
            class="group flex items-center py-3 px-4 hover:bg-red-500 rounded space-x-2 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span class="group-hover:text-gray-50">1. Dashboard</span>
          </li>
        </router-link>
        <router-link to="/dataTable">
          <li class="flex items-center py-3 px-4 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>2. Vehicle Auctions</span>
          </li>
        </router-link>
        <router-link to="/dataTable">
          <li class="flex items-center py-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>3. Vehicle Transpoter</span>
          </li>
        </router-link>
        <router-link to="/dataTable">
          <li class="flex items-center py-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>4. Vehicle Management</span>
          </li>
        </router-link>
        <router-link to="/dataTable">
          <li class="flex items-center py-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>5. Vehicle Transpotation</span>
          </li>
        </router-link>
        <router-link to="/dataTable">
          <li class="flex items-center py-3 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>6. Settings</span>
          </li>
        </router-link>
      </nav>
    </div>
    <div class="flex-1 px-5">
      <div class="bg-white px-2 py-2 d-flex justify-content-between">
        <div>
          <p style="font-weight: bold !important; font-size: 20px">
            Dispatcher Dashboard
          </p>
          <p>Welcome Back <b>Mark T.!</b></p>
        </div>
        <div class="d-flex space-x-5 w-75 justify-content-end">
          <div class="d-flex my-auto" style="width: 40%">
            <input
              type="text"
              placeholder="Search here..."
              class="input input-bordered w-full input-sm p-3"
            />
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-secondary"
              style="position: relative; right: 30px; top: 6px"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div
            class="d-flex space-x-2 pl-5 align-items-center"
            style="border-left: 1px solid #cdcdcd"
          >
            <div>
              <div class="d-flex align-items-center space-x-2">
                <p style="font-weight: bold !important; font-size: 18px">
                  Mark Tim.
                </p>
                <p
                  style="
                    background-color: #1f91d0;
                    border-radius: 25px;
                    padding: 0px 10px;
                    font-size: 10px;
                    color: white;
                    height: 15px;
                  "
                >
                  Dispatcher
                </p>
              </div>
              <p style="font-size: 10px; color: gray">markt1980@gmail.com</p>
            </div>
            <img
              src="../assets/osama.jpg"
              style="width: 50px; height: 50px; border-radius: 50%"
            />
          </div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script> -->

<template>
  <div class="flex">
    <div
      class="bg-gray text-slate-50 space-y-6 px-4 inset-y-0 left-0 relative -translate-x-0 text-black-75 w-25"
      style="background-color: #f8f8f8"
    >
      <sidebar-menu :menu="menu" />
    </div>
    <div class="flex-1 px-5">
      <div class="bg-white px-2 py-2 d-flex justify-content-between">
        <div>
          <p style="font-weight: bold !important; font-size: 20px">
            Dispatcher Dashboard
          </p>
          <p>Welcome Back <b>Mark T.!</b></p>
        </div>
        <div class="d-flex space-x-5 w-75 justify-content-end">
          <div class="d-flex my-auto" style="width: 40%">
            <input
              type="text"
              placeholder="Search here..."
              class="input input-bordered w-full input-sm p-3"
            />
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-secondary"
              style="position: relative; right: 30px; top: 6px"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div
            class="d-flex space-x-2 pl-5 align-items-center"
            style="border-left: 1px solid #cdcdcd"
          >
            <div>
              <div class="d-flex align-items-center space-x-2">
                <p style="font-weight: bold !important; font-size: 18px">
                  Mark Tim.
                </p>
                <p
                  style="
                    background-color: #1f91d0;
                    border-radius: 25px;
                    padding: 0px 10px;
                    font-size: 10px;
                    color: white;
                    height: 15px;
                  "
                >
                  Dispatcher
                </p>
              </div>
              <p style="font-size: 10px; color: gray">markt1980@gmail.com</p>
            </div>
            <img
              src="../assets/osama.jpg"
              style="width: 50px; height: 50px; border-radius: 50%"
            />
          </div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
// import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
export default {
  components: {
    SidebarMenu,
  },
  name: "SideBar",
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/datatable",
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.v-sidebar-menu {
  background-color: #f8f8f8;
  color: red;
}
.v-sidebar-menu .vsm--title {
  color: black;
}
.v-sidebar-menu .vsm--link_active {
  background-color: #e3eef5;
  font-weight: normal;
}
</style>
