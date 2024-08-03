import React from "react";
import Button from "./Button";


const Header = () => {
  return (
    <div className="container-header">
      <div className="container-logo">
        <img className="img-logo" src="/public/img/logo.png" alt="logo" />
        <p>EXPLORA ARGENTINA</p>
      </div>
      
      <div className="container-button">
       <Button className={"btn-header"}>INICIAR SESION</Button>
       <Button className={"btn-header"}>CREAR CUENTA</Button>
      </div>
    </div>
  );
};

export default Header;