<template>
  <el-row class="mt-2">
    <el-col :span="4">
      <el-image
        style="width: 50px; height: 50px"
        :src="$props.toolItem.tool?.imageUrl"
        :zoom-rate="1.2"
        :initial-index="4"
        fit="cover"
      />
    </el-col>
    <el-col :span="15">
      <el-progress
        class="mt-4"
        :text-inside="false"
        :color="$props.toolItem.tool?.color"
        :stroke-width="20"
        :percentage="percentage"
      >
        <span>{{ percentage }}pts</span>
      </el-progress>
    </el-col>
    <el-col :span="5">
      <el-row justify="end">
        <el-tooltip content="Edit" placement="bottom">
          <button class="icon-btn mt-4 text-blue-600" @click="openDialog">
            <i-carbon:edit class="icon-footer" />
          </button>
        </el-tooltip>
        <el-tooltip content="Remove" placement="bottom">
          <button class="icon-btn text-red-600 ml-4 mr-8 mt-4" @click="removeUserTool">
            <i-carbon:trash-can class="icon-footer" />
          </button>
        </el-tooltip>
      </el-row>
      <el-dialog v-model="dialog" width="500px" :close-on-click-modal="false" :show-close="false" destroy-on-close>
        <el-select
          v-model="expSelect"
          clearable
          class="inline-input w-12/12 opacity-80"
          :class="[isDark ? 'bg-dark-600' : '']"
          placeholder="Select years of experience"
        >
          <el-option v-for="item in EXPERIENCE" :label="item.value" :value="item.year" />
        </el-select>
        <el-row justify="end">
          <el-button class="icon-btn mt-4 mr-2 text-red-600 opacity-80" @click="dialog = false">
            <i-carbon-skip-back class="mr-2" /> Cancel
          </el-button>
          <el-button class="icon-btn mt-4 opacity-80 text-light-blue-500" @click="updateToolUser">
            <i-carbon-save class="mr-2" /> Save
          </el-button>
        </el-row>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import ToolsApi from '@/api/modules/tools';
import { EXPERIENCE } from '../../utils/consts';
import { computed, ref, onMounted } from 'vue';
import { isDark } from '@/utils/dark';
import exp from 'constants';
const emit = defineEmits(['removeItem']);
const props = defineProps({
  toolItem: {
    type: Object,
    required: true,
  },
});

const expSelect = ref('');
const percentage = ref(0);
const dialog = ref(false);

const getPercentage = (exp: number) => {
  if (exp === 0) return 10;
  return (exp / 10) * 100;
};

const openDialog = () => {
  dialog.value = true;
  const value = props.toolItem.experience ? props.toolItem.experience : 1;
  const found = EXPERIENCE.find((e) => e.year == value);
  expSelect.value = found ? found.value : '';
};
const removeUserTool = async () => {
  try {
    const name = await ToolsApi.deleteUserTool(props.toolItem.tool.id);

    ElMessage.success(`Successfully deleted ${name} from your tools`);
    //@ts-ignore
    emit('removeItem', props.toolItem.id);
  } catch (e) {
    console.error(e);
  }
};

const updateToolUser = async () => {
  try {
    const data = {
      experience: expSelect.value,
    };

    const res = await ToolsApi.updateUserTool(props.toolItem.tool.id, data);
    percentage.value = getPercentage(res.experience);
    dialog.value = false;
    ElMessage.success(`Successfully updated ${props.toolItem.tool.name} experience`);
  } catch (e) {
    console.error(e);
  }
};
onMounted(() => {
  percentage.value = getPercentage(props.toolItem.experience);
});
</script>
