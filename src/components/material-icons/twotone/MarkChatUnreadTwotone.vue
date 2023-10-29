
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'MarkChatUnreadTwotone',
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
    <g><rect fill="none" height="24" width="24" y="0"/><path d="M4,16h16V7.9C19.68,7.96,19.34,8,19,8c-2.42,0-4.44-1.72-4.9-4H4V16z" opacity=".3"/><path d="M20,7.9c0.74-0.15,1.42-0.48,2-0.92V16c0,1.1-0.9,2-2,2H6l-4,4V4c0-1.1,0.9-2,2-2h10.1C14.04,2.32,14,2.66,14,3 s0.04,0.68,0.1,1H4v12h16V7.9z M16,3c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,1.34,16,3z"/></g>
  </svg>
</template>
        