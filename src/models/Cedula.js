import { model, Schema } from 'mongoose';

const cedulaSchema = new Schema({
    expediente: {
        type: Schema.ObjectId,
        ref: "Expediente"
    },
}, { timestamps: true });

export const Cedula = model('Cedula', cedulaSchema);


