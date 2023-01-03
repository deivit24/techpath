<template>
  <el-row class="mt-2">
    <el-col :span="4">
      <el-image style="width: 50px; height: 50px" :src="icon" :zoom-rate="1.2" :initial-index="4" fit="cover" />
    </el-col>
    <el-col :span="15">
      <el-progress class="mt-4" :text-inside="false" :color="color" :stroke-width="20" :percentage="percentage">
        <span>{{ percentage }}pts</span>
      </el-progress>
    </el-col>
    <el-col :span="5">
      <el-button class="icon-btn mr-4 mt-2 ml-8" type="danger" plain @click="$emit('remove', tool.name)">
        <i-carbon:row-delete class="mr-2" /> Remove
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { EXPERIENCE, TOOLS } from '../Form/consts';

const props = defineProps({
  toolItem: {
    type: Object,
    default: '',
  },
});

const percentage = ref(0);
const tool = ref();

const icon = computed(() => {
  const value = tool.value;
  let test = value?.icon ? value.icon : '';

  return test;
});
const color = computed(() => {
  const value = tool.value;
  let test = value?.color ? value.color : '';

  return test;
});
const getPercentage = () => {
  let year = props.toolItem.years;
  if (year === 0) return 10;
  return (year / 10) * 100;
};
onMounted(() => {
  percentage.value = getPercentage();
  tool.value = TOOLS.find((e) => e.name === props.toolItem.tool);
});
</script>
