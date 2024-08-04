import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="container-header">
      <div className="container-logo">
        <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        <p>EXPLORA ARGENTINA</p>
      </div>
      
      <div className="container-button">
      <Link to="/sessionStart"> {/* DESCOMENTAR para activar la pagina de inicio de sesion, este link activa la funcionalidad del boton iniciar sesion */}
      <Button className={"btn-header"}>INICIAR SESION</Button>
       </Link>
       <Button className={"btn-header"}>CREAR CUENTA</Button>
       
      </div>
    </div>
  );
};

export default Header;