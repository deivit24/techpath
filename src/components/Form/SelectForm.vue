<template>
  <el-row>
    <el-col :span="10">
      <div class="sub-title my-2 ml-9 text-left text-sm">Select tool</div>
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-11/12 opacity-80"
        :class="[isDark ? 'bg-dark-600' : '']"
        placeholder="Please search for tool"
      >
        <template #prefix>
          <el-icon class="el-input__icon"> <i-carbon-tools></i-carbon-tools> </el-icon>
        </template>
      </el-autocomplete>
    </el-col>
    <el-col :span="10">
      <div class="sub-title my-2 ml-9 text-left text-sm">Select years of experience</div>
      <el-select
        v-model="state2"
        clearable
        class="inline-input w-11/12 opacity-80"
        :class="[isDark ? 'bg-dark-600' : '']"
        placeholder="Select years of experience"
      >
        <el-option v-for="item in EXPERIENCE" :label="item.value" :value="item.year" />
      </el-select>
    </el-col>
    <el-col class="text-right" :span="4">
      <el-button class="icon-btn mt-9 mr-4 opacity-80" :color="isDark ? '#1C1C1E' : ''" @click="handleSubmit">
        <i-carbon-add class="mr-2" /> Add Tool
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { items, EXPERIENCE } from '../../utils/consts';
import { ToolItem } from '@/types';
import { isDark } from '@/utils/dark';

const emit = defineEmits(['add']);
const state1 = ref('');
const state2 = ref('');

const tools = ref<ToolItem[]>([]);
const querySearch = (queryString: string, cb: any) => {
  const results = queryString ? tools.value.filter(createFilter(queryString)) : tools.value;
  // call callback function to return suggestions
  cb(results);
};
const createFilter = (queryString: string) => {
  return (restaurant: ToolItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};
const loadAll = () => {
  return items.value;
};

const handleSubmit = () => {
  if (state1.value === '' || state2.value === '') {
    let message = '';
    if (state1.value === '') message = 'Please search for tool';
    else if (state2.value === '') message = 'Please choose years of experience';
    else if (state1.value === '' && state2.value === '') message = 'Please fill out form';

    ElMessage.error({ message: message, duration: 2000 });
    return;
  }
  emit('add', { tool: state1.value, years: state2.value });

  state1.value = '';
  state2.value = '';
};

onMounted(() => {
  tools.value = loadAll();
});
</script>
