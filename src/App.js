import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import "./App.css"
import Menu from "./pages/Menu"
import Search from "./pages/Search"
import Create from "./pages/Create"
import Header from "./components/Header"
// import ErrorPage from "./pages/ErrorPage"

function App() {
  const [burgers, setBurgers] = useState([])
  // const [error, setError] = useState

  useEffect(() => {
    fetch("https://bobs-burgers-data.onrender.com/burgers/")
      .then((r) => r.json())
      .then((data) => setBurgers(data))
      .catch((error) => console.error(error))
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
        {/* <Route path="*" element={<ErrorPage />}></Route> */}
      </Routes>
    </>
  )
}

export default App
