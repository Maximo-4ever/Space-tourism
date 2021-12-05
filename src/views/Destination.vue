<template>
  <main id="destination" class="destination">
    <h2 class="title-section"><span>01</span> Pick your destination</h2>
    <div class="trick-container">
      <div class="destination__container-astro" @click="changeSection">
        <span class="destination__container__names" id="moon">MOON</span>
        <span class="destination__container__names" id="mars">MARS</span>
        <span class="destination__container__names" id="europa">EUROPA</span>
        <span class="destination__container__names" id="titan">TITAN</span>
      </div>
    </div>
    <DestinationAstros
      v-if="destinations.length !== 0"
      :destinations="destinations"
      :i="destinationsIndex"
    />
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import DestinationAstros from "../components/DestinationAstros.vue";

export default {
  components: { DestinationAstros },
  setup() {
    const destinations = ref([]);
    const destinationsIndex = ref(0);

    const dataJson = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      destinations.value = data.destinations;
    }; dataJson();

    const changeSection = (evnt) => {
      const { target } = evnt;
      if (target.classList.contains("destination__container__names")) {
        if (target.id == "moon") destinationsIndex.value = 0;
        if (target.id == "mars") destinationsIndex.value = 1;
        if (target.id == "europa") destinationsIndex.value = 2;
        if (target.id == "titan") destinationsIndex.value = 3;
      }
    };
    
    return { destinations, destinationsIndex, dataJson, changeSection };
  },
};
</script>

<style>
#destination {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #0b0d17
    url("../assets/destination/background-destination-desktop.jpg") no-repeat;
  background-size: cover;
  background-blend-mode: luminosity;
  color: #fff;
  padding-top: 10em;
}
.trick-container {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.destination__container-astro {
  width: 445px;
  height: 34px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 36px;
}
.destination__container__names {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
  cursor: pointer;
}
</style>
