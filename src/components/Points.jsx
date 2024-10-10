const Points = () => {
  return (
    <div className="min-h-screen bg-[#545454] flex items-center justify-center text-white">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Sistema de Recompensas
        </h1>
        <p className="text-lg font-bold text-gray-400 mb-4 text-center">
          ¡Gana puntos mientras descubres México!
        </p>
        <ul className="list-none text-gray-300 mb-8 text-justify">
          <li className="mb-2">🎖️ 10 puntos por cada reseña enviada.</li>
          <li className="mb-2">
            🎯 10 puntos por visitar lugares concurridos.
          </li>
          <li className="mb-2">
            🌍 30 puntos por explorar lugares poco concurridos.
          </li>
          <li className="mb-2">✨ 30 puntos por descubrir nuevos destinos.</li>
          <li className="mb-2">
            🏛️ 40 puntos por visitar sitios históricos o monumentales.
          </li>
          <li className="mb-2">
            🌲 50 puntos por explorar Áreas Naturales Protegidas (ANP).
          </li>
          <li className="mb-2">
            🎉 Puntos dobles en visitas durante fechas festivas.
          </li>
        </ul>
        <hr className="border-gray-600 mb-8" />
        <h2 className="text-2xl font-bold mb-4 text-center">
          ¿Para qué sirven los puntos?
        </h2>
        <p className="text-gray-300 mb-4 text-justify">
          Nuestro sistema de recompensas te permite convertir tus viajes en más
          experiencias. Usa tus puntos para obtener descuentos, ofertas
          especiales o visitas adicionales a destinos increíbles, incluso
          aquellos que ya hayas visitado pero siempre tienen algo nuevo por
          ofrecer.
        </p>
        <p className="text-gray-300 text-justify">
          Cada viaje es una nueva aventura, una oportunidad para conocer
          personas, culturas, y vivir experiencias únicas. ¡Y queremos que sigas
          compartiendo estos momentos con nosotros!
        </p>
      </div>
    </div>
  );
};

export default Points;
