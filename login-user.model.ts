export class LoginUser {
  UserName:string="";
  Password:string="";
  get username(): string  {
      return this.UserName;
  }
  set uername(value: string) {
      this.uername= value;
  }
  get password(): string  {
    return this.Password;
}
set password(value: string) {
    this.password= value;
}
}
