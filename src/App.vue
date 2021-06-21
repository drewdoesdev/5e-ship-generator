<template>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">

@font-face {
  font-family: "Lobster";
  src: local("Lobster"), url("./assets/fonts/Lobster/Lobster-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url("./assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
}

@import "./scss/reset.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;


}
</style>
