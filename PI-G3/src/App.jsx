import { Route, Routes } from "react-router-dom";
import Body from  "./Page/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Detail from "./Page/Detail";


function App() {
 

  return (
    <>
  <div>
  <Header/>
   <Routes>
    <Route path="/" element={<Body/>}/>
    <Route path="/detail" element={<Detail/>}/>
   </Routes>
  <Footer/>
  </div>
    </>
  )
}

export default App
