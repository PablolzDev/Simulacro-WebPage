const logoutButton = document.querySelector("#logoutButton")

document.addEventListener("DOMContentLoaded", () => {
    if(!sessionStorage.getItem("token")){
        window.location.href = "/"
    }

})

logoutButton?.addEventListener("click", () => {
    console.log("hola");
    
    sessionStorage.removeItem("token")
    window.location.href = "/index.html"
})