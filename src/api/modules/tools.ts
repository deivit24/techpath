import service from '@/api/http';

const ToolsApi = {
  getUserTools: () => service.get(`/tools`),
  createTool: (tool?: object) => service.post(`/tools`, tool),
};

export default ToolsApi;
