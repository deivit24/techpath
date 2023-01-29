<template>
  <el-row>
    <el-col :span="10">
      <div class="sub-title my-2 ml-9 text-left text-sm">Select tool</div>
      <el-autocomplete
        v-model="toolSelect"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-11/12 opacity-80"
        :class="[isDark ? 'bg-dark-600' : '']"
        placeholder="Please search for tool"
        @select="handleSelect"
      >
        <template #prefix>
          <el-icon class="el-input__icon"> <i-carbon-tools></i-carbon-tools> </el-icon>
        </template>
      </el-autocomplete>
    </el-col>
    <el-col :span="10">
      <div class="sub-title my-2 ml-9 text-left text-sm">Select years of experience</div>
      <el-select
        v-model="expSelect"
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
import { EXPERIENCE } from '../../utils/consts';
import { ToolApi } from '@/types';
import { isDark } from '@/utils/dark';
import ToolsApi from '@/api/modules/tools';

const emit = defineEmits(['add']);
const toolSelect = ref('');
const expSelect = ref('');
const toolId = ref('');

const tools = ref<ToolApi[]>([]);
const querySearch = (queryString: string, cb: any) => {
  const results = queryString ? tools.value.filter(createFilter(queryString)) : tools.value;
  // call callback function to return suggestions
  cb(results);
};
const createFilter = (queryString: string) => {
  return (tools: ToolApi) => {
    return tools.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};

const handleSubmit = async () => {
  if (toolSelect.value === '' || expSelect.value === '') {
    let message = '';
    if (toolSelect.value === '') message = 'Please search for tool';
    else if (expSelect.value === '') message = 'Please choose years of experience';
    else if (toolSelect.value === '' && expSelect.value === '') message = 'Please fill out form';

    ElMessage.error({ message: message, duration: 2000 });
    return;
  }
  // TODO: After user creates, have a way to display new tool
  await ToolsApi.createUserTool({ experience: expSelect.value }, toolId.value);

  toolSelect.value = '';
  expSelect.value = '';
  toolId.value = '';
};
const getAllTools = async () => {
  const res = await ToolsApi.getTools();
  let items: ToolApi[] = [];
  for (let i of res) {
    const obj = { value: '', id: '' };
    obj.value = i.name;
    obj.id = i.id;
    items.push(obj);
  }
  return items;
};
const handleSelect = (tool: any) => {
  toolId.value = tool.id;
};
onMounted(async () => {
  tools.value = await getAllTools();
});
</script>