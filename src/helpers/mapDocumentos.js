import { getFileURL } from "../s3";

export const mapFiles = async (file) => {
    return ({
        filename: file.Key,
        url: await getFileURL(file.Key)
    });
}