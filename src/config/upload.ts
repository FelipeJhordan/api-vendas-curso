import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';

interface IUploadConfig {
  directory: string;
  tmpFolder: string;
  driver: 's3' | 'disk';
  multer: { storage: StorageEngine };
  config: {
    aws: {
      bucket: string;
    };
  };
}

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
  directory: uploadFolder,
  tmpFolder,
  driver: process.env.STORAGE_DRIVER,
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const filename = `${fileHash}-${new Date().getMilliseconds()}-${
          file.originalname
        }`;

        callback(null, filename);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'api-vendas-fjalves',
    },
  },
} as IUploadConfig;
