<template>
  <el-row>
    <el-col>
      <el-result
        icon="warning"
        title="page has no permissions"
        sub-title="Please contact the administrator to apply for permission"
      >
        <template #extra>
          <el-button type="primary" @click="goBack">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
