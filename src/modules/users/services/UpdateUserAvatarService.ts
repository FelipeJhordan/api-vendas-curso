import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';
import User from '../infra/typeorm/entities/User';
import uploadConfig from '@config/upload';
import DiskStorageProvider from '@shared/providers/storageProvider/DiskStorageProvider';
import S3StorageProvider from '@shared/providers/storageProvider/S3StorageProvider';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);
    const user = await userRepository.findById(user_id);

    let filename: string;

    if (!user) {
      throw new AppError('User not found');
    }

    if (uploadConfig.driver === 's3') {
      const S3storageProvider = new S3StorageProvider();

      if (user.avatar) {
        await S3storageProvider.deleteFile(user.avatar);
      }
      filename = await S3storageProvider.saveFile(avatarFileName);
    } else {
      const DISKstorageProvider = new DiskStorageProvider();

      if (user.avatar) {
        await DISKstorageProvider.deleteFile(user.avatar);
      }

      filename = await DISKstorageProvider.saveFile(avatarFileName);
    }

    user.avatar = filename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
