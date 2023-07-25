import { getFileURL } from "../s3";

export const mapDocumentos = async (file) => {
    return ({
        filename: file.Key,
        url: await getFileURL(file.Key)
    });
}