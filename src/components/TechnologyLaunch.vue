<template>
  <div class="flex">
    <div class="num-group" ref="root">
      <span class="point-active" @click="changeLaunch(0)">1</span>
      <span @click="changeLaunch(1)">2</span>
      <span @click="changeLaunch(2)">3</span>
    </div>
    <article class="card">
      <h1 class="card__job">THE TERMINOLOGY…</h1>
      <h3 class="card__title md-title">{{ technology[i].name }}</h3>
      <p class="card__info">
        {{ technology[i].description }}
      </p>
    </article>
    <div class="card__img-container">
      <img
        class="person"
        :src="require(`@/${technology[i].images.portrait.slice(2)}`)"
        :alt="technology[i].name"
      />
    </div>
  </div>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
export default {
  props: {
    technology: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const root = ref(null);
    const i = inject("technologyIndex");

    const changeLaunch = (index) => {
      console.log(index);
      let points = root.value.childNodes;
      points.forEach((activos) => {
        activos.classList.remove("point-active");
      });
      points[index].classList.add("point-active");
      i.value = index;
    };

    return { changeLaunch, i, root };
  },
};
</script>

<style>
#technology .card {
  width: 470px;
}
#technology .card__job {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #d0d6f9;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  margin-bottom: 11px;
}
#technology .card__info {
  margin-bottom: 0;
}
.num-group {
  height: 303px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.num-group span {
  font-family: "Bellefair", serif;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
}
.point-active.point-active {
  background-color: #fff;
  color: #000;
  border-color: transparent;
}

#technology .card__img-container img {
  width: 515px;
  height: 527px;
}
</style>
