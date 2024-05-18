export class ValidarorsAdapter {
  static get nameValidator() {
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  }
  static get usernameValidator() {
    return /^[a-zA-Z0-9\_\-]{4,16}$/;
  }
  static get emailValidator() {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  }
}
