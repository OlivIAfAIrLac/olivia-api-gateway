import { Router } from 'express';
import {
    createAudio,
    deleteAudio,
} from '../controllers/audio.controller';

/* INIT */
const router = Router();

// api/Documento
// router.get('/', getAllDocumento);
// router.get('/:id', getDocumentoById);
router.post('/', createAudio);

// api/Documento/:id
// router.put('/:id', updateDocumento);
router.delete('/:id', deleteAudio);




export default router;