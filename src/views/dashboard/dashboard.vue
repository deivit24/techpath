<template>
  <div style="height: 100vh" class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-start">
    <el-row :gutter="10" class="mt-10">
      <el-col :xs="24" :sm="12" :md="14">
        <h1 class="font-serif text-3xl">Welcome back {{ user }}</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue';

import ToolsApi from '@/api/modules/tools';
import authStore from '@/store/auth';
const auth = authStore();
const tools = ref([]);
onMounted(async () => {
  tools.value = await getTools();
});

const user = computed(() => {
  if (auth.getUser) return auth.getUser?.name;
  return '';
});
const getTools = async () => {
  return await ToolsApi.getUserTools();
};
</script>
