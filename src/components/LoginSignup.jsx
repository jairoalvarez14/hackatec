import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </h2>

        <form>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-gray-200 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                placeholder="Tu nombre"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-600">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-gray-200 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
              placeholder="Tu correo"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md bg-gray-200 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
              placeholder="Tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-400 transition duration-200"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          <button
            onClick={toggleForm}
            className="text-blue-500 font-bold ml-2 hover:underline"
          >
            {isLogin ? "Regístrate" : "Inicia Sesión"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
