import { User } from '../entities/User';

export interface UserSaveGateway {
  save(user: User): string
}
