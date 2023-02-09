<template>
  <el-upload
    v-model:file-list="fileList"
    :limit="1"
    class="flex flex-col justify-center align-middle"
    accept="image/*"
    :auto-upload="false"
    :on-change="handleChange"
  >
    <el-button type="default" size="small" :disabled="disable">
      <i-carbon:image class="mr-2" />Click to upload
    </el-button>
    <template #tip>
      <div class="el-upload__tip text-center">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import ToolsApi from '@/api/modules/tools';
import type { UploadProps, UploadUserFile } from 'element-plus';
const emit = defineEmits(['addImage']);
const fileList = ref<UploadUserFile[]>([]);
const disable = ref(false);
const handleChange: UploadProps['onChange'] = async (uploadFile, uploadFiles) => {
  let formData = new FormData();
  //@ts-ignore
  formData.append('files', uploadFile.raw);
  const res = await ToolsApi.uploadToolImage(formData);
  //@ts-ignore
  emit('addImage', res.data.imageUrl);
  fileList.value = fileList.value;
};
</script>
