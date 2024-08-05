// listCities.ts
import { CitiesController } from "./Cities.controller";

export async function renderCities() {
    const url = 'http://localhost:3000';
    const citiesController = new CitiesController(url);

    try {
        const cities = await citiesController.getCities("/cities");
        renderCities()
        console.log(cities);
    } catch (error) {
        console.error('Error fetching cities:', error);
    }
}