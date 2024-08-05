import { ICity } from "../models/ICity";
import { CitiesController } from "./Cities.controller";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#formAdd") as HTMLFormElement | null;
    if (!form) {
        console.error("Form element not found");
        return;
    }

    const country = document.querySelector("#Npais") as HTMLInputElement | null;
    const city = document.querySelector("#Nciudad") as HTMLInputElement | null;
    const img = document.querySelector("#Nimagen") as HTMLInputElement | null;
    const desc = document.querySelector("#Ndescription") as HTMLTextAreaElement | null;

    if (!country || !city || !img || !desc) {
        console.error("One or more form elements not found");
        return;
    }

    const url = 'http://localhost:3000';
    const citiesController = new CitiesController(url);

    form.addEventListener("submit", async (e: SubmitEvent) => {
        e.preventDefault();

        const newCity: ICity = {
            city: city.value,
            country: country.value,
            image: img.value,
            date: new Date(),
            cityDescription: desc.value
        };

        try {
            const cityAdd = await citiesController.postCity("/cities", newCity);
            alert("Se agregó la ciudad");
            form.reset();
            window.location.href = "../view/home.html";
            console.log(cityAdd);
        } catch (error) {
            console.error('Error adding city:', error);
            alert('Error al agregar la ciudad. Por favor, intente de nuevo.');
        }
    });
});