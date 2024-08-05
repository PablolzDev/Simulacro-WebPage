import { PageController } from "./controllers/Page.controller";

const url = 'https://reqres.in/api/'

const email = document.querySelector("#email") as HTMLInputElement
const password = document.querySelector("#password") as HTMLInputElement
const form = document.querySelector("#formLogin") as HTMLFormElement


form.addEventListener('submit', async (e:Event) => {
    e.preventDefault();

    const user = {
        email: email.value,
        password: password.value,
    }
    try {
        const pageController =new PageController(url);
        const responseOfLogin = await pageController.login(user,'login')
        console.log(responseOfLogin.token);
        sessionStorage.setItem('token',responseOfLogin.token)
        
        const getToken = sessionStorage.getItem('token');
        if (getToken){
          alert('Se inicia la sesion')
          window.location.href = '../src/view/home.html'
        }
        
      } catch (e) {
        console.log(e);
        
      }

})