import cors from 'cors';
import express, { json } from 'express';
import fileUpload from 'express-fileupload'
import morgan from "morgan";
import documentoRoutes from "./routes/documento.routes";
import expedienteRoutes from "./routes/expediente.routes";
import cedulaRoutes from "./routes/cedula.routes";
import usuarioRoutes from "./routes/usuarios.routes";
import audioRoutes from "./routes/audio.routes";
import { checkAuth } from './middleware/checkAuth';
import { authUser } from './controllers/usuarios.controller';
import { getAllCedula } from './controllers/cedula.controller';

/* INIT */
const app = express();

/* SETUP MIDDLEWARES */
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))
app.use(morgan("dev"));
app.use(json());
app.use(cors());

/* IMPORT ROUTES */
app.use('/api/login', authUser);
app.use('/api/usuario', checkAuth, usuarioRoutes);
app.use('/api/expediente', checkAuth, expedienteRoutes);
app.use('/api/cedula', checkAuth, cedulaRoutes);
app.use('/api/sabana', checkAuth, getAllCedula);
app.use('/api/documento', checkAuth, documentoRoutes);
app.use('/api/audio', checkAuth, audioRoutes);


/* kill DEV -ENV */
process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});

export default app;