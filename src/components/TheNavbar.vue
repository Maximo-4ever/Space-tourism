<template>
  <header id="header">
    <img class="header__logo" src="../assets/shared/logo.svg" alt="logo" />
    <nav id="nav" :class="{ 'nav--active': isMenuActive }">
      <ul class="nav__menu">
        <li>
          <router-link to="/" @click="toggleMenu()"
            ><span>00</span> HOME</router-link
          >
        </li>
        <li>
          <router-link to="/destination" @click="toggleMenu()"
            ><span>01</span> DESTINATION</router-link
          >
        </li>
        <li>
          <router-link to="/crew" @click="toggleMenu()"
            ><span>02</span> CREW</router-link
          >
        </li>
        <li>
          <router-link to="/technology" @click="toggleMenu()"
            ><span>03</span> TECHNOLOGY</router-link
          >
        </li>
      </ul>
    </nav>
    <div
      class="ico-menu"
      :class="{ close: isMenuActive }"
      @click="toggleMenu()"
    ></div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isMenuActive = ref(false);

    const toggleMenu = () => {
      console.log("toggle!");
      isMenuActive.value = !isMenuActive.value;
    };

    return { toggleMenu, isMenuActive };
  },
};
</script>
