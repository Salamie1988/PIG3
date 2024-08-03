import React from "react";
import CardRandom from "../Components/CardRandom";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";


const Body = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Crear lógica para manejar la búsqueda
  };

  return (
    <>
      {/* CONTAINER SEARCH */}
      <div className="container-search">
        <p>Cuál va a ser tu próxima aventura?</p>
        <Form // aca pasamos la primer props que esta en el componente form
          fields={[
            { type: "text", placeholder: "¿A dónde vamos?" },
            { type: "text", placeholder: "¿Cuándo?" },
          ]}
          buttonText="Buscar" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit} // tercera props
        />
      </div>

      {/* CONTANINER TOURS */}

      {/* DIV DE PRINCIPALES DESTINOS DEBES SER ALEATORIOS */}
      <div className="container-tours-random">
        <h3>PRINCIPALES DESTINOS</h3>
        <CardRandom />
      </div>

      {/* DIV DE RECOMENDACIONES AQUI VAN LOS DEMAS TOURS QUE SE OFRECEN */}
      <div className="container-recommendations">
        <h3>RECOMENDACIONES</h3>
        <CardTour />
      </div>
    </>
  );
};

export default Body;
