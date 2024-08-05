import { ICity } from "../models/ICity";
import 'tailwindcss/tailwind.css'; // Asegúrate de importar Tailwind CSS en tu proyecto

export const Card = (props: ICity, temperature: number): HTMLElement => {
    let { id, city, country, image } = props;

    const cardContainer = document.createElement("article") as HTMLElement;
    cardContainer.className = "max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white";

    const img = document.createElement("img") as HTMLImageElement;
    img.className = "w-full h-48 object-cover";
    img.src = image;

    const infoContainer = document.createElement("div") as HTMLElement;
    infoContainer.className = "px-6 py-4";

    const cardTitle = document.createElement("h4") as HTMLHeadElement;
    cardTitle.className = "font-bold text-xl mb-2";
    cardTitle.innerText = city;

    const cardCountry = document.createElement("p") as HTMLParagraphElement;
    cardCountry.className = "text-base text-gray-400";
    cardCountry.innerText = country;

    const temp = document.createElement("p") as HTMLElement;
    temp.className = "text-base text-yellow-400";
    temp.innerText = `${String((temperature - 273.15).toFixed(2))} °C`;

    const crossContainer = document.createElement("span");
    crossContainer.className = "absolute top-0 right-0 mt-2 mr-2 text-red-500 cursor-pointer";
    crossContainer.innerHTML = `<i product-id="${id}" class="bi bi-x-circle-fill"></i>`;

    infoContainer.append(cardTitle, cardCountry, temp);
    cardContainer.append(img, infoContainer, crossContainer);

    return cardContainer;
};
