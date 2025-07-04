import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger/swagger.js';

const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
