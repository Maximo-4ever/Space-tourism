<template>
  <TheNavbar />
  <router-view />
</template>

<script>
import "./assets/global.css";
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar },};
</script>
