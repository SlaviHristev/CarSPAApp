import { html } from "../../node_modules/lit-html/lit-html.js";
import { create } from "../services/carsData.js";
import { createSubmitHandler } from "../services/util.js";


const addListingTemplate = (onSubmit) => html`
        <section id="create-listing">
            <div class="container">
                <form @submit=${onSubmit} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`
async function onSubmit(ctx,data,event){
    event.preventDefault();
    if(Object.values(data).some(x => x == '')){
        return alert('All fields are required!')
    }

    await create({
        brand:data.brand,
        model:data.model,
        description:data.description,
        year:data.year,
        imageUrl:data.imageUrl,
        price:data.price
    });
    event.target.reset();
    ctx.page.redirect('/all')
}

export async function addListingsPage(ctx){
    ctx.render(addListingTemplate(createSubmitHandler(ctx, onSubmit)));
}