import express from 'express';
import cors from 'cors';
import becasRoutes from './routes/becas.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api', becasRoutes);

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

export { app, PORT };