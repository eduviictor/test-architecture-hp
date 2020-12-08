import { Response } from '../responses/Response';
import { CheckUniqueEmailRule } from '../rules/CheckUniqueEmailRule';
import { UserSaveRule } from '../rules/UserSaveRule';

export class RuleSet {
  constructor(
    private readonly checkUniqueEmailRule: CheckUniqueEmailRule,
    private readonly userSaveRule: UserSaveRule
  ) {}

  apply(): Response {
    this.checkUniqueEmailRule.apply();
    const userId = this.userSaveRule.apply();

    return new Response(userId);
  }
}
