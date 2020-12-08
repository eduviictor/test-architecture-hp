import { DatabaseAdapter } from '../app/adapters/DatabaseAdapter';
import { User } from '../core/modules/user/creation/entities/User';
import { CheckUniqueEmailGateway } from '../core/modules/user/creation/gateways/CheckUniqueEmailGateway';
import { UserSaveGateway } from '../core/modules/user/creation/gateways/UserSaveGateway';
import { Request } from '../core/modules/user/creation/requests/Request';
import { UseCase } from '../core/modules/user/creation/UseCase';

describe('Example Test', () => {
  it('Test Success', () => {
    const checkUniqueEmailGateway: CheckUniqueEmailGateway = new DatabaseAdapter();

    expect(checkUniqueEmailGateway.isEmailTaken('test3@email.com')).toEqual(false);

    const userSaveGateway: UserSaveGateway = new DatabaseAdapter();

    const user = new User('test', 'email@email.com', '932312');

    expect(userSaveGateway.save(user)).toEqual('1');

    const useCase = new UseCase(checkUniqueEmailGateway, userSaveGateway);

    const request = new Request(new User('name', 'email', 'phone'));

    const response = useCase.execute(request);

    expect(response.getUserId()).toEqual('1');
  });
});
