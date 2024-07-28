import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/shared/header/Header"
import Footer from "./components/shared/footer/Footer"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>

  )
}

export default App
