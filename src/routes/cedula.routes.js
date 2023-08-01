import { Router } from 'express';
import {
    getAllCedula,
    getCedulaById,
    updateCedula
} from '../controllers/cedula.controller';

/* INIT */
const router = Router();

// api/
// router.get('/', getAllCedula);
router.get('/:id', getCedulaById);
// router.post('/', create);

// api//:id
router.patch('/:id', updateCedula);
// router.delete('/:id', delete);




export default router;