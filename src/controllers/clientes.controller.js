import { readLastClave } from '../helpers/helpers';
import { ClienteFactura, ClienteRemision } from '../models/Cliente';


export const getClientes = async (req, res, next) => {
    const { baseUrl } = req
    try {
        const { razonSocial = '' } = req.query

        const clientes = baseUrl === "/api/factura/clientes" ?
            await readCliente({ model: ClienteFactura, razonSocial })
            :
            await readCliente({ model: ClienteRemision, razonSocial })

        if (clientes.length > 0) res.send(clientes);
        else res.send([]);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

export const updateCliente = async (req, res, next) => {
    try {
        const { baseUrl } = req
        const { id } = req.params


        const cliente = baseUrl === "/api/factura/clientes" ?
            await ClienteFactura.updateOne({ _id: id }, { $set: req.body })
            :
            await ClienteRemision.updateOne({ _id: id }, { $set: req.body })

        cliente.matchedCount === 1 ?
            res.send({ msg: "cliente actualizado", cliente })
            :
            res.status(304).send({ msg: "cliente no se pudo actualizar", cliente })

    } catch (error) {
        console.error(error.errors);
        res.status(500).send(error.errors);
    }
}

export const createClientes = async (req, res, next) => {
    try {

        const { baseUrl, body } = req;
        const cliente = baseUrl === "/api/factura/clientes" ?
            ClienteFactura(body)
            :
            ClienteRemision(body)

        await cliente.save();
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send({ error: error.code });
    }
}

export const deleteCliente = async (req, res, next) => {
    try {
        const { baseUrl, params } = req
        const { id } = params;

        const cliente = baseUrl === "/api/factura/clientes" ?
            await removeCliente({ model: ClienteFactura, id })
            :
            await removeCliente({ model: ClienteRemision, id })

        cliente.deletedCount === 1 ?
            res.send({ msg: "Cliente eliminado", count: deleteCliente })
            :
            res.send({ msg: "No se pudo elimiar el cliente" })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

export const getLastClave = async (req, res, next) => {
    try {
        const { baseUrl } = req
        const clientes = baseUrl === '/api/factura/clientes' ?
            await readLastClave({ model: ClienteFactura })
            :
            await readLastClave({ model: ClienteRemision })

        const clave = parseInt(clientes) + 1;

        clave ?
            res.send({ clave })
            :
            res.send({
                msg: "no se encontró clave"
            })


    } catch (error) {
        console.error(error);
        res.status(500).send(error.errors);
    }
}

/* Common Functions */

const readCliente = async props => {
    const { model, razonSocial = '' } = props;

    return await model.find({
        razonSocial: new RegExp(razonSocial, 'i'),
    })
} 

const removeCliente = async props => {
    const { model, id } = props;

    return await model.deleteOne({
        _id: id
    });
}
