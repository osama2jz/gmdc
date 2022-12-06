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
    <div class="mb-4" style="display: flex; justify-content: space-between">
      <div>
        <p class="text-lg text-secondary"><b>View All Auctions</b></p>
        <p>List all the auctions currently added in system.</p>
      </div>
      <ButtonVue :title="'Add Vendor'" :primary="true" :icon="'add'" />
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        border: 1px solid #f8f8f8;
        background-color: white;
        padding: 10px;
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
        <div
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
        </div>
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
import ButtonVue from "./Button.vue";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import Action from "./Action.vue";
import DropDown from "./DropDown.vue";
export default {
  name: "App",
  components: {
    AgGridVue,
    ButtonVue,
    // eslint-disable-next-line
    Action,
    DropDown,
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
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "2",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "3",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "4",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "5",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "6",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "7",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "8",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Unblock",
      },
      {
        ser: "9",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
      },
      {
        ser: "10",
        business: "Boxter",
        cell: 72000,
        email: "mosadmosa@adas.cs",
        poc: "sdad",
        web: "dadsa.com",
        stat: "Block",
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
          field: "business",
          headerName: "Business Name",
          width: 130,
        },
        { field: "cell", headerName: "Cell Number", width: 150 },
        { field: "email", headerName: "Email Id", width: 150 },
        { field: "poc", headerName: "Point of Contact", width: 150 },
        { field: "web", headerName: "Website", width: 150 },
        {
          field: "stat",
          headerName: "Status",
          width: 100,
          cellStyle: function (params) {
            if (params.value == "Block") {
              //mark police cells as red
              return {
                color: "red",
                backgroundColor: "#FBE2E2",
                height: "22px",
                marginTop: "10px",
                width: "80px",
                textAlign: "center",
                borderRadius: "4px",
              };
            }
            return {
              color: "green",
              backgroundColor: "#E2FBE2",
              height: "20px",
              width: "80px",
              textAlign: "center",
              borderRadius: "4px",
              marginTop: "10px",
            };
          },
        },
        {
          headerName: "Action",
          field: "Action",
          cellRenderer: "Action",
          width: 110,
        },
      ],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
    };
    // Example load data from sever
    // onMounted(() => {
    //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
    //     .then((result) => result.json())
    //     .then((remoteRowData) => (rowData.value = remoteRowData));
    // });

    return {
      onGridReady,
      columnDefs,
      rowData,
      defaultColDef,
      // cellWasClicked: (event) => {
      //   // Example of consuming Grid Event
      //   console.log("cell was clicked", event);
      // },
      // deselectRows: () => {
      //   gridApi.value.deselectAll();
      // },
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
