<template>
  <div class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-start">
    <HomeTitle @scroll="scrollDown" />
    <div class="h-100vh flex flex-col justify-center" id="toolPage">
      <div class="text-center text-md">
        <SelectForm @add="addTool" />
        <div id="toolCard">
          <ToolItem v-for="tool in tools" :key="tool.tool" :tool-item="tool" @remove="removeTool" />
        </div>
        <el-row v-if="tools.length > 0" class="justify-end mt-5">
          <el-button type="danger" plain @click="tools = []"> Remove All</el-button>

          <el-button type="primary" class="mr-4" plain @click="calculate"> Calculate Path</el-button>
        </el-row>
      </div>
      <CalculateDialog :dialog="dialog" :tools="calculateTools" title="Career Path" @close="dialog = false" />
      <el-card id="card" shadow="never" class="mt-10" v-if="tools.length === 0">
        <h3 class="font-serif font-bold text-gray-400">
          {{ t('no tools') }}
        </h3>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TOOLS } from '@/utils/consts';
import { Tool } from '@/types';
import { ref } from 'vue';

const dialog = ref(false);
const toolPage = ref(null);
const tools = ref<Tool[]>([]);
const calculateTools = ref<Tool[]>([]);
const { t } = useI18n();
ElMessage.success({ message: 'welcome', duration: 1000 });

const removeTool = (name: string) => {
  tools.value = tools.value.filter((t) => t.tool !== name);
  ElMessage.info({ message: 'Tool successfully removed', duration: 3000 });
};
const addTool = (item: Tool) => {
  let names = TOOLS.map(({ name }) => name);
  let toolNames = tools.value.map(({ tool }) => tool);
  if (toolNames.includes(item.tool)) {
    ElMessage.info({ message: 'Tool already added', duration: 3000 });
    return;
  }

  if (!names.includes(item.tool)) {
    ElMessage.error({ message: 'Tool does not exist in our database yet', duration: 3000 });
  } else {
    tools.value.push(item);
    ElMessage.success({ message: 'Tool successfully added', duration: 3000 });
  }
  console.log(tools.value);
};
const calculate = () => {
  calculateTools.value = tools.value;
  dialog.value = true;
};

const scrollDown = () => {
  document.getElementById('toolPage')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
#card {
  height: 75%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}

#toolCard {
  max-height: 500px;
  overflow-y: auto;
}

#toolCard::-webkit-scrollbar {
  width: 0.5em;
}

#toolCard::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#toolCard::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
