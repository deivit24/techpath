<template>
  <el-row>
    <el-col :span="10">
      <h1>Whats up</h1>
      <p>{{ metrics }}</p>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import CareerApi from '@/api/modules/career';

const metrics = ref({});

const getCareerMetrics = async () => {
  return await CareerApi.getCareerMetrics();
};
onMounted(async () => {
  metrics.value = await getCareerMetrics();
});
</script>
