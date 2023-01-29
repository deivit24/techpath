<template>
  <el-col :sm="6" :xs="12" :md="4">
    <el-card :body-style="{ padding: '2px' }" class="mb-4">
      <el-image :src="image" :zoom-rate="1.2" :initial-index="4" fit="cover" />
      <div style="padding: 10px">
        <span class="font-serif">{{ name }}</span>
        <div class="bottom">
          <button @click="openCreateDialog(props.toolItem.id)">
            <i-carbon:pen class="icon text-blue-500" />
          </button>
          <button @click="handleClose(deleteTool)">
            <i-carbon:trash-can class="icon text-red-500" />
          </button>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import dialoglStore from '@/store/dialogs';
import ToolsApi from '@/api/modules/tools';

const dialog = dialoglStore();
const props = defineProps({
  toolItem: {
    type: Object,
    default: {},
  },
});

const handleClose = (done: () => void) => {
  ElMessageBox.confirm(
    `Are you sure you want to delete ${props.toolItem.name}? Deleting this will also delete all relations to users`,
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    },
  )
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
const deleteTool = async () => {
  try {
    await ToolsApi.deleteTool(props.toolItem.id);
    ElMessage.success('Tool successfully deleted');
  } catch (e) {
    console.error(e);
  }
};
const openCreateDialog = (id: string) => {
  dialog.openDialog(id);
};
const image = computed(() => {
  const value = props.toolItem;
  const image = value?.imageUrl ? value.imageUrl : '';
  return image;
});

const name = computed(() => {
  const value = props.toolItem;
  const name = value?.name ? value.name : 'https://img.stackshare.io/service/3837/paeckCWC.png';
  return name;
});
</script>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
