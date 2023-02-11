<template>
  <el-row>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="avatar" class="image" v-if="!loading" />
        <el-skeleton style="width: 100%" v-if="loading" :loading="true" animated>
          <template #template>
            <el-skeleton-item variant="image" style="width: 100%; height: 260px" />
          </template>
        </el-skeleton>
        <div style="padding: 14px" class="flex">
          <span>{{ $props.username }}</span>
          <el-upload
            :limit="1"
            :show-file-list="false"
            :auto-upload="false"
            class="ml-auto"
            accept="image/*"
            :on-change="handleChange"
          >
            <el-tooltip content="Upload New Image" placement="top">
              <button class="icon-btn text-xs" @click="">
                <i-carbon:upload class="icon-footer" />
              </button>
            </el-tooltip>
          </el-upload>
        </div>
      </el-card>
    </el-col>
    <el-col :span="18" class="p-5">
      <el-descriptions title="Profile Settings" :column="3" :border="true">
        <template #extra>
          <el-tooltip content="Edit Profile Settings" placement="top">
            <button class="icon-btn mx-2" @click="">
              <i-carbon:edit class="icon-footer" />
            </button>
          </el-tooltip>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <i-carbon:user class="mr-2" />
              Name
            </div>
          </template>
          {{ $props.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item"><i-carbon:email class="mr-2" /> Email</div>
          </template>
          {{ $props.email }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <i-carbon:virtual-private-cloud class="mr-2" />
              Private
            </div>
          </template>
          True
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <i-carbon:logo-github class="mr-2" />
              GitHub
            </div>
          </template>
          https://github.com/devit24
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <i-carbon:logo-linkedin class="mr-2" />
              LinkedIn
            </div>
          </template>
          https://github.com/devit24
        </el-descriptions-item>
      </el-descriptions>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import authStore from '@/store/auth';
import UsersApi from '@/api/modules/user';
import type { UploadProps, UploadUserFile } from 'element-plus';
const auth = authStore();

// const fileList = ref<UploadUserFile[]>([]);
const props = defineProps<{
  username?: string | null;
  email?: string | null;
}>();
const loading = ref(false);
const avatar = computed(() => {
  return auth.getUserAvatar ? auth.getUserAvatar : '';
});
const handleChange: UploadProps['onChange'] = async (uploadFile, uploadFiles) => {
  loading.value = true;
  let formData = new FormData();
  //@ts-ignore
  formData.append('files', uploadFile.raw);
  const res = await UsersApi.uploadAvatar(formData);
  //@ts-ignore
  auth.setAvatar(res.data.imageUrl);

  loading.value = false;
};
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
</style>
