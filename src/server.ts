import "reflect-metadata";
import './database';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log('Back-end is running on port 3001...'));