import { model, Schema } from 'mongoose';

const documentoSchema = new Schema({
    descripcion: {
        type: String,
    },
    url: {
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

export const Documento = model('Documento', documentoSchema);


