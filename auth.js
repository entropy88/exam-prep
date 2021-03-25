import page from "//unpkg.com/page/page.mjs";

export async function login() {

    // let form =e.target.parentNode;
    // let formData=new FormData(form);
    // let email=formData.get("email");
    // let password=formData.get("password");
    // let reqBody={email, password}

    let reqBody = { email: "admin@abv.bg", password: "admin" }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(reqBody)
    })
    let reply = await response.json();
    console.log(reply)
    sessionStorage.setItem("userId", reply._id);
    sessionStorage.setItem("authToken", reply.accessToken);
    sessionStorage.setItem("email", reply.email);
    page.redirect("/")
}


export async function register() {

    // let form =e.target.parentNode;
    // let formData=new FormData(form);
    // let email=formData.get("email");
    // let password=formData.get("password");
    //let rePass=formData.get("rePass")
    // let reqBody={email, password}

    let reqBody = { email: "random@abv.bg", password: "random" }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(reqBody)
    })
    let reply = await response.json();
    console.log(reply)
    sessionStorage.setItem("userId", reply._id);
    sessionStorage.setItem("authToken", reply.accessToken);
    sessionStorage.setItem("email", reply.email);
    page.redirect("/")
}

export async function logout() {
    // e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(sessionStorage.getItem("authToken"))

    myHeaders.append("X-Authorization", sessionStorage.getItem("authToken"))

    let emptyRes = await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: myHeaders
    })

    console.log("response is empty")
    sessionStorage.clear();
    console.log("this should redirect")
    page.redirect("/")
}