import "./App.css";
import { SocialButtons } from "./components";
import { FormLogin } from "./components/formLogin/FormLogin";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900"> Registrate</h1>
              <p className="mt-2 text-gray-500">Usa tu cuenta de </p>
            </div>
            <SocialButtons />

            <p className="mt-4 text-gray-500">O ingresa tu correo </p>

            <div className="mt-4">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
