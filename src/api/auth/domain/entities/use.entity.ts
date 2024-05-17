export class User {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public email: string,
    public password: string,
    public role: string[],
    public avatar?: string,
  ) {}
}
