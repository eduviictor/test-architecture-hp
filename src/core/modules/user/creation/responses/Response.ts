export class Response {
  constructor(
    private readonly userId: string
  ) {}

  getUserId(): string {
    return this.userId;
  }
}
