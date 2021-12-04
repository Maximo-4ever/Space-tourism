<template>
  <main id="crew">
    <h2 class="title-section"><span>02</span> Pick your destination</h2>
    <CrewJobs v-if="crew.length !== 0" :crew="crew" />
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import CrewJobs from "../components/CrewJobs.vue";
import { provide } from '@vue/runtime-core';
export default {
  components: { CrewJobs },
  setup() {
    const crew = ref([]);
    const crewIndex = ref(0);
    provide("crewIndex", crewIndex);


    const dataJson = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      crew.value = data.crew;
      console.log(crew.value);
    };
    dataJson();

    return { crew, crewIndex, dataJson };
  },
};
</script>

<style>
#crew {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  background: #0b0d17 url("../assets/crew/background-crew-desktop.jpg")
    no-repeat;
  background-size: cover;
  background-position: bottom;
  background-blend-mode: luminosity;
  color: #fff;
}
</style>
