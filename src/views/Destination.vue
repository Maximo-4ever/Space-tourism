<template>
  <main id="destination">
    <h2 class="title-section"><span>01</span> Pick your destination</h2>
    <DestinationAstros
      v-if="destinations.length !== 0"
      :destinations="destinations"
    />
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import DestinationAstros from "../components/DestinationAstros.vue";
import { provide } from "@vue/runtime-core";

export default {
  components: { DestinationAstros },
  setup() {
    const destinations = ref([]);
    const destinationsIndex = ref(0);
    provide("destinationsIndex", destinationsIndex);

    const dataJson = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      destinations.value = data.destinations;
    };
    dataJson();

    return { destinations, destinationsIndex, dataJson };
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
    url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-blend-mode: luminosity;
  color: #fff;
  overflow-x: hidden;
}

@media (max-width: 1220px) {
  .grid-center {
    grid-template-columns: 1fr;
  }
  .mt {
    margin-top: 16rem;
  }
  .trick-container {
    display: none;
  }
  .destination__menu-astro {
    margin-top: 52px;
    justify-content: center;
    grid-row: 2/3;
  }
  #destination .card {
    width: 82vw;
    max-width: 573px;
    height: 430px;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  #destination .card__title {
    font-size: 80px;
    margin-bottom: 8px;
  }
  #destination .card__info {
    margin-bottom: 49px;
  }
  #destination .card__distance {
    justify-content: center;
  }
  #destination .card__distance__container {
    align-items: center;
  }
  .destination__content-img__img {
    width: 300px;
  }
}
@media (max-width: 560px) {
  .destination__content-img__img {
    width: 150px;
  }
  .destination__container__names {
    font-size: 14px;
  }
  #destination .card {
    height: auto;
  }
  #destination .card__distance {
    flex-direction: column;
    row-gap: 32px;
  }
}


</style>
