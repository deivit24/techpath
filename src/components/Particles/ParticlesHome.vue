<template>
  <Particles id="tsparticles" :key="key" :options="options" :particlesInit="particlesInit" />
</template>

<script lang="ts" setup>
import { isDark } from '@/utils/dark';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { onMounted } from 'vue';

const key = ref(0);
const options = ref({
  background: {
    color: {
      value: '#1F2937',
    },
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#325358', '#C0FFEE', '#31CCEC', '#6A1A78'],
    },
    shape: {
      type: ['circle', 'triangle', 'edge', 'polygon'],
      stroke: {
        width: 0,
        color: ['#325358', '#C0FFEE', '#31CCEC', '#6A1A78'],
      },
      polygon: {
        nb_sides: 6,
      },
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#C0FFEE',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'right',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['bubble', 'grab'],
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 4,
        duration: 5,
        opacity: 1,
        speed: 0.1,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
watch(isDark, (value) => {
  if (value) {
    options.value.background.color.value = '#1F2937';
    options.value.particles.line_linked.color = '#C0FFEE';
  } else {
    options.value.background.color.value = '#FFFFFF';
    options.value.particles.line_linked.color = '#000000';
  }
  key.value++;
});
const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
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
