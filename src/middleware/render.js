import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAccessToken, getUserData } from "../services/util.js";

const root = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/all">All Listings</a>
                <a href="/byYear">By Year</a>
                ${
                    user
                    ?html`
                     <div id="profile">
                    <a>Welcome ${user.username}</a>
                    <a href="/myListings">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                    </div>
                    `
                    :html`
                    <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    </div>
                    `
                } 
            </nav>
`

function ctxRender(content){
    render(content, root)
};

export function addRender(ctx,next){
    render(navTemplate(getUserData()), header);
    ctx.render = ctxRender;
    next();
}