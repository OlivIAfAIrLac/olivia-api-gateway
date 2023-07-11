// import { readLastClave } from "../helpers/helpers";
import { Usuarios } from "../models/Usuarios";



export const createUsuario = async (req, res, next) => {
    try {
        /* TODO: Add bcrypt */
        const usuario = new Usuarios(req.body);
        await usuario.save();
        res.status(200).send(usuario)

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getAllUsuarios = async (req, res, next) => {
    try {

        const usuario = await Usuarios.find()

        usuario ?
            res.send(usuario.map(item => formatResponseUser(item)))
            : res.send({ msg: "No se encontró ningún producto" });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

export const getUsuarioById = async (req, res, next) => {
    try {

        const { id } = req.params;
        console.log(`ID ${id}`);
        const usuario = await Usuarios.findOne({ _id: id })
        usuario ? res.send(formatResponseUser(usuario)) : res.send({ msg: "No se encontró ningún usuario" });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

export const deleteUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`ID ${id}`);

        const countDeleted = await Usuarios.deleteOne({ _id: id })

        countDeleted.deletedCount === 1 ?
            res.send({ msg: "Usuario eliminado", count: countDeleted })
            :
            res.send({ msg: "No se eliminó ningún Usuario" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors)
    }
}

export const updateUsuario = async (req, res, next) => {
    try {
        const { id } = req.params
        /* TODO: Add bcrypt */
        const {
            nombre,
            email,
            password,
            unidad,
            profesion,
            telefono,
            extension,
            rol,
            activo,
        } = req.body;
        
        const usuario = await Usuarios.updateOne({ _id: id }, {
            $set: {
                nombre,
                email,
                password,
                unidad,
                profesion,
                telefono,
                extension,
                rol,
                activo,
                updatedAt: new Date()
            }
        });

        usuario.matchedCount === 1 ?
            res.send({ msg: "Usuario actualizado", usuario: usuario })
            :
            res.status(304).send({ msg: "Usuario no se pudo actualizar", usuario: usuario })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

const formatResponseUser = (usuario) => ({
    nombre: usuario.nombre,
    email: usuario.email,
    unidad: usuario.unidad,
    profesion: usuario.profesion,
    telefono: usuario.telefono,
    extension: usuario.extension,
    rol: usuario.rol,
    activo: usuario.activo,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt,
})


