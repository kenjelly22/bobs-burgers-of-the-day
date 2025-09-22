const BASE_URL = "http://localhost:3001/burgers/"

const PRODUCTION_URL = "https://bobs-burgers-data.onrender.com/burgers/"

const API_URL =
  process.env.NODE_ENV === "production" ? PRODUCTION_URL : BASE_URL

export async function getBurgers() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch burgers")
  }

  return response.json()
}

export async function createBurger(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      ...data,
      price: `$${data.price}`,
    }),
  })
  return response.json()
}

export async function searchBurgers(searchTerm) {
  try {
    const response = await fetch(
      "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/"
    )
    if (!response.ok) throw new Error("Failed to fetch burgers")

    const burgers = await response.json()

    const formatted = burgers.map((burger) => ({
      ...burger,
      name: burger.name
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    }))

    return formatted.filter((burger) =>
      burger.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function addBurger(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
  return response.json()
}

export async function deleteBurger(id) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error(`Failed to delete burger with id ${id}`)
  }

  return response.json()
}
