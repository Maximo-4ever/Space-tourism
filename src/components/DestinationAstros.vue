<template>
  <div class="grid-center mt">
    <div class="trick-container"></div>
    <div class="destination__menu-astro" @click="changeSection">
      <span class="destination__container__names" id="moon">MOON</span>
      <span class="destination__container__names" id="mars">MARS</span>
      <span class="destination__container__names" id="europa">EUROPA</span>
      <span class="destination__container__names" id="titan">TITAN</span>
    </div>
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
import { inject } from "@vue/runtime-core";
import DestinationCard from "./DestinationAstrosCard.vue";
export default {
  components: { DestinationCard },
  props: {
    destinations: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const i = inject("destinationsIndex");

    const changeSection = (evnt) => {
      const { target } = evnt;
      if (target.classList.contains("destination__container__names")) {
        if (target.id == "moon") i.value = 0;
        if (target.id == "mars") i.value = 1;
        if (target.id == "europa") i.value = 2;
        if (target.id == "titan") i.value = 3;
      }
    };

    return { changeSection, i };
  },
};
</script>

<style>
.destination__menu-astro {
  width: 445px;
  height: 34px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 36px;
}
.destination__container__names {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  cursor: pointer;
}
</style>
