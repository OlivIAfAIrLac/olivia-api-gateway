import endOfDayfrom from 'date-fns/endOfDay'
import startOfDay from 'date-fns/startOfDay'
import { Cedula } from '../models/Cedula';
import { Expediente } from '../models/Expediente';


export const getAllCedula = async (req, res, next) => {
    try {
        const { page, initDate, lastDate } = req.query;

        const dateObjectInitDate = initDate ? new Date(initDate) : new Date()
        const dateObjectLastDate = lastDate ? new Date(lastDate) : new Date()
        const cedula = await Cedula.paginate({
            createdAt: {
                $gte: startOfDay(dateObjectInitDate),
                $lte: endOfDayfrom(dateObjectLastDate)
            }
        },
            {
                limit: 20,
                page,
                sort: { createdAt: 'asc' },
            }).then({})
        res.send(cedula);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
export const getCedulaById = async (req, res, next) => {
    try {
        const { id } = req.params

        const expediente = await Expediente.findOne({ _id: id })
        const cedula = await Cedula.findOne().where("expediente").equals(id)

        cedula
            ? res.send({
                expediente,
                cedula
            })
            : res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}
export const updateCedula = async (req, res, next) => {
    try {
        const { body, params, query } = req
        const { id } = params
        const { expediente } = query

        console.log(id, expediente, body);

        const cedula = await Cedula.updateOne(
            { _id: id, expediente },
            { $set: body },
            { runValidators: true }
        );

        cedula.matchedCount === 1 ?
            res.send({ msg: "Cedula actualizada", cedula })
            :
            res.status(304).send({ msg: "Cedula no se pudo actualizar", cedula })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

// export const createCedula = async (req, res, next) => {
//     try {
//         const { body } = req;
//         const {
//             folio,
//             nombre,
//             curp
//         } = body;

//         const expediente = new Cedula({
//             folio,
//             nombre,
//             curp
//         })


//         await expediente.save();
//         /* create cedula */
//         const cedula = new Cedula({
//             expediente: expediente._id
//         })
//         await cedula.save()
//         res.status(200).send({ expediente, cedula });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// }

// export const deleteCedula = async (req, res, next) => {
//     try {
//         const { id } = req.params;

//         const countDeleted = await Cedula.deleteOne({ _id: id })

//         countDeleted.deletedCount === 1 ?
//             res.send({ msg: "Expediente eliminado", count: countDeleted })
//             :
//             res.send({ msg: "No se eliminó ningún Expediente" });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error.errors)
//     }
// }
