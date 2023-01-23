import service from '@/api/http';

const ToolsApi = {
  getTools: () => service.get(`/tools`),
  createTool: (tool?: object) => service.post(`/tools`, tool),
};

export default ToolsApi;
