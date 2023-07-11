import { model, Schema } from 'mongoose';

const audioSchema = new Schema({
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

export const Audio = model('Audio', audioSchema);


