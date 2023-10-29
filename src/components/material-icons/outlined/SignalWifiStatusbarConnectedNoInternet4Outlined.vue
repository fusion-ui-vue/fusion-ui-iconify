
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SignalWifiStatusbarConnectedNoInternet4Outlined',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z"/><rect height="2" width="2" x="19" y="18"/><rect height="6" width="2" x="19" y="10"/></g></g>
  </svg>
</template>
        