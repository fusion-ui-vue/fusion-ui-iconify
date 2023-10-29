
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'TrendingDownRound',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.85 17.15l1.44-1.44-4.88-4.88-3.29 3.29c-.39.39-1.02.39-1.41 0l-6-6.01c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L9.41 12l3.29-3.29c.39-.39 1.02-.39 1.41 0l5.59 5.58 1.44-1.44c.31-.31.85-.09.85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84z"/>
  </svg>
</template>
        