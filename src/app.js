import cors from 'cors';
import express, { json } from 'express';
import morgan from "morgan";
import documentoRoutes from "./routes/documento.routes";
import expedienteRoutes from "./routes/expediente.routes";
import usuarioRoutes from "./routes/usuarios.routes";
import { checkAuth } from './middleware/checkAuth';
import { authUser } from './controllers/usuarios.controller';

/* INIT */
const app = express();

/* SETUP MIDDLEWARES */
app.use(morgan("dev"));
app.use(json());
app.use(cors());

/* IMPORT ROUTES */
app.use('/api/login', authUser);
app.use('/api/usuario', checkAuth, usuarioRoutes);
app.use('/api/expediente', checkAuth, expedienteRoutes);
app.use('/api/documento', checkAuth, documentoRoutes);


/* kill DEV -ENV */
process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});

export default app;