const Welcome = () => {
  const fetchedUrl =
    "https://www.vallartadaily.com/wp-content/uploads/2024/06/A_vibrant_collage_representing_Mexican_culture_and.jpg";

  return (
    <>
      <section
        style={{ backgroundImage: `url(${fetchedUrl})` }}
        className="max-w-[100%] h-[100vh] flex bg-cover bg-center"
      >
        {/* Fondo y columnas */}
        <div className="h-[100%] w-[100%] backdrop-blur-sm bg-[#20202070] grid grid-cols-2">
          {/* Columna del botón */}
          <div className="flex flex-col justify-center items-center">
            <label className="flex h-[30px] w-[200px] font-Oswald text-[20px] justify-center items-center text-white mb-[10px]">
              ¿No sabes dónde visitar?
            </label>
            <div className="flex justify-center items-center text-[35px] h-[80px] w-[300px] bg-[#919191] rounded-[50px] text-white font-Alata">
              <button>Iniciar Encuesta</button>
            </div>
          </div>
          {/* Columna de texto */}
          <div className="flex justify-end items-center">
            <div className="flex text-[100px] font-bold text-white">
              <h1 className="-mr-[350px] -mt-[30px] text-[60px] font-Anton">
                Conociendo
              </h1>
              <h2 className="mt-[10px] text-[200px] font-ClickerScript px-[15px]">
                M
              </h2>
              <h2 className="mt-[120px] mr-[100px] font-Alata">éxico</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
