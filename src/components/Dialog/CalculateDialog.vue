<template>
  <el-dialog v-model="props.dialog" :title="props.title" :close-on-click-modal="false" :show-close="false">
    <h1 class="font-serif font-bold mb-2 text-xl text-center">Frontend Score: {{ frontend }}Pts</h1>
    <p class="text-center mb-5">{{ showJob(frontend, 'Frontend') }}</p>
    <h1 class="font-serif font-bold mb-2 text-xl text-center">Backend Score: {{ backend }} Pts</h1>
    <p class="text-center mb-5">{{ showJob(backend, 'Backend') }}</p>
    <h1 class="font-serif font-bold mb-2 text-xl text-center">Fullstack Score: {{ fullstack }} Pts</h1>
    <p class="text-center mb-5">{{ showJob(fullstack, 'Fullstack') }}</p>
    <h1 class="font-serif font-bold mb-2 text-xl text-center">DevOps Score: {{ devops }} Pts</h1>
    <p class="text-center mb-5">{{ showJob(devops, 'DevOps') }}</p>
    <PolarAreaChart v-bind="polarAreaChartProps" />
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="$emit('close')"> Close </el-button>
        <el-button type="success" @click="save"> Save </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { isDark } from '@/utils/dark';
import { Tool } from '@/types';
import { onMounted, ref, computed, defineComponent } from 'vue';
import { calculateFrontend, calculateBackend, calculateFullStack, calculateDevOps } from '../../utils/calculations';
import { PolarAreaChart, usePolarAreaChart } from 'vue-chart-3';
import { Chart, ChartOptions, registerables, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import toolStore from '@/store/tool';
Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend, ...registerables);
defineComponent({
  components: { PolarAreaChart },
});
const props = defineProps({
  title: String,
  dialog: Boolean,
  tools: Array<Tool>,
});

const frontend = ref(0);
const backend = ref(0);
const fullstack = ref(0);
const devops = ref(0);

const dataValues = computed(() => {
  return [frontend.value, backend.value, fullstack.value, devops.value];
});
const dataLables = ref(['Frontend', 'Backend', 'Fullstack', 'DevOps']);
const testData = computed(() => ({
  labels: dataLables.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ['#123E6B', '#97B0C4', '#A5C8ED', '53B81B'],
    },
  ],
}));

const options = computed<ChartOptions<'polarArea'>>(() => ({
  scales: {
    r: {
      min: 0,
      max: 100,
      grid: {
        color: isDark.value ? 'white' : 'grey',
      },
      ticks: {
        stepSize: 10,
        count: 10,
        font: {
          size: 16,
        },
        color: isDark.value ? 'white' : 'black',
        backdropColor: isDark.value ? 'black' : 'white',
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Tech Path Chart',
    },
  },
}));

const { polarAreaChartProps } = usePolarAreaChart({
  chartData: testData,
  options,
});

const showJob = (score: number, type: string) => {
  if (score === 0) return 'N/A';
  if (score < 20) {
    return `Junior ${type} Software Engineer (SE I)`;
  } else if (score < 40) {
    return `${type} Software Engineer (SE II)`;
  } else if (score < 60) {
    return `Senior ${type} Software Engineer (SE III)`;
  } else if (score < 70) {
    return `Tech Lead (${type})`;
  } else if (score < 80) {
    return `Staff Engineer (${type}) or Engineering Lead`;
  } else if (score < 90) {
    return `Senior Staff Engineer (${type}) or Engineering Director`;
  } else {
    return `Chief Architect (Principal) (${type}) or VP Director`;
  }
};
watch(
  () => props.dialog,
  (val) => {
    if (val) {
      const temp = props.tools ? props.tools : [];
      const value = calculateFrontend(temp);
      const backendValue = calculateBackend(temp);
      const devopsValue = calculateDevOps(temp);

      devops.value = Math.floor(devopsValue);
      frontend.value = Math.floor(value);
      backend.value = Math.floor(backendValue);
      fullstack.value = calculateFullStack(frontend.value, backend.value);
    }
  },
);

const save = () => {
  const store = toolStore();
  const temp = props.tools ? props.tools : [];
  store.saveTools(temp);
};
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
