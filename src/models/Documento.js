import { model, Schema } from 'mongoose';

const documentoSchema = new Schema({
    descripcion: {
        type: String,
    },
    url: {
        type: String,
        required: true
    },
    expediente: {
        type: Schema.ObjectId,
        ref: "Expediente"
    },
}, { timestamps: true });

export const Documento = model('Documento', documentoSchema);


