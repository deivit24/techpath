import service from '@/api/http';

const ToolsApi = {
  getUserTools: () => service.get(`/tools`),
};

export default ToolsApi;
