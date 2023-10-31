/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FormLoginControls } from "./controls";

export const FormLogin = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const invalidClass: string = "invalid:border-red-400 invalid:ring-red-400 invalid:ring-2 invalid:ring-inset";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
    nombre: "",
  });

  const [isSamePass, setIsSamePass] = useState<boolean>(false);
  const [isValidEmail, setValidEmail] = useState<boolean>(false);

  const handleControlName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFormLogin({ ...formLogin, nombre: e.target.value });
    }
  };

  const handleControlEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmailPattern(e.target.value)) {
      console.log("Correo no valido");
      setValidEmail(false);
      return;
    }
    if (e.target.value) {
      setValidEmail(true);
      setFormLogin({ ...formLogin, email: e.target.value });
    }
  };

  const handleControlPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 6) {
      console.log("contraseña debe de tener mas de 6 caracteres");
      return;
    }
    setFormLogin({ ...formLogin, password: e.target.value });
  };

  const handleControl = (e: React.ChangeEvent<HTMLInputElement>, control: FormLoginControls) => {
    if (control === "email") {
      handleControlEmail(e);
    }
    if (control === "name") {
      handleControlName(e);
    }
    if (control === "password") {
      handleControlPassword(e);
    }
  };

  const isValidEmailPattern = (email: string) => (email.match(emailRegex) ? true : false);

  const onSamePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSamePass(e.target.value === formLogin.password ? true : false);
  };

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formLogin);
    console.log("Registrando");
  };

  return (
    <form onSubmit={register} className="group">
      {/* Correo */}
      <div className="mb-4">
        <label htmlFor="nombre" className="mb-2 block text-sm text-gray-600 text-start">
          Nombre
        </label>
        <input
          onChange={(e) => handleControl(e, "name")}
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su nombre completo"
          className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-inset ring-gray-300 ring-1 placeholder-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 "
          autoComplete="off"
          required
        />
        <span className="mt-2 hidden text-sm text-red-400">Este campo es valido</span>
      </div>
      {/* Correo */}
      <div className="mb-4 text-start">
        <label htmlFor="email" className="mb-2 block text-sm text-gray-600 text-start">
          Correo Electronico
        </label>
        <input
          onChange={(e) => handleControl(e, "email")}
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electronico"
          className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-inset ring-gray-300 ring-1 placeholder-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 "
          autoComplete="off"
          required
        />
        {!isValidEmail ? (
          <span className="mt-2 text-sm text-red-400 w-full">Ingrese un correo electronico valido</span>
        ) : null}
      </div>
      {/* Password */}
      <div className="mb-4">
        <div className="mb-2 flex">
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
        </div>
        <input
          onChange={(e) => handleControl(e, "password")}
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su contraseña"
          className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-inset ring-gray-300 ring-1 placeholder-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 "
          autoComplete="off"
          required
          pattern=".{6,}"
        />
        <span className="mt-2 hidden text-sm text-red-400">Passoword tiene menos de {"6 caracteres"}</span>
      </div>
      {/* Repeat Password */}
      <div className="mb-4">
        <div className="mb-2 flex">
          <label htmlFor="password" className="text-sm text-gray-600">
            Repita el password
          </label>
        </div>
        <input
          onChange={onSamePassword}
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Repita su contraseña"
          className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-inset ring-gray-300 ring-1 placeholder-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 "
          autoComplete="off"
          required
          pattern=".{6,}"
        />
        <span className="mt-2 hidden text-sm text-red-400">Las Contraseñas no son iguales </span>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full rounded-md bg-teal-500 p-2.5  text-white focus:bg-teal-600 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70 group-invalid:bg-gray-300 group-invalid:text-gray-700">
          Registrar
        </button>
      </div>
    </form>
  );
};
