export type FormLoginControls = 'email' | 'password' | 'name';

export type UserFormLogin = {
  [key in FormLoginControls]: {
    value: string | undefined;
    touched: boolean,
    error?: string | undefined;
  }
}
