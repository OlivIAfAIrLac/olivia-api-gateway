import { Expediente } from '../models/Expediente';


export const getAllExpediente = async (req, res, next) => {
    try {
        const expediente = await Expediente.find()
        if (expediente.length > 0) res.send(expediente);
        else res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getExpedienteById = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log(`ID ${id}`);
        const expediente = await Expediente.findOne({ _id: id })

        expediente
            ? res.send(expediente)
            : res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
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
        res.status(200).send(expediente);
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
