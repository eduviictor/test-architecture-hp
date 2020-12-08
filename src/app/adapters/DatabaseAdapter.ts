import { User } from '../../core/modules/user/creation/entities/User';
import { CheckUniqueEmailGateway } from '../../core/modules/user/creation/gateways/CheckUniqueEmailGateway';
import { UserSaveGateway } from '../../core/modules/user/creation/gateways/UserSaveGateway';

export class DatabaseAdapter implements CheckUniqueEmailGateway, UserSaveGateway {
  private readonly takenEmails = ['test@email.com', 'newtest@email.com'];

  save(user: User): string {
    return '1';
  }

  isEmailTaken(email: string): boolean {
    const find = this.takenEmails.find((emailItem: string) => emailItem === email);
    return !!find;
  }
}
