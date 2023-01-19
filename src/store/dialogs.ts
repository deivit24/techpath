import { defineStore } from 'pinia';
import router from '@/router/index';

interface DialogState {
  dialog: boolean;
}
const dialoglStore = defineStore({
  // The id here must be a unique ID
  id: 'dialog',
  state: (): DialogState => ({
    dialog: false,
  }),
  // Equivalent to vuex's getter
  getters: {
    getDialog: (state) => state.dialog,
  },
  // pinia dropped mutations and only used actions
  actions: {
    // Actions can be made asynchronous with async
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
});

export default dialoglStore;
