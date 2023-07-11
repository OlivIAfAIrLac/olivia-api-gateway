import { Router } from "express";
import {
    createUsuario,
    deleteUsuario,
    getUsuarioById,
    getAllUsuarios,
    updateUsuario,
    authUser
} from "../controllers/usuarios.controller";

const router = Router();

// api/productos/last_clave

// api/productos
router.get('/', getAllUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);

// api/productos/:id
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

/* AUTH */
router.post('/login', authUser);


export default router;