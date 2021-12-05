<template>
  <main id="technology">
    <h2 class="title-section"><span>03</span> SPACE LAUNCH 101</h2>
    <TechnologyLaunch v-if="technology.length !== 0" :technology="technology" />
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import TechnologyLaunch from "../components/TechnologyLaunch.vue";
import { provide } from "@vue/runtime-core";
export default {
  components: { TechnologyLaunch },

  setup() {
    const technology = ref([]);
    const technologyIndex = ref(0);
    provide("technologyIndex", technologyIndex);

    const dataJson = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      technology.value = data.technology;
      console.log(technology.value);
    };
    dataJson();

    return { technology, technologyIndex, dataJson };
  },
};
</script>

<style>
#technology {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #0b0d17
    url("../assets/technology/background-technology-desktop.jpg") no-repeat;
  background-size: cover;
  background-blend-mode: luminosity;
  color: #fff;
  overflow: hidden;
}
@media (max-width: 1240px) {
  #technology .mt {
    margin-top: 15.85rem;
  }
  #technology .flex-center {
    flex-direction: column-reverse;
    row-gap: 50px;
  }
  #technology .card__img-container img {
    width: 100%;
    height: 334px;
  }
  #technology .card {
    justify-content: flex-start;
    order: -1;
    height: 320px;
  }
  .num-group {
    flex-direction: row;
    height: auto;
    column-gap: 16px;
  }
  .num-group span {
    font-size: 24px;
    width: 60px;
    height: 60px;
  }
}
</style>
