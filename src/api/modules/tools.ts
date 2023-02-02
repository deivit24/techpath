import service from '@/api/http';

const ToolsApi = {
  createTool: (tool?: object) => service.post(`/tools`, tool),
  getTools: () => service.get(`/tools`),
  createUserTool: (tool?: object, id?: string) => service.post(`/tools/${id}/user`, tool),
  getTool: (id?: string) => service.get(`/tools/${id}`),
  editTool: (tool?: object, id?: string) => service.patch(`/tools/${id}`, tool),
  deleteTool: (id?: string) => service.delete(`/tools/${id}`),
  getUserTool: (id?: string) => service.get(`/tools/${id}/user`),
  getUserTools: (tool?: object) => service.get(`/tools/user`),
};

export default ToolsApi;
