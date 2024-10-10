const Mazamitla = () => {
  const url1 =
    "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Jalisco_Mazamitla_Calles_BIC-ok.jpg";

  const url2 =
    "https://cdn.shopify.com/s/files/1/2492/3552/files/6-31_large.jpg?v=1517804215";

  const url3 =
    "https://www.turitips.com/wp-content/uploads/2024/07/Mazamitla-Rustic-800x445.jpg";

  const urlLocal =
    "https://i0.wp.com/mayacomunicacion.com.mx/wp-content/uploads/2024/07/Festival-del-Venado-Mazamitla-Arte-y-cultura-gratis-en-el-Pueblo-Magico-mas-acogedor-de-Jalisco-e1720293164266.png?fit=1024%2C560";

  const urlNacionalLocal =
    "https://scontent.fcyw4-1.fna.fbcdn.net/v/t39.30808-6/461505289_544934684720872_5036977045359395617_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gh6W50zyjlUQ7kNvgFvWqQy&_nc_ht=scontent.fcyw4-1.fna&_nc_gid=A1KYc2jmNcm1QNx9gNpw1MF&oh=00_AYCAmZnKsnhJP6Uq83l8IsWLOiMuGt43DNGutMwlgv7ljw&oe=670DF08A";

  const shop = [
    {
      imgSrc:
        "https://programadestinosmexico.com/wp-content/uploads/2023/10/COMPRAS-MAZAMITLA-1.jpg",
    },
    {
      imgSrc:
        "https://programadestinosmexico.com/wp-content/uploads/2023/10/COMPRAS-MAZAMITLA-1.jpg",
    },
    {
      imgSrc:
        "https://programadestinosmexico.com/wp-content/uploads/2023/10/COMPRAS-MAZAMITLA-1.jpg",
    },
  ];

  const toDo = [
    {
      title: "Renta de cuatrimotos",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtV-RZANlVcSUoBpcnjcveQrY2WGRf33amw&s",
    },
    {
      title: "Paseo en caballo",
      imgSrc:
        "https://mazamitlamagico.com.mx/img/mazamitlamagico-paseo_a_caballo-actividad-631.jpg",
    },
    {
      title: "Bar de 11 a 11",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVC6zTNuiYPqFifmyEu1We0vrXwC_fdMMgtg&s",
    },
    {
      title: "Camino Real del Tigre",
      imgSrc:
        "https://lh5.googleusercontent.com/p/AF1QipOvkGJRfOFlG4tDXwWj6p941uCznTzkN819BjU=w1080-h624-n-k-no",
    },
    {
      title: "Paseo del Ciervo",
      imgSrc: "https://i.ytimg.com/vi/k_XNTU0YjNc/maxresdefault.jpg",
    },
    {
      title: "Plaza Municipal",
      imgSrc:
        "https://i0.wp.com/grupopresidente.com.mx/wp-content/uploads/2020/07/mazamitla-2.jpg?resize=799%2C533&ssl=1",
    },
  ];

  const hotel = [
    {
      hotelName: "Camino Real",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4Wcj70xGgV6fIWB4TBIgEZ2n-UmRVIHlvA&s",
    },
    {
      hotelName: "Bellavista",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuq9fRo1sBhqg1qGTeue8ccE9SjJo5_q0Sgw&s",
    },
    {
      hotelName: "Las Morenas",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4U-rs9X2yN1dNYG9dYFHKZ9AFE4s27QqIw&s",
    },
    {
      hotelName: "Chalet Mágica",
      imgSrc:
        "https://a0.muscache.com/im/pictures/a958d39b-d5fe-4f84-926e-cebf819379b9.jpg",
    },
    {
      hotelName: "Chalet Nórdica",
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1044212231999338910/original/34a53479-9470-43dc-8266-48015906a4ab.jpeg?im_w=720",
    },
  ];

  return (
    <>
      {/* Introducción */}
      <section
        style={{ backgroundImage: `url(${url1})` }}
        className="max-w-full h-screen flex bg-cover bg-center"
      >
        {/* Fondo y contenido */}
        <div className="h-full w-full backdrop-blur-sm bg-[#20202070] flex flex-col justify-center items-center p-6">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#ededed] font-Anton mb-4 text-center">
            Mazamitla
          </h2>
          <label className="block text-lg text-gray-200 text-center mb-4">
            AROMA FRUTAL Y CABAÑAS DE MADERA
          </label>
          <p className="text-gray-300 mb-4 text-center max-w-3xl">
            Este Pueblo Mágico está enclavado en el corazón de la Sierra del
            Tigre con vegetación boscosa, abundantes arroyos y caídas de agua.
            Es un bello pueblo de montaña lleno de historia, tradición y ensueño
            que muchas veces, al ser cubierto de neblina durante las tardes,
            adquiere un carácter místico.
          </p>
          <p className="text-gray-300 mb-4 text-center max-w-3xl">
            Su gente amable, su arquitectura, sus fiestas tradicionales, sus
            festividades culturales, su artesanía y los deportes extremos harán
            de su visita a Mazamitla una vivencia mágica. Este pueblo de montaña
            goza de un fresco y soleado clima con una temperatura media anual
            que ronda los 21°C.
          </p>
          <p className="text-gray-300 mb-4 text-center max-w-3xl">
            Se ubica a 135 km (2 horas y media) de Guadalajara, a 128 km de
            Colima y a 251 km (4 horas y cuarto) de León.
          </p>
          <button className="w-[300px] h-[50px] mt-4 bg-[#545454] text-white py-2 rounded-[20px] hover:bg-green-700 transition duration-300">
            Ver Galería
          </button>
        </div>
      </section>
      {/* Gastronomía típica */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Gastronomía Típica</h2>
          <p className="mb-4">
            La gastronomía de Mazamitla es un reflejo de su rica tradición
            cultural y su ubicación geográfica. Aquí, podrás deleitarte con
            platillos típicos como el pozole, elaborado con maíz hominy y carne
            de cerdo, y la birria, una deliciosa carne de cordero cocida a fuego
            lento con especias.
          </p>
          <p className="mb-4">
            No te puedes perder los dulces típicos, como el ate de fruta y los
            tradicionales buñuelos, que se preparan especialmente durante las
            festividades locales.
          </p>
          <p className="mb-4">
            Además, las quesadillas y los tacos de carne asada son imperdibles,
            perfectos para disfrutar al aire libre en un ambiente acogedor. ¡Ven
            y disfruta de una experiencia culinaria inolvidable!
          </p>
        </div>
      </section>

      {/* Tierra de artesanos */}
      <section
        style={{ backgroundImage: `url(${url2})` }}
        className="max-w-full h-auto flex bg-cover bg-center"
      >
        {/* Fondo y contenido */}
        <div className="h-[100vh] w-full backdrop-blur-sm bg-[#20202070] flex flex-col justify-center items-center p-6">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#ededed] font-Anton mb-4 text-center">
            Tierra de artesanos
          </h2>
          <p className="text-gray-300 mb-4 text-center max-w-3xl">
            Los artesanos locales utilizan en sus creaciones materiales 100%
            naturales en artículos de talabartería (cintos, huaraches y estuches
            para navajas); trabajos de madera como casitas, ceniceros,
            servilleteros, sillas con asiento de ixtle de maguey, camas,
            alacenas y objetos decorativos en cantera.
          </p>

          {/* Cards */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 mt-6">
            {shop.map((place, index) => (
              <div
                key={index}
                className="w-[250px] h-[300px] relative overflow-hidden bg-black rounded-[20px]"
              >
                {/* Cover */}
                <img
                  src={place.imgSrc}
                  alt="Tienda Mazamitla"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosas por hacer */}
      <section>
        <div className="h-[100vh] w-full bg-[#545454] flex flex-col justify-center items-center p-6">
          <h2 className="text-5xl lg:text-7xl text-[#ededed] font-Oswald mb-4 text-center">
            ¿Buscando qué hacer?
          </h2>
          {/* Cards */}
          <div className="flex flex-wrap justify-center h-[100vh] m-auto mt-[20px] max-w-[100%]">
            {toDo.map((toDo, index) => (
              <div key={index} className="w-[200px] m-[10px]">
                {/* Card */}
                <div className="w-[100%] h-[500px] relative overflow-hidden bg-black rounded-[20px]">
                  {/* Cover */}
                  <img
                    src={toDo.imgSrc}
                    alt={toDo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-300 bg-opacity-80">
                    <h2 className="text-white text-lg font-Oswald text-center">
                      {toDo.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Calendario Local */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          {/* Contenido de texto */}
          <div className="lg:w-1/2 px-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">Calendario Local</h2>
            <p className="mb-4">
              En Mazamitla, el calendario local está repleto de eventos que
              celebran la cultura y las tradiciones de la región. Cada mes, se
              llevan a cabo diversas actividades que incluyen ferias, mercados
              de artesanías y festivales gastronómicos que atraen tanto a
              locales como a visitantes.
            </p>
            <p className="mb-4">
              Algunos eventos destacados incluyen la Feria de la Manzana en
              agosto y el Festival de la Nieve en diciembre, donde podrás
              disfrutar de productos locales y actividades para toda la familia.
            </p>
          </div>

          {/* Imagen con efecto hover */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 relative group">
            <img
              src={urlLocal}
              alt="Evento en Mazamitla"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:brightness-50"
            />

            {/* Texto descriptivo que aparece al hacer hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
                Feria del Venado
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Celebraciones Nacionales */}
      <section className="py-12 bg-gray-600 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start">
          {/* Contenido de texto */}
          <div className="lg:w-1/2 px-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Celebraciones Nacionales
            </h2>
            <p className="mb-4">
              En Mazamitla, las celebraciones nacionales también se viven con
              gran fervor. Eventos como el Día de la Independencia el 16 de
              septiembre y la Revolución Mexicana el 20 de noviembre son
              conmemoraciones que unen a la comunidad en festividades llenas de
              orgullo y tradición.
            </p>
            <p className="mb-4">
              Durante estas celebraciones, podrás disfrutar de desfiles,
              exhibiciones culturales y fuegos artificiales, que iluminan el
              cielo y celebran la identidad mexicana.
            </p>
          </div>

          {/* Imagen con efecto hover */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 relative group">
            <img
              src={urlNacionalLocal}
              alt="Celebraciones Nacionales en Mazamitla"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:brightness-50"
            />

            {/* Texto descriptivo que aparece al hacer hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
                Así se vive el 16 de Septiembre en Mazamitla
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospedaje */}
      <section
        style={{ backgroundImage: `url(${url3})` }}
        className="max-w-full h-auto flex bg-cover bg-center"
      >
        <div className="h-[100vh] w-full backdrop-blur-sm bg-[#20202070] flex flex-col justify-center items-center p-6">
          <h2 className="text-5xl lg:text-7xl text-[#ededed] font-Oswald mb-4 text-center">
            Hospédate aquí
          </h2>
          {/* Cards */}
          <div className="flex flex-wrap justify-center h-[100vh] m-auto mt-[20px] max-w-[100%]">
            {hotel.map((hotelArr, index) => (
              <div key={index} className="w-[200px] m-[10px]">
                {/* Card */}
                <div className="w-[100%] h-[300px] relative overflow-hidden bg-black rounded-[20px]">
                  {/* Cover */}
                  <img
                    src={hotelArr.imgSrc}
                    alt={hotelArr.hotelName}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-300 bg-opacity-80">
                    <h2 className="text-white text-lg font-Oswald text-center">
                      {hotelArr.hotelName}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-[300px] h-[50px] mt-4 bg-[#a48058] text-white py-2 hover:bg-green-700 transition duration-300 rounded-[20px]">
            Ver Más
          </button>
        </div>
      </section>
    </>
  );
};

export default Mazamitla;
