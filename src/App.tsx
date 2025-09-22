import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Menu from "./pages/Menu"
import Search from "./pages/Search"
import Create from "./pages/Create"
import Header from "./components/Header"
import {Burger} from "./types"
import {getBurgers} from "./fetchHelper"

function App() {
  const [burgers, setBurgers] = useState<Burger[]>([])

  useEffect(() => {
    getBurgers()
      .then((data: Burger[]) => setBurgers(data))
      .catch((err) => console.error(err))
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
