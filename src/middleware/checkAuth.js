import jwt from 'jsonwebtoken'
import { Usuarios } from '../models/Usuarios';


export const checkAuth = async (req, res, next) => {
    try {
        if (req.headers.authorization.startsWith('Bearer')) {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const {
                nombre,
                email,
                unidad,
                profesion,
                telefono,
                extension,
                rol,
                activo
            } = await Usuarios.findById({ _id: decoded.id });
            /* No active */
            if (!activo) {
                throw Error("")
            }
            req.usuario = {
                nombre,
                email,
                unidad,
                profesion,
                telefono,
                extension,
                rol,
                activo
            }
            console.log(req.usuario);

            next();
        }
    } catch (error) {
        return res.status(401).send({ msg: "usuario no autorizado" })
    }
}