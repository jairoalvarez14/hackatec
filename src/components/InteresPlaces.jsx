// import { Link } from "react-router-dom";

const InterestPlaces = () => {
  // Datos de los lugares de interés
  const places = [
    {
      id: "CUN",
      title: "Cancún",
      imgSrc:
        "https://content.r9cdn.net/rimg/dimg/f2/b1/89e06bf7-city-34713-16ed2f2c7f1.jpg?width=1366&height=768&xhint=1735&yhint=2084&crop=true",
    },
    {
      id: "Puebla",
      title: "Puebla",
      imgSrc:
        "https://www.turismomexico.es/wp-content/uploads/2023/05/puebla-mexico-vacaciones.jpg",
    },
    {
      id: "MTY",
      title: "Monterrey",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs9k1L66oBzMCcsomg4AuDt1iUeIIYb62Fg&s",
    },
    {
      id: "TodosSantos",
      title: "Todos Santos",
      imgSrc:
        "https://images.ctfassets.net/wv75stsetqy3/33hmYxYfnJ08EGGCtcFpTX/b266df2dd65e38ca1b7714c9757f5902/Retire_in_Todos_Santos__Mexico.jpg?q=60&fit=fill&fm=webp",
    },
    {
      id: "Mazamitla",
      title: "Mazamitla",
      imgSrc:
        "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Jalisco_Mazamitla_Calles_BIC-ok.jpg",
    },
    {
      id: "SanMiguelDeAllende",
      title: "San Miguel de Allende",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuLsKSEwo7g64B8gKg9DHRrB-Efn_LNbSxg&s",
    },
    {
      id: "OAX",
      title: "Oaxaca",
      imgSrc:
        "https://media.iatiseguros.com/wp-content/uploads/2019/12/04012634/que-ver-oaxaca-6.jpg",
    },
    {
      id: "CDMX",
      title: "Ciudad de México",
      imgSrc:
        "https://tvazteca.brightspotcdn.com/dims4/default/4a25306/2147483647/strip/true/crop/1280x854+0+0/resize/928x619!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2Fe1%2F85%2Ffefd67b64c08accfd10c08cd76e1%2Fpexels-victor-armas-13100888.jpg",
    },
    {
      id: "MZTLN",
      title: "Mazatlán",
      imgSrc:
        "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/09/MALECON-MAZATLAN-.jpg?fit=960%2C540&ssl=1",
    },
    {
      id: "GDL",
      title: "Guadalajara",
      imgSrc: "https://www.gdltours.com/imagenes/guadalajara-gdl-catedral.jpg",
    },
  ];

  return (
    <>
      {/* Container */}
      <section className="flex flex-col items-center justify-center h-auto m-auto max-w-[1200px]">
        {/* Title */}
        <h2 className="text-[80px] font-BebasNeue text-[#a84227]">
          Lugares de
        </h2>
        <h2 className="text-[70px] font-Brittany text-[#6d6c3f]">interés...</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center h-auto m-auto mt-[20px] max-w-[1200px]">
          {places.map((place, index) => (
            <div key={index} className="w-[200px] m-[10px]">
              {/* Card */}
              <div className="w-[100%] h-[250px] relative overflow-hidden bg-black rounded-[20px]">
                {/* Cover */}
                <img
                  src={place.imgSrc}
                  alt={place.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-300 bg-opacity-80">
                  <h2 className="text-white text-lg font-bold text-center">
                    {place.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InterestPlaces;
