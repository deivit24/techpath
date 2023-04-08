import service from '@/api/http';

const CareerApi = {
  getCareerMetrics: () => service.get(`/career`),
};

export default CareerApi;
