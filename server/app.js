import express from 'express';
import morgan from 'morgan';

// Create our Express application
const app = express();

// Log requests to the console
app.use(morgan('dev'));
// Export our app for run in index.js
export default app;
