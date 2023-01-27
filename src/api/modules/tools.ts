import service from '@/api/http';

const ToolsApi = {
  getTools: () => service.get(`/tools`),
  createTool: (tool?: object) => service.post(`/tools`, tool),
  getTool: (id?: string) => service.get(`/tools/${id}`),
  editTool: (tool?: object, id?: string) => service.patch(`/tools/${id}`, tool),
};

export default ToolsApi;
