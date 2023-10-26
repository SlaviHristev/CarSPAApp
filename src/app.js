import page from "../node_modules/page/page.mjs";
import { homePage } from "./views/homePage.js";
import { addRender } from "./middleware/render.js";
import { loginPage } from "./views/loginPage.js";
import { reigsterPage } from "./views/registerPage.js";
import { addListingsPage } from "./views/addListing.js";
import { allListingsPage } from "./views/allListings.js";
import { editListingsPage } from "./views/editListings.js";
import { myListingsPage } from "./views/myListings.js";
import { searchPage } from "./views/searchPage.js";
import { logout } from "./services/user.js";
import { detailsPage } from "./views/detailsPage.js";

page(addRender)
page('/', homePage);
page('/login', loginPage);
page('/register', reigsterPage);
page('/details/:id', detailsPage);
page('/create', addListingsPage);
page('/all', allListingsPage);
page('/edit/:id', editListingsPage);
page('/myListings', myListingsPage);
page('search', searchPage);
page('/logout', logout);
page('/byYear', searchPage);

page.start();
