
import { OrderController } from '../Controller';

const routes = (app) => {
  app.get('/api/v1/orders', OrderController.getAllOrders);
  app.post('/api/v1/orders', OrderController.createOrder);
  app.get('/api/v1/orders/:orderId', OrderController.getAnOrder);
  app.put('/api/v1/orders/:orderId', OrderController.updateOrderStatus);
};

export default routes;
