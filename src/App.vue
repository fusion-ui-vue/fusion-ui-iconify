<script lang="ts" setup>
import { ref } from 'vue';
// import AppBar from './components/AppBar.vue';
import Gallery from './components/Gallery.vue';
import IconFilter from './components/Filter.vue';
import { Shapes } from './utils';

const shape = ref<Shapes>('Filled');
const onShapeChange = (newShape: string) => {
  shape.value = newShape as Shapes;
};
</script>

<template>
  <!-- <app-bar /> -->

  <main class="main-container">
    <icon-filter @onShapeChange="onShapeChange" />
    <keep-alive>
      <gallery :shape="shape" />
    </keep-alive>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #fef7ff;
}

main.main-container {
  margin: 50px auto 0;
  max-width: 1440px;
}
</style>
