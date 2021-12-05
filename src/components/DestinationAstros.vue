<template>
  <div class="destination__section">
    <div class="destination__content-img">
      <img
        class="destination__content-img__img"
        :src="require('@/' + destinations[i].images.png.slice(2))"
        :alt="destinations[i].name"
      />
    </div>
    <DestinationCard :destinations="destinations[i]" />
  </div>
</template>

<script>
// import { inject } from "@vue/runtime-core";
import DestinationCard from "./DestinationAstrosCard.vue";
export default {
  components: { DestinationCard },
  props: {
    destinations: {
      type: Array,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.destination__content-img {
  margin-right: 40px;
}
.destination__section {
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
