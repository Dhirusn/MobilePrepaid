import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import connectDB from './config/db.js';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swaggerConfig.js';

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import reloadlyRoutes from './routes/reloadly.js';
import topupRoutes from './routes/topup.js';
import transferRoutes from './routes/transfer.js';

connectDB();

const app = express();
// Enable CORS for all origins (or restrict it to client URL)
app.use(cors({
    origin: '*', // or specify your frontend origin like 'http://localhost:3000'
    credentials: true
}));

app.use(express.json());

// Swagger API Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your existing routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reloadly', reloadlyRoutes);
app.use('/api/topup', topupRoutes);
app.use('/api/transferRoutes', transferRoutes);


app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000\n📘 Docs: http://localhost:5000/api-docs'));
