const BASE_URL = "http://localhost:3001/burgers/"

const PRODUCTION_URL = "https://bobs-burgers-data.onrender.com/burgers/"

export async function deleteBurger(id) {
  const response = await fetch(`${BASE_URL}${id}`)
}

export const postRequest = (burgerData) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: burgerData.name,
      price: `$${burgerData.price}`,
    }),
  })
}
