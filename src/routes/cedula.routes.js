import { Router } from 'express';
import { updateCedula } from '../controllers/cedula.controller';

/* INIT */
const router = Router();

// api/Documento
// router.get('/', getAllDocumento);
// router.get('/:id', getDocumentoById);
// router.post('/', createDocumento);

// api/Documento/:id
router.patch('/:id', updateCedula);
// router.delete('/:id', deleteDocumento);




export default router;