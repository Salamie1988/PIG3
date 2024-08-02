import React from "react";
import ButtonSearch from "./ButtonSearch";
import CardTour from "./CardTour";
import CardRandom from "./CardRandom";

const Body = () => {
  return (
    <>
    {/* CONTAINER SEARCH */}
      <div className="container-search">
        <p>Cuál va a ser tu próxima aventura?</p>
        <input className="input" type="text" placeholder="A donde vamos?" />
        <input className="input" type="text" placeholder="Cuándo?" />
        <ButtonSearch>Buscar</ButtonSearch>
      </div>
    
    
    {/* CONTANINER TOURS */}

    {/* DIV DE PRINCIPALES DESTINOS DEBES SER ALEATORIOS */ }
      <div className="container-tours-random"> 
        <h3>PRINCIPALES DESTINOS</h3>
        <CardRandom/>
      </div>

      {/* DIV DE RECOMENDACIONES AQUI VAN LOS DEMAS TOURS QUE SE OFRECEN */}

      
      <div className="container-recommendations">
        <h3>RECOMENDACIONES</h3>
        <CardTour/>
      </div>
    </>
  );
};

export default Body;