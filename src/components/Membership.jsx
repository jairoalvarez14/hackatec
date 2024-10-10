const Membership = () => {
  return (
    <>
      {/* Sección de Aportación */}
      <section className="py-16 bg-gray-900 text-white h-[100vh]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Contribuye al Cambio</h2>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
            <h3 className="text-4xl font-semibold mb-4">
              Aportación Solidaria
            </h3>
            <p className="text-gray-400 mb-6">
              Tu aportación ayudará a enfrentar desastres naturales, revitalizar
              zonas con bajo turismo, y fortalecer la economía local. Juntos,
              podemos crear un impacto positivo en las comunidades que más lo
              necesitan.
            </p>
            <p className="text-5xl font-bold mb-4">$50/mes</p>
            <ul className="text-left mb-6">
              <li className="mb-2">
                ✔️ Descuentos exclusivos en hoteles seleccionados
              </li>
              <li className="mb-2">
                ✔️ Acceso a experiencias únicas para miembros
              </li>
              <li className="mb-2">
                ✔️ Horas de vuelo gratuitas en destinos seleccionados
              </li>
            </ul>
            <button className="w-full bg-[#545454] text-white py-3 rounded-full hover:bg-[#54545470] transition duration-300">
              Haz tu Aportación
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
