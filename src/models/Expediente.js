import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const CounterSchema = Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
const counter = model('counter', CounterSchema);

const expedienteSchema = new Schema({
    folio: {
        type: String,
    },
    nombre: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        required: true
    },
    audio_procesado: {
        type: Boolean,
        default: false
    },
    error_audio: {
        type: String
    },
    transcripcion: {
        type: String,
    }
}, {
    timestamps: true
});

expedienteSchema.pre('save', async function (next) {
    let expediente = this;
    const res = await counter.findByIdAndUpdate(
        { _id: 'autoval' },
        { $inc: { seq: 1 } },
        { new: true }
    );
    if (res === null) {
        const newValue = new counter({ _id: 'autoval', seq: 1 })
        await newValue.save()
        expediente.folio = newValue.seq;
    } else {
        expediente.folio = res.seq;
    }
    next();
});

expedienteSchema.plugin(mongoosePaginate)

export const Expediente = model('Expediente', expedienteSchema);


