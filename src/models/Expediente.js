import { model, Schema } from 'mongoose';

const expedienteSchema = new Schema({
    folio: {
        type: Number,
        unique: true,
    },
    nombre: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        required: true
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

export const Expediente = model('Expediente', expedienteSchema);


