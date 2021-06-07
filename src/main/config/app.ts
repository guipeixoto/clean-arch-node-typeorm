import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';

import '@/infra/providers/database/typeorm';

import { setupRoutes } from '@/main/config/routes';

const app = express();
app.use(express.json());
setupRoutes(app);

export default app;
