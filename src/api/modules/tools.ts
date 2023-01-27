import service from '@/api/http';

const ToolsApi = {
  getTools: () => service.get(`/tools`),
  createTool: (tool?: object) => service.post(`/tools`, tool),
  getTool: (id?: string) => service.get(`/tools/${id}`),
  editTool: (tool?: object, id?: string) => service.patch(`/tools/${id}`, tool),
  deleteTool: (id?: string) => service.delete(`/tools/${id}`),
};

export default ToolsApi;
