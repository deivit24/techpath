import { defineStore } from 'pinia';
import router from '@/router/index';
import { Tool } from '@/types';
type Nullable<T> = T | null;
interface ToolState {
  tools: Nullable<Array<Tool>>;
}
const toolStore = defineStore({
  // The id here must be a unique ID
  id: 'tool',
  state: (): ToolState => ({
    tools: null,
  }),
  // Equivalent to vuex's getter
  getters: {
    getTools: (state) => state.tools,
  },
  // pinia dropped mutations and only used actions
  actions: {
    // Actions can be made asynchronous with async
    saveTools(tools: Array<Tool>) {
      this.tools = tools;
      router.push('/login');
    },
  },
});

export default toolStore;
