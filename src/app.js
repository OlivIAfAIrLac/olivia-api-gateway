import cors from 'cors';
import express, { json } from 'express';
import morgan from "morgan";
import usuarioRoutes from "./routes/usuarios.routes";
import expedienteRoutes from "./routes/expediente.routes";

/* INIT */
const app = express();

/* SETUP MIDDLEWARES */
app.use(morgan("dev"));
app.use(json());
app.use(cors());

/* IMPORT ROUTES */
app.use('/api/usuario', usuarioRoutes);
app.use('/api/expediente', expedienteRoutes);


/* kill DEV -ENV */
process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});

export default app;