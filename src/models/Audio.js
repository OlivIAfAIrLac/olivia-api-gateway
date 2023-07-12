import { model, Schema } from 'mongoose';

const audioSchema = new Schema({
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
}, { timestamps: true }
);

export const Audio = model('Audio', audioSchema);


