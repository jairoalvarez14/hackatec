import React, { useState } from "react";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    ageRange: "",
    travelDays: "",
    travelStyle: "",
    climatePreference: "",
    budget: "",
    destinationType: "",
    activities: [],
    popularPlaces: "",
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAnswers((prev) => {
      if (checked) {
        return { ...prev, activities: [...prev.activities, name] };
      } else {
        return {
          ...prev,
          activities: prev.activities.filter((act) => act !== name),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateRecommendations();
  };

  // Lógica para recomendar destinos turísticos basados en las respuestas
  const generateRecommendations = () => {
    let recommendedPlaces = [];

    // Ejemplo básico de lógica condicional:
    if (answers.climatePreference === "Cálido") {
      if (answers.destinationType === "Playa") {
        recommendedPlaces.push("Cancún", "Tulum", "Puerto Vallarta");
      } else if (answers.destinationType === "Pueblo Mágico") {
        recommendedPlaces.push("Tequila", "Izamal", "Tepoztlán");
      }
    }

    if (answers.climatePreference === "Frío") {
      if (answers.destinationType === "Montañas") {
        recommendedPlaces.push("San Cristóbal de las Casas", "Valle de Bravo");
      }
    }

    if (answers.activities.includes("Cultura Indígena")) {
      recommendedPlaces.push("San Juan Chamula", "Oaxaca", "Chiapas");
    }

    // Si el cliente prefiere lugares menos conocidos
    if (answers.popularPlaces === "Lugares menos conocidos") {
      recommendedPlaces = recommendedPlaces.filter(
        (place) => place !== "Cancún"
      );
    }

    setRecommendations(recommendedPlaces);
    setStep(10); // Para mostrar las recomendaciones al final
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          {/* Preguntas dinámicas por paso */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Cuál es tu rango de edad?
              </h2>
              <select
                name="ageRange"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.ageRange}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu rango de edad</option>
                <option value="21-30">21 - 30</option>
                <option value="31-40">31 - 40</option>
                <option value="41-50">41 - 50</option>
                <option value="51+">51 o más</option>
              </select>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Cuántos días planeas viajar?
              </h2>
              <input
                type="number"
                name="travelDays"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.travelDays}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Cómo viajas?</h2>
              <select
                name="travelStyle"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.travelStyle}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Solo">Solo</option>
                <option value="Pareja">En pareja</option>
                <option value="Familia">En familia</option>
              </select>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Qué tipo de clima prefieres?
              </h2>
              <select
                name="climatePreference"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.climatePreference}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Cálido">Cálido</option>
                <option value="Frío">Frío</option>
                <option value="Templado">Templado</option>
              </select>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Cuál es tu presupuesto?
              </h2>
              <input
                type="text"
                name="budget"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.budget}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Qué tipo de destino prefieres?
              </h2>
              <select
                name="destinationType"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.destinationType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Playa">Playa</option>
                <option value="Pueblo Mágico">Pueblo Mágico</option>
                <option value="Áreas Protegidas">Áreas Protegidas</option>
                <option value="Ciudades">Ciudades</option>
              </select>
            </div>
          )}

          {step === 7 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Qué actividades te interesan más?
              </h2>
              <div className="flex flex-col space-y-2">
                {[
                  "Montañas",
                  "Museos",
                  "Deportes",
                  "Gastronomía",
                  "Cultura Indígena",
                  "Vida Nocturna",
                ].map((activity) => (
                  <label key={activity}>
                    <input
                      type="checkbox"
                      name={activity}
                      checked={answers.activities.includes(activity)}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">{activity}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 8 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                ¿Prefieres destinos menos conocidos o populares?
              </h2>
              <select
                name="popularPlaces"
                className="w-full p-2 border border-gray-300 rounded"
                value={answers.popularPlaces}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Lugares menos conocidos">
                  Lugares menos conocidos
                </option>
                <option value="Destinos populares">Destinos populares</option>
              </select>
            </div>
          )}

          {step === 9 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Respuestas seleccionadas
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Rango de edad:</strong> {answers.ageRange}
                </li>
                <li>
                  <strong>Días de viaje:</strong> {answers.travelDays}
                </li>
                <li>
                  <strong>Estilo de viaje:</strong> {answers.travelStyle}
                </li>
                <li>
                  <strong>Clima preferido:</strong> {answers.climatePreference}
                </li>
                <li>
                  <strong>Presupuesto:</strong> {answers.budget}
                </li>
                <li>
                  <strong>Tipo de destino:</strong> {answers.destinationType}
                </li>
                <li>
                  <strong>Actividades:</strong> {answers.activities.join(", ")}
                </li>
                <li>
                  <strong>Preferencia de lugares:</strong>{" "}
                  {answers.popularPlaces}
                </li>
              </ul>
            </div>
          )}

          {/* Mostrar recomendaciones */}
          {step === 10 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Recomendaciones basadas en tus respuestas
              </h2>
              <ul className="list-disc list-inside">
                {recommendations.length > 0 ? (
                  recommendations.map((place, index) => (
                    <li key={index}>{place}</li>
                  ))
                ) : (
                  <li>No se encontraron recomendaciones.</li>
                )}
              </ul>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="flex justify-between mt-4">
            {step > 1 && step < 9 && (
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              >
                Anterior
              </button>
            )}
            {step < 9 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Siguiente
              </button>
            ) : step === 9 ? (
              <button
                type="button"
                onClick={generateRecommendations}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Ver Recomendaciones
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Finalizar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
