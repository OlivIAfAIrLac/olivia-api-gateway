import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';


const usuariosSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String,
        required: true,
        trim: true,
    },
    unidad: {
        type: String,
        trim: true,
    },
    profesion: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
    extension: {
        type: String,
        trim: true,
    },
    rol: {
        type: String,
        required: true,
        trim: true,
        enum: ["admin", "user", "super_admin"]
    },
    activo: {
        type: Boolean,
        required: true,
        trim: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    },
}
);

/* Hash passwords */
usuariosSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

/* check password */
usuariosSchema.methods.checkPass = async function (passwordForm) {
    return await bcrypt.compare(passwordForm, this.password)
}

export const Usuarios = model('Usuarios', usuariosSchema);


