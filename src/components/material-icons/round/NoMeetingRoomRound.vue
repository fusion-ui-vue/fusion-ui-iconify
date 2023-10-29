
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'NoMeetingRoomRound',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 6h3v7.88l2 2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6.12L14 10.88V6zm7.17 14.88L12 11.71V13h-2v-2h1.29L3.12 2.83c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L5 7.54V19H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1v-3.46l5.75 5.75c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"/>
  </svg>
</template>
        