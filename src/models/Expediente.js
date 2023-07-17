import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

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

expedienteSchema.plugin(mongoosePaginate)

export const Expediente = model('Expediente', expedienteSchema);


