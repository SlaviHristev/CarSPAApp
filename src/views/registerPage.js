import { html } from "../../node_modules/lit-html/lit-html.js";
import * as user from '../services/user.js'
import { createSubmitHandler } from "../services/util.js";


const registerTemplate = (onSubmit) => html`
        <section id="register">
            <div class="container">
                <form @submit=${onSubmit} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`
async function onSubmit(ctx,data,event){
    event.preventDefault();
    await user.register(data.username, data.password);
    event.target.reset();
    ctx.page.redirect('/all');
    
}

export async function reigsterPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(ctx,onSubmit)));
}