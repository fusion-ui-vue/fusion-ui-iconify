<script lang="ts" setup>
import { ref, reactive, watch, watchEffect, shallowRef } from 'vue';
import { Shapes } from '../utils';

const props = defineProps<{
  shape: string;
}>();

const IconComponents = reactive<Record<Shapes, Function>>({
  Filled: () => import('./material-icons/filled'),
  Outlined: () => import('./material-icons/outlined'),
  Round: () => import('./material-icons/round'),
  Sharp: () => import('./material-icons/sharp'),
  TwoTone: () => import('./material-icons/twotone')
});

const search = ref<string>('');
const component = shallowRef<any>(null);
const _component = shallowRef<any>(component.value);
watch(
  () => props.shape,
  shape => {
    IconComponents[shape as Shapes]().then((res: any) => {
      _component.value = res;
    });
  },
  { immediate: true }
);
watchEffect(() => {
  if (_component.value && search.value !== '') {
    component.value = Object.values(_component.value).filter((item: any) => {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    });
  } else {
    component.value = _component.value;
  }
});

const handleCopy = async (name: string, shape: string) => {
  const template = `import ${name} from 'fusion-ui-iconify/material-icons/${shape}/${name}.vue';`;
  await navigator.clipboard.writeText(template);
};
const handleInput = (event: InputEvent) => {
  search.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
  <div class="search-container">
    <md-outlined-text-field class="search-text-field" label="Search" :value="search" @input="handleInput" />
  </div>
  <div class="icons-container">
    <button
      class="btn-icon-wrapper"
      v-for="item in component"
      :key="item.name"
      @click="handleCopy(item.name, 'filled')"
    >
      <component :is="item" size="48" />
      <span class="icon-name">
        {{ item.name.replace('Filled', ' ') }}
      </span>
    </button>
  </div>
</template>

<style>
.search-container {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
}
.search-text-field {
  width: 25%;
}
.icons-container {
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  display: grid;
  -webkit-column-gap: 16px;
  -moz-column-gap: 16px;
  column-gap: 16px;
  grid-template-columns: repeat(auto-fill, 112px);
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  row-gap: 24px;
  color: #5f6368;
  width: 100%;
  margin-top: 24px;
}
.btn-icon-wrapper {
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  background: transparent;
  border: 0;
  border-radius: 8px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  height: 128px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 112px;
  padding: 1 6px;
}
.btn-icon-wrapper:hover {
  background-color: rgba(60, 64, 67, 0.04);
}
.btn-icon-wrapper:active {
  background-color: rgba(60, 64, 67, 0.12);
  outline: 0;
}
.icon-name {
  box-sizing: border-box;
  padding: 0 8px;
  margin-top: 20px;
  position: relative;
  display: inline-block;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
</style>
