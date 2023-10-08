import { Router } from 'express';

const router = Router();

router.get('/getSimpleResponse', (req, res) => {
  res.send({ data: 'Hello there' });
});

router.get('/getResponseWithParameter/:name', (req, res) => {
  const { name } = req.params;
  res.send({
    data: {
      message: `Hello there ${name}`,
      params: req.params,

    },
  });
});

router.post('/simplePostEndpoint', (req, res) => {
  res.send({ data: req.body });
});

export default router;
