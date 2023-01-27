import { defineStore } from 'pinia';
import router from '@/router/index';

interface DialogState {
  dialog: boolean;
  toolId: string;
}
const dialoglStore = defineStore({
  // The id here must be a unique ID
  id: 'dialog',
  state: (): DialogState => ({
    dialog: false,
    toolId: '',
  }),
  // Equivalent to vuex's getter
  getters: {
    getDialog: (state) => state.dialog,
    getToolId: (state) => state.toolId,
  },
  // pinia dropped mutations and only used actions
  actions: {
    // Actions can be made asynchronous with async
    openDialog(objectId: string) {
      this.toolId = objectId;
      this.dialog = true;
    },
    closeDialog() {
      this.toolId = '';
      this.dialog = false;
    },
  },
});

export default dialoglStore;
