import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchByYear } from "../services/carsData.js";

    function setupSearchPage(ctx){
    const searchInput = document.getElementById('search-input');
    const button = document.querySelector('.button-list');
    button.addEventListener('click', async () => {
        const query = searchInput.value;
        console.log('ck');
        const searchResults = await searchByYear(query);
        ctx.render(searchPageTemplate(searchResults));
    })
    }


const searchPageTemplate = (cars,searchResults) => html`
<section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list">Search</button>
            </div>

            
            ${cars.length > 0
            ?html`
            <h2>Results:</h2>
            <div class="listings">
            ${cars.map(carsTemplate)}`
            : html`
            <p class="no-cars"> No results.</p>
            `
            }
            </div>
        </section>
`

const carsTemplate = (car) => html`
                <div class="listing">
                    <div class="preview">
                        <img src="${car.imageUrl}">
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`


export async function searchPage(ctx){
    const cars = [];
    ctx.render(searchPageTemplate(cars));
    setupSearchPage(ctx);
}

