<template>
  <el-row>
    <el-col :span="24"> <h1 class="mb-6 text-center font-serif text-2xl">Tech Path Chart</h1></el-col>
    <el-col :span="14">
      <PolarAreaChart v-bind="polarAreaChartProps" />
    </el-col>
    <el-col :span="10">
      <div style="height: 80%; display: flex; flex-direction: column; justify-content: center" class="pl-6">
        <h1 class="font-serif font-bold mb-2 text-xl">Frontend Score: {{ frontend }}Pts</h1>
        <p class="mb-5">{{ showJob(frontend, 'Frontend') }}</p>
        <h1 class="font-serif font-bold mb-2 text-xl">Backend Score: {{ backend }} Pts</h1>
        <p class="mb-5">{{ showJob(backend, 'Backend') }}</p>
        <h1 class="font-serif font-bold mb-2 text-xl">Fullstack Score: {{ fullstack }} Pts</h1>
        <p class="mb-5">{{ showJob(fullstack, 'Fullstack') }}</p>
        <h1 class="font-serif font-bold mb-2 text-xl">DevOps Score: {{ devops }} Pts</h1>
        <p class="mb-5">{{ showJob(fullstack, 'DevOps') }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineComponent } from 'vue';
import colorLib from '@kurkle/color';
import { isDark } from '@/utils/dark';
import { Tool } from '@/types';
import { CHART_COLORS } from '@/utils/consts';
import { showJob } from '@/utils/calculations';
import { PolarAreaChart, usePolarAreaChart } from 'vue-chart-3';
import { Chart, ChartOptions, registerables, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import CareerApi from '@/api/modules/career';

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend, ...registerables);
defineComponent({
  components: { PolarAreaChart },
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
      backgroundColor: [
        transparentize(CHART_COLORS.blue, 0.5),
        transparentize(CHART_COLORS.yellow, 0.5),
        transparentize(CHART_COLORS.green, 0.5),
        transparentize(CHART_COLORS.red, 0.5),
      ],
    },
  ],
}));

const transparentize = (value: string, opacity: number) => {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
};
const options = computed<ChartOptions<'polarArea'>>(() => ({
  scales: {
    r: {
      min: 0,
      max: 100,
      grid: {
        color: isDark.value ? 'white' : 'grey',
      },
      ticks: {
        stepSize: 20,
        count: 10,
        font: {
          size: 16,
        },
        color: isDark.value ? 'white' : 'black',
        backdropColor: isDark.value ? 'black' : 'white',
      },
      pointLabels: {
        display: true,
        centerPointLabels: true,
        font: {
          size: 18,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: isDark.value ? 'white' : 'grey',
      },
    },
    title: {
      display: false,
      font: {
        size: 20,
      },
      text: 'Tech Path Chart',
      color: isDark.value ? 'white' : 'grey',
    },
  },
}));

const { polarAreaChartProps } = usePolarAreaChart({
  chartData: testData,
  options,
});
const getCareerMetrics = async () => {
  return await CareerApi.getCareerMetrics();
};
onMounted(async () => {
  const metrics = await getCareerMetrics();
  frontend.value = metrics.frontend;
  backend.value = metrics.backend;
  fullstack.value = metrics.fullstack;
  devops.value = metrics.devops;
});
</script>
