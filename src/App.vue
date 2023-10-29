<script lang="ts" setup>
// This import will effect the speed of loading the page
// import { AbcFilled, HomeFilled } from './components/material-icons';
import AbcFilled from './components/material-icons/filled/AbcFilled.vue';
import HomeFilled from './components/material-icons/filled/HomeFilled.vue';
</script>
<template>
  <div style="color: deeppink">
    <AbcFilled size="50px" />
  </div>
  <HomeFilled color="blue" />
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
}
</style>
