import jwt from 'jsonwebtoken';

export const generateJWT = ({
    _id,
    nombre,
    email,
    unidad,
    profesion,
    telefono,
    extension,
    rol,
}) => jwt.sign({
    id: _id,
    nombre,
    email,
    unidad,
    profesion,
    telefono,
    extension,
    rol,
},
    process.env.JWT_SECRET,
    {
        expiresIn: "30d"
    });
