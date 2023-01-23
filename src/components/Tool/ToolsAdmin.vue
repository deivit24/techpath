<template>
  <el-col :span="4">
    <el-card :body-style="{ padding: '2px' }">
      <el-image :src="image" :zoom-rate="1.2" :initial-index="4" fit="cover" />
      <div style="padding: 10px">
        <span class="font-serif">{{ name }}</span>
        <div class="bottom">
          <button @click="">
            <i-carbon:pen class="icon" />
          </button>
          <button @click="">
            <i-carbon:trash-can class="icon" />
          </button>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  toolItem: {
    type: Object,
    default: {},
  },
});

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
