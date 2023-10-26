import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteCar, getById } from "../services/carsData.js";
import { getUserData } from "../services/util.js";

const detailsTemplate = (car,isUser,onDelete) => html`
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${car.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${isUser()
                ?html`
                 <div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} href="javascript:void()0" class="button-list">Delete</a>
                </div>
                `
                :
                nothing
                }
               
            </div>
        </section>
`

export async function detailsPage(ctx){
    const id = ctx.params.id;
    const car = await getById(id);
    const user = getUserData();
    function isUser(){
        if(!user){
            return;
        }
        if(user._id === car._ownerId){
            return true;
        }else{
            return false;
        }
    }
    ctx.render(detailsTemplate(car,isUser,onDelete));

    async function onDelete(){
        const choice = confirm('Do you want to delete?');

        if(choice){
           await deleteCar(id);
           ctx.page.redirect('/all')
        }
    }
}


