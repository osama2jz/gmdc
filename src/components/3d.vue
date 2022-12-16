<template>
  <div>
    <PanoViewer
      :tag="'div'"
      :image="'https://scaleflex.cloudimg.io/v7/demo/suv-orange-car-360'"
      @view-change="
        (e) => {
          // DO_SOMETHING
        }
      "
    />
    <SpinViewer
      :tag="'div'"
      :imageUrl="'https://scaleflex.cloudimg.io/v7/demo/suv-orange-car-360'"
      :rowCount="42"
      :scale="1"
    />
  </div>
</template>
<script>
import { PanoViewer, SpinViewer } from "@egjs/vue3-view360";

export default {
  name: "threeD",
  components: {
    PanoViewer,
    SpinViewer,
  },
};
</script>
