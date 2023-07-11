import { Router } from 'express';
import {
    
} from '../controllers/expediente.controller';

/* INIT */
const router = Router();


// api/expediente/last_clave
router.get('/last_clave', getLastClave);

// api/expediente
router.get('/', getExpediente);
router.post('/', createExpediente);

// api/expediente/:id
router.put('/:id', updateExpediente);
router.delete('/:id', deleteExpediente);




export default router;