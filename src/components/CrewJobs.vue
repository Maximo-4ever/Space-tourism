<template>
  <div class="flex">
    <article class="card">
      <h1 class="card__job">{{ crew[i].role }}</h1>
      <h3 class="card__title">{{ crew[i].name }}</h3>
      <p class="card__info">
        {{ crew[i].bio }}
      </p>
      <div class="container-points">
        <div class="points active" @click="changeRole(0)"></div>
        <div class="points" @click="changeRole(1)"></div>
        <div class="points" @click="changeRole(2)"></div>
        <div class="points" @click="changeRole(3)"></div>
      </div>
    </article>
    <div class="container-person">
      <img
        class="person"
        :src="require('@/' + crew[i].images.png.slice(2))"
        :alt="crew[i].name"
      />
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  props: {
    crew: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const i = inject("crewIndex");

    const changeRole = (index) => {
      console.log(index);
      const points = document.querySelectorAll(".points");
      points.forEach((activos) => {
        activos.classList.remove("active");
      });
      points[index].classList.add("active");
      i.value = index;
    };

    return { changeRole, i };
  },
};
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  flex-direction: row;
  width: 1140px;
}
.card-container {
  position: relative;
}
#crew .card {
  position: relative;
  width: 614px;
  height: 460px;
}
#crew .card__info {
  width: 444px;
  margin-bottom: 120px;
}
#crew .card__job {
  font-family: "Bellefair", serif;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 15px;
}
#crew .card__title {
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
}
.container-points {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 24px;
}
.points {
  width: 15px;
  height: 15px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.17;
  border-radius: 50%;
}
.points.active {
  opacity: 1;
}
.person {
  height: 680px;
  max-width: 600px;
  margin-bottom: -10px;
}
</style>
