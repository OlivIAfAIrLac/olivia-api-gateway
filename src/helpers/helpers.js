export const readLastClave = async props => {
    const { model } = props;

    const claves = await model.find({}).select('clave')
    const result = claves.map(record => parseInt(record.clave))
    const lastClave = result.sort((a, b) => a - b)
    lastClave[result.length - 1]
    return lastClave[result.length - 1]
}