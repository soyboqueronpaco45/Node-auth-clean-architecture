import { ValidarorsAdapter } from "../../../../config";

export class CreatedUserDto {
  private constructor(
    public name: string,
    public username: string,
    public email: string,
    public password: string,
  ) {}
  static create(body: { [key: string]: any }): [string?, CreatedUserDto?] {
    const { name, username, email, password } = body;
    if (!name) return ["El nombre es obligatorio"];
    if (!ValidarorsAdapter.nameValidator.test(name))
      return ["El formato no es valido"];
    if (!username) return ["El usuario es obligatorio"];
    if (!ValidarorsAdapter.usernameValidator.test(username))
      return ["usuario no es valido"];
    if (!email) return ["El correo electronico es obligatorio"];
    if (!ValidarorsAdapter.emailValidator.test(email))
      return ["correo no es valido"];
    if (!password) return ["la contraseña es obligatoria"];
    if (password.length < 8) return ["la contraseña es corta"];

    return [undefined, new CreatedUserDto(name, username, email, password)];
  }
}
