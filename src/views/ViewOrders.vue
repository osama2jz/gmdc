<template>
  <div
    style="
      background-color: #f8f8f8;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 50px;
      padding-left: 50px;
    "
  >
    <!-- <div class="mb-4" style="display: flex; justify-content: space-between">
      <div>
        <p class="text-lg text-secondary"><b>View your bookings</b></p>
        <p>List all the auctions currently added in system.</p>
      </div>
      <ButtonVue :title="'Add Vendor'" :primary="true" :icon="'add'" />
    </div> -->
    <div
      style="
        display: flex;
        flex-direction: column;
        border: 1px solid #f8f8f8;
        background-color: white;
        border-radius: 20px;
      "
    >
      <div
        style="
          display: flex;
          margin: 10px;
          justify-content: space-between;
          align-items: center;
        "
      >
        <p class="text-lg text-secondary m-auto">
          <b>View Your Orders</b>
        </p>

        <!-- <div
          class="rounded pb-0"
          style="padding: 5px 8px; border: 1px solid #e8e8e8; height: 38px"
        >
          <DropDown
            :title="'By Column'"
            :children="[
              'Business Name',
              'Cell Number',
              'Email Id',
              'Point Of Contact',
              'Website',
            ]"
            :icon1="'filter'"
            :icon2="'dropdown'"
            style="border-right: 2px solid #e8e8e8; padding-right: 13px"
          />
          <DropDown
            :title="'By Status'"
            :children="['Block', 'Unblock']"
            :icon1="'filter'"
            :icon2="'dropdown'"
            class="pl-3"
          />
        </div>
        <div class="d-flex">
          <ButtonVue :title="'Clear Filters'" />
          <ButtonVue :title="'Export'" :primary="true" :icon="'export'" />
        </div> -->
      </div>
      <ag-grid-vue
        class="ag-theme-alpine"
        style="height: 70vh"
        :columnDefs="columnDefs.value"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        rowSelection="multiple"
        animateRows="true"
        @cell-clicked="cellWasClicked"
        @grid-ready="onGridReady"
      >
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, ref } from "vue";
// import ButtonVue from "./Button.vue";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import Action from "../components/Action.vue";
// import Payment from "./Payment.vue";
// import DropDown from "./DropDown.vue";
export default {
  name: "App",
  components: {
    AgGridVue,
    // eslint-disable-next-line
    Action,
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
  },
  setup() {
    const gridApi = ref(null); // Optional - for accessing Grid's API

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };
    const rowData = reactive([
      {
        ser: "1",
        vin: "2FTFW1ED5MFC21639",
        customer: "Alex Bhatti",
        payment: "45,400",
        down: "450",
        remaining: "39,600",
        stat: "New",
      },

      {
        ser: "2",
        vin: "2FTFW1ED5MFC21639",
        customer: "Alex Bhatti",
        payment: "45,400",
        down: "450",
        remaining: "39,600",
        stat: "Processed",
      },

      {
        ser: "3",
        vin: "2FTFW1ED5MFC21639",
        customer: "Alex Bhatti",
        payment: "45,400",
        down: "450",
        remaining: "39,600",
        stat: "Delivered",
      },
    ]); // Set rowData to Array of Objects, one Object per Row

    // Each Column Definition results in one Column.
    const columnDefs = reactive({
      value: [
        {
          field: "ser",
          headerName: "Serial No.",
          width: 100,
        },
        {
          field: "vin",
          headerName: "Vin No.",
          width: 160,
        },
        { field: "customer", headerName: "Customer Name", width: 150 },
        { field: "payment", headerName: "Total Payment", width: 120 },
        { field: "down", headerName: "Down Payment", width: 130 },
        { field: "remaining", headerName: "Remaining Amount", width: 150 },
        {
          field: "stat",
          headerName: "Status",
          width: 100,
          cellStyle: function (params) {
            if (params.value == "New") {
              //mark police cells as red
              return {
                display: "flex",
                alignItems: "center",
                backgroundColor: "orange",
                color: "white",
                height: "25px",
                marginTop: "10px",
                width: "80px",
                justifyContent: "center",
                borderRadius: "4px",
              };
            } else if (params.value == "Processed") {
              //mark police cells as red
              return {
                display: "flex",
                alignItems: "center",
                backgroundColor: "blue",
                color: "white",
                height: "25px",
                marginTop: "10px",
                width: "80px",
                justifyContent: "center",
                borderRadius: "4px",
              };
            }
            return {
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "red",
              width: "80px",
              justifyContent: "center",
              borderRadius: "4px",
              height: "25px",
              marginTop: "10px",
            };
          },
        },
        {
          headerName: "Action",
          field: "Action",
          cellRenderer: "Action",
          width: 130,
        },
      ],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
    };

    return {
      onGridReady,
      columnDefs,
      rowData,
      defaultColDef,
    };
  },
};
</script>

<style>
.ag-theme-alpine {
  /* disable all borders */
  --ag-borders: none;
  --ag-row-border-color: #e8e8e8;
  --ag-borders-row: solid 1px;
  --ag-header-foreground-color: rgb(133, 133, 133);
  font-size: 12px;
  --ag-font-size: 12px;
}
</style>
