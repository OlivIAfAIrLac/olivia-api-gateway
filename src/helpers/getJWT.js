import jwt from 'jsonwebtoken';

export const generateJWT = ({
    nombre,
    email,
    unidad,
    profesion,
    telefono,
    extension,
    rol,
}) => jwt.sign({
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
