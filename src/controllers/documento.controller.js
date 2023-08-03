// import { Documento } from '../models/Documento';
import { Expediente } from '../models/Expediente';
import {
    uploadFile
} from '../s3.js';



// export const getAllDocumento = async (req, res, next) => {
//     try {
//         const documento = await Documento.find()
//         if (documento.length > 0) res.send(documento);
//         else res.send([]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// }

// export const getDocumentoById = async (req, res, next) => {
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

// export const updateDocumento = async (req, res, next) => {
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

export const createDocumento = async (req, res, next) => {
    try {
        const { body, files } = req;
        const { documentos } = files;
        console.log(documentos);
        const {
            expediente
        } = body;
        const exp = await Expediente.exists({ _id: expediente })

        if (exp) {
            const resFile = documentos.length
                ? await Promise.allSettled(documentos.map(file => createFile({ file, prefix: `${expediente}/documentos` })))
                : await uploadFile({ file: documentos, prefix: `${expediente}/documentos` })

            if (documentos.length) {
                resFile.some(item => item.status !== 'fulfilled')
                    ? res.status(304).send({ msg: 'no se pudo crear los documentos' })
                    : res.status(200).send({ msg: 'documentos cargados con exito' })
            } else {
                res.status(200).send({ msg: 'documentos cargados con exito' })
            }
        } else {
            res.status(404).send({ msg: 'por favor revise el expediente' })
        }

        // const docsCreated = await getFilesFromFolder({ prefix: expediente })
        // const urlsSigned = docsCreated.Contents ? docsCreated.Contents.map(mapDocumentos) : []
        // console.log(urlsSigned);
        // const urls = await Promise.allSettled(urlsSigned);
        // const docs = urls.map(item => ({
        //     descripcion: item.value.filename.split('/')[1],
        //     url: item.value.url
        // }))
        // const documento = new Documento({
        //     descripcion,
        //     url,
        //     expediente,
        // })

        // await documento.save();

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
const createFile = async ({ file, prefix }) => await uploadFile({ file, prefix })

export const deleteDocumento = async (req, res, next) => {
    try {
        // const { id } = req.params;


        // const countDeleted = await Documento.deleteOne({ _id: id })

        // countDeleted.deletedCount === 1 ?
        //     res.send({ msg: "Documento eliminado", count: countDeleted })
        //     :
        //     res.send({ msg: "No se eliminó ningún Documento" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

