import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';

// Create our Express application
const app = express();

// Log requests to the console
app.use(morgan('dev'));
// Parse incoming requests data
app.use(express.json());

app.use("/api",authRoutes);

// Export our app for run in index.js
export default app;
