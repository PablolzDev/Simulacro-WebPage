import { ICity } from "../models/ICity";
import { CitiesController } from "./Cities.controller";

const form = document.querySelector("#formAdd") as HTMLFormElement
const country = document.querySelector("#Npais") as HTMLInputElement
const city = document.querySelector("#Nciudad") as HTMLInputElement
const img = document.querySelector("#Nimagen") as HTMLInputElement
const desc = document.querySelector("#Ndescription") as HTMLTextAreaElement

const url = 'http://localhost:3000'
const citiesController = new CitiesController(url);

form.addEventListener("submit", async(e:Event) => {
    e.preventDefault()

    const newCity: ICity = {
        city: city.value,
        country: country.value,
        image: img.value,
        date: new Date(),
        cityDescription: desc.value
    }

try {
    const cityAdd = await citiesController.postCities("cities", newCity)
    alert("Se agrego la ciudad")
    form.reset()
    window.location.href = "../view/home.html"
    console.log(cityAdd);
    
} catch (error) {
    console.log(error);
    
}

})

