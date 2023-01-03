import { defineStore } from 'pinia';

const theme = defineStore({
  // The id here must be a unique ID
  id: 'theme',
  state: () => {
    return {
      themeType: 'bright blue',
      themeColor: '#2080F0FF',
    };
  },
  // Equivalent to vuex's getter
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },
  // pinia dropped mutations and only used actions
  actions: {
    // Actions can be made asynchronous with async
    setThemeType(type: string) {
      this.themeType = type;
    },
  },
});

export default theme;
