import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default appointmentsRouter;
