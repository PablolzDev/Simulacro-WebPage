import { Card } from "./render.controller"
import { CitiesController } from "./Cities.controller"
import { IWeather } from "../models/Iweather"

const url = 'http://localhost:3000'
const logoutButton = document.querySelector("#logoutButton")
const cardContainer = document.querySelector("#section-cards")

document.addEventListener("DOMContentLoaded", () => {
    if(!sessionStorage.getItem("token")){
        window.location.href = "/"
    }

})

logoutButton?.addEventListener("click", () => {
    console.log("hola");
    
    sessionStorage.removeItem("token")
    window.location.href = "/index.html"
})

async function showCities() {
    const citiesController = new CitiesController(url);
    const cities = await citiesController.getCities("cities");

    cities.forEach(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=899b0ebc77ca0bb621ca0d0cae498295`)
        const data: IWeather = await response.json()
        cardContainer?.appendChild(Card(city,data.main.temp))
    })
}
showCities()