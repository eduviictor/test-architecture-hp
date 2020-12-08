import { CheckUniqueEmailGateway } from './gateways/CheckUniqueEmailGateway';
import { UserSaveGateway } from './gateways/UserSaveGateway';
import { Request } from './requests/Request';
import { Response } from './responses/Response';
import { CheckUniqueEmailRule } from './rules/CheckUniqueEmailRule';
import { UserSaveRule } from './rules/UserSaveRule';
import { RuleSet } from './ruleSets/Ruleset';

export class UseCase {
  constructor(
    private readonly checkUniqueEmailGateway: CheckUniqueEmailGateway,
    private readonly userSaveGateway: UserSaveGateway
  ) {}

  execute(request: Request): Response {
    const ruleSet = new RuleSet(
      new CheckUniqueEmailRule(this.checkUniqueEmailGateway, request.getUser().getEmail()),
      new UserSaveRule(this.userSaveGateway, request.getUser()));

    return ruleSet.apply();
  }
}
