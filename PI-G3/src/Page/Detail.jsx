import React from "react";

const Detail = () => {
  return (
    <main className="container-detail">
      {/* ESTA SECTION ES VA DESDES EL TITULO HASTA EL PRECIO */}
      <section className="section-one">
        <h2>Parque Nacional y Viaje en Tren Fin del Mundo Tour Guiado</h2>
        <div className="img-detail">
          <div>
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" />
          </div>
          <div className="img-small">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" />
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/03/52/47.jpg" alt="tren" />
          </div>
        </div>
        <div className="info-booking">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <div className="tarj-booking">

          </div>
        </div>
      </section>

      <img src="/PI-G3/public/img/bariloche fondo.jpeg.jpg" alt="" />
    </main>
  );
};

export default Detail;
