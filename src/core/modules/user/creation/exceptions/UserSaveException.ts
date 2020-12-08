export class UserSaveException extends Error {
  private readonly statusCode: number;

  constructor(message: string, statusCode: number, stack: string) {
    super(message);
    this.name = 'UserSaveExceptipn';
    this.message = message;
    this.stack = stack;
    this.statusCode = statusCode;
  }
}
