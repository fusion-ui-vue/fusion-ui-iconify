
<script>
import { computed } from 'vue';
export default {
  name: 'WaterDamageTwotone',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => props.size + 'px')

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <rect fill="none" height="24" width="24"/><path d="M12,5.69l-5,4.5V18h10v-7.81L12,5.69z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4 C14,15.1,13.1,16,12,16z" opacity=".3"/><path d="M12,3L2,12h3v8h14v-8h3L12,3z M7,18v-7.81l5-4.5l5,4.5V18H7z M14,14c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,2-4,2-4 S14,12.9,14,14z"/>
  </svg>
</template>
        