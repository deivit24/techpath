<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import ParticlesHome from './components/Particles/ParticlesHome.vue';
const locale = zhCn;
</script>

<template>
  <div>
    <ParticlesHome />
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
  <TheFooter></TheFooter>
  <EditToolDialog />
</template>
