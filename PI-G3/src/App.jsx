import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Page/Detail";
import Home from "./Page/Home";
import SessionStart from "./Page/SessionStart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/sessionStart" element={<SessionStart />}/>  {/* <= descomentar aca para activar la pagina con el formulario de inicio de sesion */}
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
