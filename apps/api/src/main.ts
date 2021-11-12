/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
 import { getAllContracts, getContract } from './app/contracts.repository';

import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/contracts', (req, res) => {
  res.send(getAllContracts());
});

app.get('/api/contracts/:id', (req, res) => {
  return res.send(getContract(req.params.id));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
