import {useState, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from "./pages/Menu"
import Search from "./pages/Search"
import Create from "./pages/Create"
import NavBar from "./components/NavBar"

function App() {
  const [burgers, setBurgers] = useState([])
  const [burgerList, setBurgerList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/burgers/")
      .then((r) => r.json())
      .then((data) => setBurgers(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route
          path="/search"
          element={
            <Search burgerList={burgerList} setBurgerList={setBurgerList} />
          }
        />
        <Route
          path="/create"
          element={<Create setBurgerList={setBurgerList} />}
        />
      </Routes>
    </Router>
  )
}

export default App
