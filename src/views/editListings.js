import { html } from "../../node_modules/lit-html/lit-html.js";
import { editCar, getById } from "../services/carsData.js";
import { createSubmitHandler } from "../services/util.js";


const editListingsTemplate = (car, onSubmit) => html`
<section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit}id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`


async function onSubmit(ctx,data,event){
    event.preventDefault();
    const id = ctx.params.id;
    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!')
    }

    await editCar(id, {
        brand:data.brand,
        model:data.model,
        description:data.description,
        year:data.year,
        imageUrl:data.imageUrl,
        price:data.price
    });
    event.target.reset();
    ctx.page.redirect(`/details/${id}`)
}



export async function editListingsPage(ctx){
    const id = ctx.params.id;
    const car = await getById(id);

    ctx.render(editListingsTemplate(car,createSubmitHandler(ctx, onSubmit)));
}





// async function populateFields(ctx){
//     const id = ctx.params.id;
//     const car = await getById(id);
//     if(car){
//         const form = document.getElementById("edit-form");

//         form.elements.brand.value = car.brand;
//         form.elements.model.value = car.model;
//         form.elements.description.value = car.description;
//         form.elements.year.value = car.year;
//         form.elements.imageUrl.value = car.imageUrl;
//         form.elements.price.value = car.price;
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("edit-form");
//     if (form) {
//       populateFields(ctx);
//       form.addEventListener("submit", async (event) => {
//         await onSubmit(ctx, new FormData(form), event);
//       });
//     }})