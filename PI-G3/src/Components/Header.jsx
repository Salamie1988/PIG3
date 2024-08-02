import React from "react";
import ButtonHeader from "./ButtonHeader";


const Header = () => {
  return (
    <div className="container-header">
      <div className="container-logo">
        <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        <p>EXPLORA ARGENTINA</p>
      </div>
      
      <div className="container-button">
       <ButtonHeader>INICIAR SESION</ButtonHeader>
       <ButtonHeader>CREAR CUENTA</ButtonHeader>
      </div>
    </div>
  );
};

export default Header;