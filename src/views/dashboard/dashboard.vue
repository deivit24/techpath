<template>
  <div style="height: 100vh" class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-start">
    <el-row :gutter="10" class="mt-10 mb-5">
      <el-col :xs="24" :sm="12" :md="14">
        <h1 class="font-serif text-3xl">Welcome back {{ user }}</h1>
      </el-col>
    </el-row>
    <el-tabs type="border-card" @tab-change="update">
      <el-tab-pane label="Tools">
        <DashboardUserTools />
      </el-tab-pane>
      <el-tab-pane label="Career Analyst" name="career"><DashboardCareer :key="careerKey" /></el-tab-pane>
      <el-tab-pane label="Profile"><DashboardUserProfile /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import type { TabPanelName } from 'element-plus';
import ToolsApi from '@/api/modules/tools';
import authStore from '@/store/auth';
const auth = authStore();
const tools = ref([]);
const careerKey = ref(1);
onMounted(async () => {
  tools.value = await getTools();
});

const user = computed(() => {
  return auth.getUser?.name;
});

const update = (targetName: TabPanelName | undefined) => {
  if (targetName == 'career') careerKey.value += 1;
};
const getTools = async () => {
  return await ToolsApi.getTools();
};
</script>
