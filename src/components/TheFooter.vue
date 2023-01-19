<template>
  <el-menu
    default-active="/"
    style="border-right: none"
    class="fixed top-0 left-0 h-1/1"
    :collapse="true"
    :router="true"
  >
    <el-menu-item index="/">
      <i-carbon:home class="icon-footer" />
      <template #title>{{ t('home') }}</template>
    </el-menu-item>
    <el-menu-item v-if="isAuth" index="/dashboard">
      <i-carbon:dashboard class="icon-footer" />
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item v-if="!isAuth" index="/login">
      <i-carbon:login class="icon-footer" />
      <template #title>{{ t('login') }}</template>
    </el-menu-item>
  </el-menu>
  <div class="row-auto fixed top-5 right-0">
    <el-tooltip content="Create Tool" placement="bottom">
      <button class="icon-btn mx-2 !outline-none" @click="openCreateDialog">
        <i-carbon:code v-if="isAdmin" class="icon-footer" />
      </button>
    </el-tooltip>
    <el-tooltip :content="isDark ? t('change light') : t('change dark')" placement="bottom">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-carbon:moon v-if="isDark" class="icon-footer" />
        <i-carbon:sun v-else class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="t('change lang')" placement="bottom">
      <button class="icon-btn mx-2" @click="toggleLocales()">
        <i-carbon:language class="icon-footer" />
      </button>
    </el-tooltip>
    <el-tooltip v-if="isAuth" :content="t('logout')" placement="bottom">
      <button class="icon-btn mx-2" @click="logout">
        <i-carbon:exit class="icon-footer" />
      </button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/utils/dark';
import authStore from '@/store/auth';
import dialoglStore from '@/store/dialogs';
const activeIndex = ref('1');
const auth = authStore();
const dialog = dialoglStore();
const isAuth = computed(() => {
  return auth.getUser;
});

const isAdmin = computed(() => {
  return auth.getUser?.role == 'admin';
});
const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
const openCreateDialog = () => {
  dialog.openDialog();
};
const logout = () => {
  auth.logout();
};
</script>

<style lang="scss">
.icon-footer {
  font-size: 1.3em;
}
</style>
