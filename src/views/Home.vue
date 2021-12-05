<template>
  <main id="home">
    <div class="center">
      <div class="home__space-info">
        <h2 class="home__space-info__subtitle">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 class="home__space-info__title">SPACE</h1>
        <p class="home__space-info__text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="home__explore">
        <span>EXPLORE</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
#home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.center {
  margin-top: 7.5em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.home__space-info {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 382px;
}
.home__space-info__title {
  font-family: "Bellefair", serif;
  font-size: 150px;
  line-height: 172px;
  color: #ffffff;
  margin-bottom: 30px;
}
.home__space-info__subtitle {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #d0d6f9;
  margin-bottom: 30px;
}
.home__space-info__text {
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

.home__explore::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: #ffffff;
  mix-blend-mode: normal;
  border-radius: 50%;
  opacity: 0;
  transition: 0.6s cubic-bezier(0.32, 0.87, 0.62, 1.01);
}
.home__explore:hover::after {
  width: 450px;
  height: 450px;
  opacity: 0.1;
}
.home__explore {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 274px;
  height: 274px;
  background-color: #fff;
}
.home__explore span {
  font-family: "Bellefair", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
}
</style>
