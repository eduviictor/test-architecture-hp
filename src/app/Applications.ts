import { exit } from 'process';
import { User } from '../core/modules/user/creation/entities/User';
import { EmailTakenException } from '../core/modules/user/creation/exceptions/EmailTakenException';
import { UserSaveException } from '../core/modules/user/creation/exceptions/UserSaveException';
import { Request } from '../core/modules/user/creation/requests/Request';
import { Response } from '../core/modules/user/creation/responses/Response';
import { UseCase } from '../core/modules/user/creation/UseCase';
import { DatabaseAdapter } from './adapters/DatabaseAdapter';

export class Application {
  saveUser(name: string, email: string, phone: string): void {
    const user = new User(name, email, phone);
    const request = new Request(user);
    const useCase = new UseCase(new DatabaseAdapter(), new DatabaseAdapter());

    let response: Response;

    try {
      response = useCase.execute(request);
    } catch (e) {
      if (e instanceof EmailTakenException) {
        console.log(`E-mail ${email} is already taken`);
        exit(1);
      } else if (e instanceof UserSaveException) {
        console.log(`User cannot be saved with message: ${e.message}`);
        exit(1);
      }
    }

    console.log(`User saved with the id ${response.getUserId()}`);
    exit(0);
  }
}
