<script lang="ts" setup></script>

<template>
  <md-tabs>
    <md-primary-tab @click="$emit('onShapeChange', 'Filled')">Filled</md-primary-tab>
    <md-primary-tab @click="$emit('onShapeChange', 'Outlined')">Outlined</md-primary-tab>
    <md-primary-tab @click="$emit('onShapeChange', 'Round')">Round</md-primary-tab>
    <md-primary-tab @click="$emit('onShapeChange', 'Sharp')">Sharp</md-primary-tab>
    <md-primary-tab @click="$emit('onShapeChange', 'TwoTone')">Two Tone</md-primary-tab>
  </md-tabs>
</template>
