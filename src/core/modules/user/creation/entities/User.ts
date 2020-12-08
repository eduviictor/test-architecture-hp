export class User {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly phone: string
  ) {}

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}
