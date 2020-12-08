import { User } from '../entities/User';
import { UserSaveException } from '../exceptions/UserSaveException';
import { UserSaveGateway } from '../gateways/UserSaveGateway';

export class UserSaveRule {
  constructor(
    private readonly userSaveGateway: UserSaveGateway,
    private readonly user: User
  ) {}

  apply(): string {
    try {
      return this.userSaveGateway.save(this.user);
    } catch (err) {
      throw new UserSaveException('Error saving user', 500, err);
    }
  }
}
