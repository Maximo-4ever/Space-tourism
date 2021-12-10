<template>
  <header id="header">
    <img class="header__logo" src="../assets/shared/logo.svg" alt="logo" />
    <nav id="nav">
      <ul class="nav__menu">
        <li>
          <router-link to="/"><span>00</span> HOME</router-link>
        </li>
        <li>
          <router-link to="/destination"
            ><span>01</span> DESTINATION</router-link
          >
        </li>
        <li>
          <router-link to="/crew"><span>02</span> CREW</router-link>
        </li>
        <li>
          <router-link to="/technology"><span>03</span> TECHNOLOGY</router-link>
        </li>
      </ul>
    </nav>
    <div class="ico-menu">
      
    </div>
  </header>
</template>
