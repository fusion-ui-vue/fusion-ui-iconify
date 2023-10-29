
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'WhereToVoteOutlined',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1C7.59 1 4 4.59 4 9c0 5.57 6.96 13.34 7.26 13.67l.74.82.74-.82C13.04 22.34 20 14.57 20 9c0-4.41-3.59-8-8-8zm0 19.47C9.82 17.86 6 12.54 6 9c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.83-4.25 9.36-6 11.47zm-1.53-9.3L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01-1.41-1.42z"/>
  </svg>
</template>
        