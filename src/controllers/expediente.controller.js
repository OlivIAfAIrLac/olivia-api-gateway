import { mapFiles } from '../helpers/mapDocumentos';
import { Cedula } from '../models/Cedula';
import { Expediente } from '../models/Expediente';
import { getFilesFromFolder } from '../s3';


export const getAllExpediente = async (req, res, next) => {
    try {
        const { page, search } = req.query;
        const isSearchingFolio = new RegExp("[0-9]+")
        const query = isSearchingFolio.test(search)
            ?
            {
                folio: {
                    $regex: new RegExp(search), $options: "i"
                }
            }
            : {
                nombre: {
                    $regex: new RegExp(search), $options: "i"
                }
            }

        const expediente = await Expediente.paginate(query,
            {
                limit: 9,
                page,
                sort: { createdAt: 'desc' }
            }).then({})
        res.send(expediente);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getExpedienteById = async (req, res, next) => {
    try {
        const { id } = req.params
        const expediente = await Expediente.findOne({ _id: id })
        // const audio = await Audio.find().where("expediente").equals(id)        
        // const documentos = await Documento.find().where("expediente").equals(id)
        const documentosFiles = await getFilesFromFolder({ prefix: `${id}/documentos` })
        const audiosFiles = await getFilesFromFolder({ prefix: `${id}/audios` })

        const urlsSignedDocumentos = documentosFiles.Contents ? documentosFiles.Contents.map(mapFiles) : []
        const urlsSignedAudios = audiosFiles.Contents ? audiosFiles.Contents.map(mapFiles) : []


        let urlsDocumentos = await Promise.allSettled(urlsSignedDocumentos);
        let urlsAudios = await Promise.allSettled(urlsSignedAudios);
        // console.log(urls);
        const documentos = urlsDocumentos.map(item => ({
            descripcion: item.value.filename.split('/')[2],
            url: item.value.url
        }))
        const audios = urlsAudios.map(item => ({
            descripcion: item.value.filename.split('/')[2],
            url: item.value.url
        }))

        expediente
            ? res.send({
                expediente,
                audios,
                documentos,
            })
            : res.send([]);
    } catch (error) {
        res.status(500).send(error);
        console.error(error);
    }
}



export const updateExpediente = async (req, res, next) => {
    try {
        const { id } = req.params

        const {
            folio,
            nombre,
            curp,
        } = req.body;

        const expediente = await Expediente.updateOne({ _id: id }, {
            $set: {
                folio,
                nombre,
                curp
            }
        });

        expediente.matchedCount === 1 ?
            res.send({ msg: "Expediente actualizado", expediente })
            :
            res.status(304).send({ msg: "Expediente no se pudo actualizar", expediente })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

export const createExpediente = async (req, res, next) => {
    try {
        const { body } = req;
        const {
            folio,
            nombre,
            curp
        } = body;

        const expediente = new Expediente({
            folio,
            nombre,
            curp
        })


        await expediente.save();
        /* create cedula */
        const cedula = new Cedula({
            expediente: expediente._id
        })
        await cedula.save()
        res.status(200).send({ expediente, cedula });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const deleteExpediente = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(`ID ${id}`);

        const countDeleted = await Expediente.deleteOne({ _id: id })

        countDeleted.deletedCount === 1 ?
            res.send({ msg: "Expediente eliminado", count: countDeleted })
            :
            res.send({ msg: "No se eliminó ningún Expediente" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors)
    }
}

