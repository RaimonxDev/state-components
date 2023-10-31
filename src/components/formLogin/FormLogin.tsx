export const FormLogin = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const invalidClass: string = "invalid:border-red-400 invalid:ring-red-400 invalid:ring-2 invalid:ring-inset";

  return (
    <form action="" className="group">
      {/* Correo */}
      <div className="mb-4">
        <label htmlFor="nombre" className="mb-2 block text-sm text-gray-600 text-start">
          Nombre
        </label>
        <input
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
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-sm text-gray-600 text-start">
          Correo Electronico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electronico"
          className="block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-inset ring-gray-300 ring-1 placeholder-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800 "
          autoComplete="off"
          required
          pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <span className="mt-2 hidden text-sm text-red-400">Ingrese un correo electronico valido</span>
      </div>
      {/* Password */}
      <div className="mb-4">
        <div className="mb-2 flex">
          <label htmlFor="password" className="text-sm text-gray-600">
            Password
          </label>
        </div>
        <input
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
          type="password"
          name="password"
          id="password"
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
