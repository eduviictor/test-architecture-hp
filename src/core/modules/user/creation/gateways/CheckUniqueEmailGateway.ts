export interface CheckUniqueEmailGateway {
  isEmailTaken(email: string): boolean
}
