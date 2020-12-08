import { EmailTakenException } from '../exceptions/EmailTakenException';
import { CheckUniqueEmailGateway } from '../gateways/CheckUniqueEmailGateway';

export class CheckUniqueEmailRule {
  constructor(
    private readonly checkUniqueEmailGateway: CheckUniqueEmailGateway,
    private readonly email: string
  ) {}

  apply(): void {
    if (this.checkUniqueEmailGateway.isEmailTaken(this.email)) {
      throw new EmailTakenException(`The e-mail ${this.email} is already taken`);
    }
  }
}
