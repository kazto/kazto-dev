<template>
  <div id="app">
    <HelloWorld>
      <template v-slot:title>
        kazto<br class='sp'>.dev
      </template>
    </HelloWorld>
    <Links />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Links from './components/Links.vue';

@Component({
  components: {
    HelloWorld,
    Links,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
body {
  background-image: url('./assets/ore-gray-1600.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 150vh;
  min-height: 50vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (max-width: 576px) {
  body {
    background-size: 100vh;
  }

  #app {
    margin-top: 20px;
  }
}
</style>
