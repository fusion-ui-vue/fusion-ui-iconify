
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'ElectricMeterTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,4c-3.86,0-7,3.14-7,7s3.14,7,7,7s7-3.14,7-7S15.86,4,12,4z M14.25,14l-3,3l-1.5-1.5L11,14.25L9.75,13 l3-3l1.5,1.5L13,12.75L14.25,14z M16,9H8V7h8V9z" opacity=".3"/><path d="M12,2c-4.97,0-9,4.03-9,9c0,3.92,2.51,7.24,6,8.48V22h2v-2.06c0.33,0.04,0.66,0.06,1,0.06s0.67-0.02,1-0.06V22h2v-2.52 c3.49-1.24,6-4.56,6-8.48C21,6.03,16.97,2,12,2z M12,18c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S15.86,18,12,18z"/><rect height="2" width="8" x="8" y="7"/><polygon points="12.75,10 9.75,13 11,14.25 9.75,15.5 11.25,17 14.25,14 13,12.75 14.25,11.5"/></g></g>
  </svg>
</template>
        