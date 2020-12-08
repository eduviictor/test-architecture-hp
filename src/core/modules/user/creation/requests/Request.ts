import { User } from '../entities/User';

export class Request {
  constructor(
    private readonly user: User
  ) {}

  getUser(): User {
    return this.user;
  }
}
