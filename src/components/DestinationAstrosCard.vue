<template>
  <article class="card">
    <h1 class="card__title">{{ destinations.name }}</h1>
    <p class="card__info">
      {{ destinations.description }}
    </p>

    <div class="card__distance">
      <div class="card__distance__container">
        <h3 class="card__distance__title">AVG. DISTANCE</h3>
        <p class="card__distance__info">{{ destinations.distance }}</p>
      </div>
      <div class="card__distance__container">
        <h3 class="card__distance__title">Est. travel time</h3>
        <p class="card__distance__info">{{ destinations.travel }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    destinations: {
      type: Object,
      required: true,
    },
  },
};
</script>
