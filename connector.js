import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { login } from "./auth.js";
import { register } from "./auth.js";
import { logout } from "./auth.js"



function connector() {
    //to setup the page for the first vizualization
    setupMainScreen();


    page("/", setupMainScreen)
    page("/login", login);
    page("/register", register);
    page.start();
}

function setupMainScreen() {
    let userIsLogged = sessionStorage.getItem("authToken");
    setNav(userIsLogged)
}

function setNav(userIsLogged) {
    render(navTemplate(userIsLogged), document.body);
}

function navTemplate(userIsLogged) {
    return html` <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">BACK TO MAIN</a>
    <ul class="navbar-nav ml-auto ">
    ${userIsLogged != null ? html`  <li class="nav-item">
    <a class="nav-link">Welcome, email</a>
</li>
<li class="nav-item">
    <a class="nav-link" @click=${logout} href="#">Logout</a>
</li>`: html`    <li class="nav-item">
<a class="nav-link" href="/login">Login</a>
</li>
<li class="nav-item">
<a class="nav-link" href="/register">Register</a>
</li>`}
         
    </ul>
</nav>`
}



connector()