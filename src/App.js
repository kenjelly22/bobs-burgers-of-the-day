import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Menu from "./pages/Menu"
import Search from "./pages/Search"
import Create from "./pages/Create"
import Header from "./components/Header"

function App() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch("https://bobs-burgers-data.onrender.com/burgers/")
      .then((r) => r.json())
      .then((data) => setBurgers(data))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Menu burgers={burgers} setBurgers={setBurgers} />}
        />
        <Route path="/search" element={<Search setBurgers={setBurgers} />} />
        <Route path="/create" element={<Create setBurgers={setBurgers} />} />
      </Routes>
    </>
  )
}

export default App
