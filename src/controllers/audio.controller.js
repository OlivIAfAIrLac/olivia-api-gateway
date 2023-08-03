// import { Documento } from '../models/Documento';
import { Expediente } from '../models/Expediente';
import {
    uploadFile
} from '../s3.js';



// export const getAllAudios = async (req, res, next) => {
//     try {
//         const documento = await Documento.find()
//         if (documento.length > 0) res.send(documento);
//         else res.send([]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// }

// export const getAudioById = async (req, res, next) => {
//     try {
//         const { id } = req.params

//         const documento = await Documento.findOne({ _id: id })

//         documento
//             ? res.send(documento)
//             : res.send([]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// }

// export const updateAudio = async (req, res, next) => {
//     try {
//         const { id } = req.params

//         const {
//             descripcion,
//             url,
//             expediente,
//         } = req.body;

//         const documento = await Documento.updateOne({ _id: id }, {
//             $set: {
//                 descripcion,
//                 url,
//                 expediente,
//             }
//         });

//         documento.matchedCount === 1 ?
//             res.send({ msg: "Documento actualizado", documento }) :
//             res.status(304).send({ msg: "Documento no se pudo actualizar", documento })

//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// }

export const createAudio = async (req, res, next) => {
    try {
        const { body, files } = req;
        const { audios } = files;
        const {
            expediente
        } = body;

        const exp = await Expediente.exists({ _id: expediente })

        if (exp) {
            const resFile = audios.length
                ? await Promise.allSettled(audios.map(file => createFile({ file, prefix: `${expediente}/audios` })))
                : await uploadFile({ file: audios, prefix: `${expediente}/audios` })
            if (audios.length) {
                resFile.some(item => item.status !== 'fulfilled')
                    ? res.status(304).send({ msg: 'no se pudo crear los audios' })
                    : res.status(200).send({ msg: 'audios cargados con exito' })
            } else {
                res.status(200).send({ msg: 'audios cargados con exito' })
            }
        }
        else {
            res.status(404).send({ msg: 'por favor revise el expediente' })
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
const createFile = async ({ file, prefix }) => await uploadFile({ file, prefix })

export const deleteAudio = async (req, res, next) => {
    try {
        const { id } = req.params;


        // const countDeleted = await Documento.deleteOne({ _id: id })

        countDeleted.deletedCount === 1 ?
            res.send({ msg: "audio eliminado", count: countDeleted })
            :
            res.send({ msg: "No se eliminó ningún audio" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

