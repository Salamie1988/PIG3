import React from "react";
import ButtonSearch from "./ButtonSearch";

const Body = () => {
  return (
    <>
      <div className="container-search">
        <p>Cuál va a ser tu próxima aventura?</p>

        <input className="input" type="text" placeholder="A donde vamos?" />
        

        <input className="input" type="text" placeholder="Cuándo?" />
        <ButtonSearch>Buscar</ButtonSearch>
      </div>

      <div className="container-tours"> body 2</div>
    </>
  );
};

export default Body;