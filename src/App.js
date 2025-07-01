import {useState, useEffect} from "react"
import NavBar from "./components/NavBar"

function App() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/burgers/")
      .then((r) => r.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
    </>
  )
}

export default App
