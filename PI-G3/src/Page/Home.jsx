import React from "react";
import CardRandom from "../Components/CardRandom";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";


const Home = () => {
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

      {/* DIV DE EXPERIENCIAS DESTINOS DEBES SER ALEATORIOS */}
      <div className="container-tours-random">
        <h3 className="exp">Experiencias</h3>
        <p>Los destinos mas populares de Argentina, desde lugares historicos hasta maravillas naturales</p>
        <br />
        <img className="line1" src="/img/Line 1.png" alt="" />
        </div>
        <br />
        <div className="card-random">
         <CardRandom />
        <CardRandom></CardRandom>  
        </div>
       
        
      
      

      {/* DIV DE OFERTAS ESPECIALES, AQUI VAN LOS DEMAS TOURS QUE SE OFRECEN */}
      <div className="container-offers">
        <h3 className="offers">Ofertas especiales</h3>
        <br />
        <img className="line2" src="/img/Line 2.png" alt="" />
        <p className="offers">Consulta nuestras ofertas especiales y descuentos</p>
        <br />        
        <CardTour />
        <CardTour />
      </div>
    </>
  );
};

export default Home;
