import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && reviewText) {
      const points = 10; // Definimos la cantidad de puntos por reseña
      const newReview = { name, text: reviewText, points }; // Añadimos los puntos a la reseña
      setReviews([...reviews, newReview]);
      setName("");
      setReviewText("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Reseñas</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-700 bg-gray-800 text-white rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Escribe tu reseña"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="border border-gray-700 bg-gray-800 text-white rounded-md p-3 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Enviar
          </button>
        </form>

        <h2 className="text-3xl font-semibold mb-4">Otros comentarios</h2>
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="border border-gray-700 rounded-md p-4 bg-gray-900 shadow-md"
            >
              <h3 className="font-bold text-blue-400">{review.name}</h3>
              <p className="text-gray-300">{review.text}</p>
              <p className="mt-2 text-gray-500">Puntos: {review.points}</p>{" "}
              {/* Mostramos los puntos de la reseña */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
