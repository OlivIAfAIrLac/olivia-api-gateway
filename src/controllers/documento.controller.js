import { Documento } from '../models/Documento';


export const getAllDocumento = async (req, res, next) => {
    try {
        const documento = await Documento.find()
        if (documento.length > 0) res.send(documento);
        else res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getDocumentoById = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const documento = await Documento.findOne({ _id: id })

        documento
            ? res.send(documento)
            : res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const updateDocumento = async (req, res, next) => {
    try {
        const { id } = req.params

        const {
            descripcion,
            url,
            expediente,
        } = req.body;

        const documento = await Documento.updateOne({ _id: id }, {
            $set: {
                descripcion,
                url,
                expediente,
            }
        });

        documento.matchedCount === 1 ?
            res.send({ msg: "Documento actualizado", documento }) :
            res.status(304).send({ msg: "Documento no se pudo actualizar", documento })

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const createDocumento = async (req, res, next) => {
    try {
        const { body } = req;
        const {
            descripcion,
            url,
            expediente,
        } = body;

        const documento = new Documento({
            descripcion,
            url,
            expediente,
        })

        await documento.save();
        res.status(200).send(documento);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const deleteDocumento = async (req, res, next) => {
    try {
        const { id } = req.params;
        

        const countDeleted = await Documento.deleteOne({ _id: id })

        countDeleted.deletedCount === 1 ?
            res.send({ msg: "Documento eliminado", count: countDeleted })
            :
            res.send({ msg: "No se eliminó ningún Documento" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
