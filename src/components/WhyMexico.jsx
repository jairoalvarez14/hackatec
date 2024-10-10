const WhyMexico = () => {
  return (
    <>
      <section className="flex flex-col max-w-full h-screen bg-[#ededed] p-8 md:p-16">
        <div className="flex ml-[170px] items-center mb-10">
          <div className="flex items-center">
            <h2 className="font-Brittany text-[101px]">¿</h2>
            <h2 className="text-[51px] font-Anton mt-[20px] md:mt-[50px]">
              Por qué México
            </h2>
            <h2 className="font-Brittany text-[101px]">?</h2>
          </div>
        </div>

        <div className="flex justify-center items-center text-[30px] text-black font-Oswald text-justify">
          <div className="max-w-prose leading-relaxed space-y-4">
            <p>
              México es un destino turístico que cuenta con una gran diversidad
              de recursos naturales, enorme riqueza cultural e histórica,
              reconocida gastronomía a nivel mundial, privilegiada ubicación
              geográfica y clima excepcional, situación que lo posiciona como un
              destino atractivo.
            </p>
            <p>
              El país se encuentra en primer lugar en el continente americano y
              en sexto a nivel mundial en sitios declarados Patrimonio de la
              Humanidad por la UNESCO, en las categorías de patrimonio cultural,
              natural y mixto. La gastronomía mexicana también fue distinguida
              como Patrimonio Inmaterial de la Humanidad por su gran diversidad
              de platillos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyMexico;
