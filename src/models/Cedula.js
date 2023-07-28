import { model, Schema } from 'mongoose';
import {
    area_que_atiende,
    genero,
    I_emergencia_cual,
    I_requerimiento_cual,
    modalidad_asesora,
    sexo
} from '../helpers/catalogos';

const cedulaSchema = new Schema({
    expediente: {
        type: Schema.ObjectId,
        ref: "Expediente"
    },
    /* Datos de identificación del expediente */
    fecha: {
        type: String,
    },
    hora_de_inicio: {
        type: String,
    },
    no_de_expediente: {
        type: String,
    },
    area_que_atiende: {
        type: String,
        enum: area_que_atiende
    },
    modalidad_de_asesoria: {
        type: String,
        enum: modalidad_asesora
    },
    institucion_que_atiende: {
        type: String,
    },
    nombres_de_las_personas_que_atienden: {
        type: String,
    },
    numero_de_expediente_banavim: {
        type: String,
    },
    horario_de_termino_de_atencion: {
        type: String,
    },
    /* I. Requerimientos específicos */
    I_la_persona_presenta_alguna_enfermedad_y_o_lesion_que_requiera_ser_atendida_con_inmediatez: {
        type: Boolean,
    },
    I_especificar_cual_en_caso_afirmativo: {
        type: String,
    },
    I_existe_algun_requerimiento_especifico: {
        type: Boolean,
    },
    I_requerimiento_cual: {
        type: String,
        enum: I_requerimiento_cual
    },
    I_presenta_alguna_emergencia: {
        type: Boolean,
    },
    I_emergencia_cual: {
        type: String,
        enum: I_emergencia_cual
    },
    I_especificar: {
        type: String,
    },
    I_esta_en_periodo_de_gestacion: {
        type: Boolean,
    },
    I_cuantos_meses: {
        type: Number,
    },
    /* II. INFORMACIóN GENERAL Y DE CONTACTO */
    II_curp: {
        type: String,
    },
    II_pseudonimo: {
        type: String,

    },
    II_nombre: {
        type: String,

    },
    II_primer_apellido: {
        type: String,

    },
    II_segundo_apellido: {
        type: String,

    },
    II_genero: {
        type: String,
        enum: genero
    },
    II_genero_especificar: {
        type: String,

    },
    II_sexo: {
        type: String,
        enum: sexo
    },
    II_fecha_de_nacimiento: {
        type: String,

    },
    II_nacionalidad: {
        type: String,

    },
    II_lugar_de_nacimiento: {
        type: String,

    },
    II_entidad_federativa_donde_reside_actualmente: {
        type: String,

    },
    II_telefono_fijo_casa: {
        type: String,

    },
    II_celular: {
        type: String,

    },
    II_otro: {
        type: String,

    },
    II_especificar: {
        type: String,

    },
    II_autoriza_dar_seguimiento_via_whatsapp: {
        type: Boolean,

    },
    II_motivo: {
        type: String,

    },
    II_autoriza_dar_seguimiento_via_telefonica: {
        type: Boolean,

    },
    II_motivo: {
        type: String,

    },
    II_correo_electronico: {
        type: String,

    },
    II_direccion_direccion: {
        type: String,

    },
    II_direccion_calle: {
        type: String,

    },
    II_direccion_numero_exterior: {
        type: String,

    },
    II_direccion_numero_interior: {
        type: String,

    },
    II_direccion_letra_exterior: {
        type: String,

    },
    II_direccion_letra_interior: {
        type: String,

    },
    II_direccion_c_p: {
        type: String,

    },
    II_direccion_cruce: {
        type: String,

    },
    II_direccion_cruce: {
        type: String,

    },
    II_direccion_referencia: {
        type: String,

    },
    II_direccion_estado: {
        type: String,

    },
    II_direccion_municipio: {
        type: String,

    },
    II_direccion_colonia_localidad: {
        type: String,

    },
    II_direccion_eventual_calle: {
        type: String,

    },
    II_direccion_eventual_numero_exterior: {
        type: String,

    },
    II_direccion_eventual_numero_interior: {
        type: String,

    },
    II_direccion_eventual_letra_exterior: {
        type: String,

    },
    II_direccion_eventual_letra_interior: {
        type: String,

    },
    II_direccion_eventual_c_p: {
        type: String,

    },
    II_direccion_eventual_cruce: {
        type: String,

    },
    II_direccion_eventual_cruce: {
        type: String,

    },
    II_direccion_eventual_referencia: {
        type: String,

    },
    II_direccion_eventual_estado: {
        type: String,

    },
    II_direccion_eventual_municipio: {
        type: String,

    },
    II_direccion_eventual_colonia_localidad: {
        type: String,

    },
    /* III. INFORMACIoN SOCIODEMOGRaFICA */

}, { timestamps: true });

export const Cedula = model('Cedula', cedulaSchema);


