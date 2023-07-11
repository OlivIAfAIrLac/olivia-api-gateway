import { model, Schema } from 'mongoose';

const expedienteSchema = new Schema({
    folio: {
        type: Number,
    },
    nombre: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Expediente = model('Expediente', expedienteSchema);


