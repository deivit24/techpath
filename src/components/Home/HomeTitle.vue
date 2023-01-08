<template>
  <div style="height: 100vh" class="flex flex-col justify-center">
    <div class="mb-3 text-left">
      <h1 class="font-serif font-extralight" style="font-size: 50px; line-height: 100%; z-index: 100">
        {{ t('find out') }}
      </h1>
      <h1 class="font-serif font-light" style="font-size: 70px; line-height: 100%">{{ t('true worth') }}</h1>
      <h1 class="font-serif font-bold" style="font-size: 90px; line-height: 100%">{{ t('based on') }}</h1>
      <h1 class="font-serif font-bold" style="font-size: 110px; line-height: 100%">{{ t('experience') }}</h1>
      <hr class="item-appear" />
      <p class="font-serif text-2xl">
        {{ t('sub title') }}
      </p>
      <el-row class="text-center justify-center mt-4 pr-10">
        <span @click="$emit('scroll')" class="text-2xl font-bold py-2 hover:text-light-50 hover:cursor-pointer">
          Use Tool
        </span>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style>
.item-appear {
  border: none;
  height: 2px;
  width: 300px;
  margin: 30px 0 25px;
  background: #c0ffee;
  background: linear-gradient(90deg, #c0ffee 0, #ffb22d 19%, #f7df00 37%, #c0ffee 56%, #ffb22d 76%, #f7df00);
}
</style>
