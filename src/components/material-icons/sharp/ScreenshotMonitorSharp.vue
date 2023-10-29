
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'ScreenshotMonitorSharp',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M22,3H2v16h6v2h8v-2h6V3z M20,17H4V5h16V17z"/><polygon points="6.5,7.5 9,7.5 9,6 5,6 5,10 6.5,10"/><polygon points="19,12 17.5,12 17.5,14.5 15,14.5 15,16 19,16"/></g></g>
  </svg>
</template>
        