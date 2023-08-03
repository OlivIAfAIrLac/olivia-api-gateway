import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

import {
    area_que_atiende,
    color_ojos,
    comparte_vivienda,
    complexion,
    discapacidad,
    emergencia,
    escolaridad,
    estado_fisico,
    estatus_escolaridad,
    forma_cabello,
    forma_ojos,
    frecuencia_violencia,
    genero,
    labios,
    modalidad_asesora,
    nariz,
    ocupacion,
    parentesco,
    regimen_matrimonial,
    requerimiento_especifico,
    seguridad_social,
    sexo,
    situacion_conyugal,
    tamanio_de_cabello,
    tamanio_ojos,
    tez,
    tipo_de_droga,
    tipo_de_vivienda,
    turno
} from '../helpers/catalogos';

const HijesSchema = new Schema({
    III_nombre_completo_de_sus_hijes: {
        type: String
    },
    III_especificar_sexo: {
        type: String,
        enum: sexo
    },
    III_edad_anios_cumplidos: {
        type: String
    },
    III_escolaridad_hijes: {
        type: String,
        enum: escolaridad
    },
});

const HabitantesSchema = new Schema({
    III_parentesco_habitante: {
        type: String,
        enum: parentesco
    },
    III_especificar_habitante: {
        type: String
    },
    III_sexo_habitante: {
        type: String,
        enum: sexo
    },
    III_genero_habitante: {
        type: String,
        enum: genero
    },
    III_edad_habitante: {
        type: String
    },
    III_tiene_alguna_discapacidad_habitante: {
        type: Boolean
    },
    III_es_dependiente_economico_de_quien_solicita_la_atencion: {
        type: Boolean
    },
    III_es_dependiente_de_cuidados_de_quien_solicita_la_atencion: {
        type: Boolean
    },
})

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
    area_que_atiende: [
        {
            type: String,
            enum: area_que_atiende
        }
    ],
    especificar: {
        type: String
    },
    modalidad_de_asesoria: {
        type: String,
        enum: modalidad_asesora
    },
    modalidad_especificar: {
        type: String
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
        enum: requerimiento_especifico
    },
    I_presenta_alguna_emergencia: {
        type: Boolean,
    },
    I_emergencia_cual: {
        type: String,
        enum: emergencia
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
    II_motivo_whatsapp: {
        type: String,
    },
    II_autoriza_dar_seguimiento_via_telefonica: {
        type: Boolean,

    },
    II_motivo_telefonica: {
        type: String,

    },
    II_correo_electronico: {
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
    II_direccion_cp: {
        type: String,

    },
    II_direccion_cruce1: {
        type: String,

    },
    II_direccion_cruce2: {
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
    II_direccion_eventual_cp: {
        type: String,

    },
    II_direccion_eventual_cruce1: {
        type: String,

    },
    II_direccion_eventual_cruce2: {
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
    III_escolaridad: {
        type: String,
        enum: escolaridad
    },
    III_su_escolaridad_esta_en: {
        type: String,
        enum: estatus_escolaridad
    },
    III_sabe_leer_y_escribir: {
        type: Boolean
    },
    III_tiene_seguridad_social: {
        type: Boolean
    },
    III_cual_seguridad_social: {
        type: String,
        enum: seguridad_social
    },
    III_ocupacion_de_la_persona: {
        type: String,
        enum: ocupacion
    },
    III_especificar_ocupacion_de_la_persona: {
        type: String
    },
    III_situacion_conyugal: {
        type: String,
        enum: situacion_conyugal
    },
    III_regimen_matrimonial: {
        type: String,
        enum: regimen_matrimonial
    },
    III_tipo_de_vivienda: {
        type: String,
        enum: tipo_de_vivienda
    },
    III_especificar_tipo_de_vivienda: {
        type: String
    },
    /* MULTI */
    III_compartida_con_otras_personas: {
        type: String,
        enum: comparte_vivienda
    },
    III_cuantas_personas_habitan_en_su_vivienda: {
        type: String
    },
    III_parentesco_habitante: {
        type: String,
        enum: parentesco
    },
    III_especificar_habitante: {
        type: String
    },
    III_sexo_habitante: {
        type: String,
        enum: sexo
    },
    III_genero_habitante: {
        type: String,
        enum: genero
    },
    III_genero_habitante_especificar: {
        type: String
    },
    III_edad_habitante: {
        type: String
    },
    III_tiene_alguna_discapacidad_habitante: {
        type: Boolean
    },
    III_es_dependiente_economico_de_quien_solicita_la_atencion: {
        type: Boolean
    },
    III_es_dependiente_de_cuidados_de_quien_solicita_la_atencion: {
        type: Boolean
    },
    III_compartida_especificar: {
        type: String
    },
    III_tiene_hijas_hijos_o_hijes: {
        type: Boolean
    },
    III_cuantos_hijes_tiene: {
        type: String
    },
    /* MULTI HIJES */
    III_nombre_completo_de_sus_hijes: {
        type: String
    },
    III_sexo: {
        type: String,
        enum: sexo
    },
    III_especificar_sexo: {
        type: String
    },
    III_edad_anios_cumplidos: {
        type: String
    },
    III_escolaridad_hijes: {
        type: String,
        enum: escolaridad
    },
    III_quien_aporta_el_mayor_ingreso_dentro_del_hogar: {
        type: String
    },
    III_quien_aporta_el_mayor_porcentaje_de_ingresos_para_la_victima: {
        type: String
    },
    III_quien_aporta_el_mayor_ingreso_para_sus_hijes: {
        type: String
    },
    III_cuanto: {
        type: String
    },
    III_calle_empleo: {
        type: String
    },
    III_numero_exterior_empleo: {
        type: String
    },
    III_numero_interior_empleo: {
        type: String
    },
    III_letra_exterior_empleo: {
        type: String
    },
    III_letra_interior_empleo: {
        type: String
    },
    III_cp_empleo: {
        type: String
    },
    III_cruce1_empleo: {
        type: String
    },
    III_cruce2_empleo: {
        type: String
    },
    III_referencia_empleo: {
        type: String
    },
    III_estado_empleo: {
        type: String
    },
    III_municipio_empleo: {
        type: String
    },
    III_colonia_localidad_empleo: {
        type: String
    },
    III_que_dias_de_la_semana_trabaja: {
        type: String
    },
    III_turno: {
        type: String,
        enum: turno
    },
    III_monto_de_ingreso_mensual_de_su_empleo_principal: {
        type: String
    },
    III_pertenece_a_un_grupo_originario_o_indigena: {
        type: Boolean
    },
    III_pertenece_a_un_grupo_originario_o_indigena_especiificar: {
        type: String
    },
    III_es_una_persona_migrante_transmigrante: {
        type: Boolean
    },
    III_es_una_persona_en_situacion_de_calle: {
        type: Boolean
    },
    III_pertenece_a_la_comunidad_lgbtttiq: {
        type: Boolean
    },
    III_pertenece_a_la_comunidad_lgbtttiq_especificar: {
        type: String
    },
    III_tiene_alguna_discapacidad: {
        type: Boolean
    },
    III_discapacidad: {
        type: String,
        enum: discapacidad
    },
    III_especificar_discapacidad: {
        type: String,
    },
    III_vive_violencia_por_presentar_discapacidad: {
        type: Boolean
    },
    III_especificar_violencia: {
        type: String
    },
    III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia: {
        type: Boolean
    },
    III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia_especificar: {
        type: String
    },
    III_tiene_alguna_enfermedad_cronica_degenerativa_que_limite_o_imposibilite_sus_actividades: {
        type: Boolean
    },
    III_especificar_enfermedad_cronica: {
        type: String
    },
    III_consumo_de_drogas: {
        type: Boolean
    },
    III_especificar_el_tipo_de_drogas_que_consume_la_prv: {
        type: String,
        enum: tipo_de_droga
    },
    /* IV. MOTIVO DE LA ATENCIÓN */
    IV_contexto_causa_y_evolucion: {
        type: String,
    },
    IV_ha_tenido_que_ser_atendida_en_una_institucion_medica_o_por_personal_medico_como_consecuencia_de_un_evento_de_violencia_con_la_persona_agresora: {
        type: Boolean,
    },
    IV_ultimo_episodio_de_violencia_reciente: {
        type: Boolean,
    },
    IV_ultimo_episodio_de_violencia_reciente_especificar: {
        type: String,
    },
    IV_ultimo_episodio_de_violencia: {
        type: String,
        enum: frecuencia_violencia
    },
    IV_ultimo_episodio_de_violencia_especificar: {
        type: String,
    },
    IV_acciones_o_intentos_de_solucion_realizados: {
        type: String,
    },
    IV_personas_involucradas_en_la_situacion: {
        type: String,
    },
    /* V ANTECEDENTES DE VIOLENCIA */
    V_contexto_causa_y_evolucion: {
        type: String,
    },
    V_acciones_o_intentos_de_solucion_realizados: {
        type: String,
    },
    V_personas_involucradas_en_la_situacion: {
        type: String,
    },
    V_redes_de_apoyo_y_tipo_de_apoyo_que_se_proporciono: {
        type: String,
    },
    V_recurrio_a_alguna_institucion_para_pedir_apoyo: {
        type: Boolean,
    },
    V_recurrio_a_alguna_institucion_especificar: {
        type: String,
    },
    V_cuenta_con_expediente_de_atencion: {
        type: Boolean,
    },
    V_cuenta_con_expediente_de_atencion_especificar: {
        type: String
    },
    /* VI. INFORMACIÓN DE LA PERSONA AGRESORA */
    VI_persona_conocida_o_desconocida: {
        type: Boolean
    },
    VI_pseudonimo: {
        type: String
    },
    VI_nombre: {
        type: String
    },
    VI_primer_apellido: {
        type: String
    },
    VI_segundo_apellido: {
        type: String
    },
    VI_edad: {
        type: String
    },
    VI_genero: {
        type: String,
        enum: genero
    },
    VI_especificar_genero: {
        type: String
    },
    VI_sexo: {
        type: String,
        enum: sexo
    },
    VI_nacionalidad: {
        type: String
    },
    VI_relacion_con_la_persona_agresora: {
        type: String,
        enum: parentesco
    },
    VI_especificar_relacion: {
        type: String
    },
    VI_tiempo_de_convivencia_con_la_persona_agresora_anios_y_meses: {
        type: String
    },
    VI_calle: {
        type: String
    },
    VI_numero_exterior: {
        type: String
    },
    VI_numero_interior: {
        type: String
    },
    VI_letra_exterior: {
        type: String
    },
    VI_letra_interior: {
        type: String
    },
    VI_cp: {
        type: String
    },
    VI_cruce1: {
        type: String
    },
    VI_cruce2: {
        type: String
    },
    VI_referencia: {
        type: String
    },
    VI_estado: {
        type: String
    },
    VI_municipio: {
        type: String
    },
    VI_colonia_localidad: {
        type: String
    },
    VI_escolaridad: {
        type: String
    },
    VI_estatus_escolaridad: {
        type: String
    },
    VI_ocupacion_de_la_persona: {
        type: String,
        enum: ocupacion
    },
    VI_especificar_ocupacion: {
        type: String
    },
    VI_telefono_fijo_casa: {
        type: String
    },
    VI_celular: {
        type: String
    },
    VI_especificar_contacto: {
        type: String
    },
    VI_posesion_de_armas: {
        type: Boolean
    },
    VI_especificar_arma: {
        type: String,
    },
    VI_consumo_de_drogas: {
        type: String
    },
    VI_especificar_el_tipo_de_drogas_que_consume_la_persona_agresora: {
        type: String,
        enum: tipo_de_droga
    },
    VI_enfermedad_mental: {
        type: Boolean
    },
    VI_toma_algun_tratamiento_psiquiatrico: {
        type: Boolean
    },
    VI_especificar_tratamiento: {
        type: String
    },
    VI_farmacodependencia: {
        type: Boolean
    },
    VI_pertenece_a_la_policia_o_al_ejercito: {
        type: Boolean
    },
    VI_especificar_plicia_ejercito: {
        type: String
    },
    VI_pertenece_o_tiene_enlace_con_el_crimen_organizado: {
        type: Boolean
    },
    VI_especificar_crimen_organizado: {
        type: String
    },
    VI_historial_de_antecedentes_penales: {
        type: String
    },
    VI_infidelidad: {
        type: Boolean
    },
    VI_estatura_aproximada: {
        type: String
    },
    VI_complexion: {
        type: String,
        enum: complexion
    },
    VI_tez: {
        type: String,
        enum: tez
    },
    VI_color_cabello: {
        type: String,
    },
    VI_tamanio_cabello: {
        type: String,
        enum: tamanio_de_cabello
    },
    VI_forma_cabello: {
        type: String,
        enum: forma_cabello
    },
    VI_nariz: {
        type: String,
        enum: nariz
    },
    VI_labios: {
        type: String,
        enum: labios
    },
    VI_color_ojos: {
        type: String,
        enum: color_ojos
    },
    VI_tamanio_ojos: {
        type: String,
        enum: tamanio_ojos
    },
    VI_forma_ojos: {
        type: String,
        enum: forma_ojos
    },
    VI_estado_fisico_aparente: {
        type: String,
        enum: estado_fisico
    },
    VI_especifique_estado_fisico: {
        type: String
    },
    VI_forma_de_la_cara: {
        type: String,
    },
    VI_tipo_de_cejas: {
        type: String
    },
    VI_senias_particulares: {
        type: Boolean
    },
    VI_especificar_senias: {
        type: String
    },
    VI_tatuajes: {
        type: Boolean
    },
    VI_especifique_tatuajes: {
        type: String
    },
    VI_lunares: {
        type: Boolean
    },
    VI_especifique_lunares: {
        type: String
    },
    VI_barba: {
        type: Boolean
    },
    VI_especifique_barba: {
        type: String
    },
    VI_bigote: {
        type: Boolean
    },
    VI_especifique_bigote: {
        type: String
    },
    VI_cicatrices: {
        type: Boolean
    },
    VI_especifique_cicatrices: {
        type: String
    },
    VI_lesiones: {
        type: Boolean
    },
    VI_especifique_lesiones: {
        type: String
    },
}, { timestamps: true });

cedulaSchema.plugin(mongoosePaginate)



export const Cedula = model('Cedula', cedulaSchema);


