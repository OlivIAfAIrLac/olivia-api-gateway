import { Router } from 'express';
import {
    createExpediente,
    updateExpediente,
    deleteExpediente,
    getAllExpediente,
    getExpedienteById,
} from '../controllers/expediente.controller';

/* INIT */
const router = Router();

// api/expediente
router.get('/', getAllExpediente);
router.get('/:id', getExpedienteById);
router.post('/', createExpediente);

// api/expediente/:id
router.put('/:id', updateExpediente);
router.delete('/:id', deleteExpediente);




export default router;