// import { readLastClave } from "../helpers/helpers";
import { Usuarios } from "../models/Usuarios";
import { generateID } from '../helpers/getUniqueToken';
import { generateJWT } from "../helpers/getJWT";


export const authUser = async (req, res, next) => {
    try {
        /* check usre exist */
        const {
            email,
            password
        } = req.body;

        const usuario = await Usuarios.findOne({ email });
        /* check user exist, is active */
        (!usuario || !usuario.activo) && res.status(404).send({ msg: "No se encontró ningún usuario" });
        /* check correct password */
        (await usuario.checkPass(password))
            ? res.status(200).send(
                {
                    ...formatResponseUser(usuario),
                    token: generateJWT(usuario)
                })
            : res.status(403).send({ msg: "Usuario o contraseña incorrectos" });



        /* check user pass */
    } catch (error) {
        // console.error(error);
        res.status(500)
    }
}

export const createUsuario = async (req, res, next) => {
    try {
        /* TODO: Add bcrypt */
        const usuario = new Usuarios(req.body);
        usuario.token = generateID();
        await usuario.save();
        const {
            _id,
            nombre,
            email,
            token,
            unidad,
            profesion,
            telefono,
            extension,
            rol,
            activo
        } = usuario

        const response = {
            _id,
            nombre,
            email,
            token,
            unidad,
            profesion,
            telefono,
            extension,
            rol,
            activo,
        }
        res.status(200).send(response)

    } catch (error) {
        console.error(error);
        res.status(500)
    }
}

export const getAllUsuarios = async (req, res, next) => {
    try {
        const { search } = req.query;
        const query = {
            nombre: {
                $regex: new RegExp(search), $options: "i"
            }
        }
        const usuario = await Usuarios.find(query)

        usuario ?
            res.send(usuario.map(item => formatResponseUser(item)))
            : res.send({ msg: "No se encontró ningún producto" });
    } catch (error) {
        console.error(error);
        res.status(500)
    }
}

export const getUsuarioById = async (req, res, next) => {
    try {

        const { id } = req.params;

        const usuario = await Usuarios.findOne({ _id: id })
        usuario ? res.send(formatResponseUser(usuario)) : res.status(404).send({ msg: "No se encontró ningún usuario" });
    } catch (error) {
        console.error(error);
        res.status(500)
    }
}

export const deleteUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;


        const countDeleted = await Usuarios.deleteOne({ _id: id })

        countDeleted.deletedCount === 1 ?
            res.send({ msg: "Usuario eliminado", count: countDeleted })
            :
            res.status(304).send({ msg: "No se eliminó ningún Usuario" });

    } catch (error) {
        console.error(error);
        res.status(500)
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
        res.status(500)
    }
}

const formatResponseUser = (usuario) => ({
    _id: usuario._id,
    nombre: usuario.nombre,
    email: usuario.email,
    unidad: usuario.unidad,
    profesion: usuario.profesion,
    token: usuario.token,
    telefono: usuario.telefono,
    extension: usuario.extension,
    rol: usuario.rol,
    activo: usuario.activo,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt,
})


