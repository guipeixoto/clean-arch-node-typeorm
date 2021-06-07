import { Router } from 'express';
import { makeUsersEndpoint } from '@/main/factories';

export default (router: Router): void => {
  router.get('/users', async (request, response) => {
    const endpoint = makeUsersEndpoint();
    const httpResponse = await endpoint.findAll();

    return response.status(httpResponse.statusCode).json(httpResponse.data);
  });

  router.post('/users', async (request, response) => {
    const endpoint = makeUsersEndpoint();
    const httpResponse = await endpoint.save({
      name: request.body.name,
      email: request.body.email,
      bornAt: request.body.bornAt,
    });

    return response.status(httpResponse.statusCode).json(httpResponse.data);
  });
};
