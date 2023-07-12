import { Router } from 'express';
import {
    createDocumento,
    deleteDocumento,
    getAllDocumento,
    getDocumentoById,
    updateDocumento,
} from '../controllers/dcoumento.controller';

/* INIT */
const router = Router();

// api/Documento
router.get('/', getAllDocumento);
router.get('/:id', getDocumentoById);
router.post('/', createDocumento);

// api/Documento/:id
router.put('/:id', updateDocumento);
router.delete('/:id', deleteDocumento);




export default router;