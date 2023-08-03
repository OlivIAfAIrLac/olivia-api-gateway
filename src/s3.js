import {
    DeleteObjectCommand,
    GetObjectCommand,
    ListObjectsCommand,
    PutObjectCommand,
    S3Client
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import fs from 'fs'
import { AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY } from './config.js'

const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
})

export async function uploadFile({ file, prefix }) {
    const stream = fs.createReadStream(file.tempFilePath)
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: `${prefix}/${file.name}`,
        Body: stream,
    }
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)
}

export async function getFiles() {
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME
    })
    return await client.send(command)
}

export async function getFile({ filename, prefix }) {
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: prefix
    })
    return await client.send(command)
}

export async function getFilesFromFolder({ prefix }) {
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME,
        Prefix: prefix
    });
    return await client.send(command)
}

export async function downloadFile(filename) {
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: filename
    })
    const result = await client.send(command)
    console.log(result)
    result.Body.pipe(fs.createWriteStream(`./images/${filename}`))
}

export async function getFileURL(filename) {
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: filename
    })
    return await getSignedUrl(client, command, { expiresIn: 86_400 })
}

export async function removeFile({ filename, prefix }) {

    const command = new DeleteObjectCommand({
        Bucket: AWS_BUCKET_NAME, // required
        Key: `${prefix}/${filename}`, // required
    });
    return await client.send(command);
}