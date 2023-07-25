import { model, Schema } from 'mongoose';

const documentoSchema = new Schema({
    descripcion: {
        type: String,
    },
    expediente: {
        type: Schema.ObjectId,
        ref: "Expediente"
    },
}, { timestamps: true });

export const Documento = model('Documento', documentoSchema);


