import { config } from 'dotenv'

config()

export const AWS_BUCKET_NAME = process.env.BUCKET_NAME
export const AWS_BUCKET_REGION = process.env.BUCKET_REGION
export const AWS_PUBLIC_KEY = process.env.PUBLIC_KEY
export const AWS_SECRET_KEY = process.env.SECRET_KEY