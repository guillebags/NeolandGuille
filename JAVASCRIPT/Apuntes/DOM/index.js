export const initTemplate = () => {
  //creo la plantilla header, main, footer y la append al html
};

// En el otro documento hago
//import './style.css'
initTemplate();

// en el main necesitamos un controlador para saber qué queremos pintar, para ello me creo un route.js y exporto un initControler así

export const initController = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem("user") ? "Dashboard()" : "Login()";
      break;
    case "Pokemon":
      "Pokemon()";
      break;
    case "Dashboard":
      "Dashboard()";
      break;
    case "Topo":
      "Topo()";
    case "Login":
      "Login()";
      break;
    case "Memory":
      "Memory()";
      break;
  }
};

// todo esto lo llevamos al main
// el main quedaría así

initTemplate();
initController();

/* hacemos carpetas dentro de la carpeta "pages", como el dashboard, login, memory, pokemon, topo...
en cada una, creamos su js y css, el nombre siempre en mayúscula
ahora nos ponemos a crear los componentes (Dentro de la carpeta "components") Header y Footer
importamos en el js, el css del componente, para darle el tamaño por ejemplo.
vamos a hacer los templates lo primero en el js

tenemos una nav con tres imágenes dentro de la función template()
para pintarlo, hacemos una función
export const printTemplate = ()=>{
    document.querySelector("header").innerHTML = template()
}
y la metemos en el initTemplate de "utils"

!! Si no tenemos los elementos pintados no hacemos nada!

en el header, le metemos los event-listeners:
const addListeners = () => {
    const changeColor = document.getElementById("changeColor")
    changeColor.addEventListener("click", (e) => {
        console.log(e.target.id)
    })
}

!Siguiente evento
evento click del boton que nos lleva a los juegos

const buttonDashboard = document.getElementById("buttonDashboard")
buttonDashboard.addEventListener("click", (e) => {
    console.log(e)
})

const buttonLogout = document.getElementById("buttonLogout")
buttonLogout.addEventListener("click", (e) => {
    aqui pongo lo que quiero que haga cuando haga click
})

!vamos maquetando en el css
header {
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  ?para que se quede la barra de navegacion fija, se le pone fixed PERO en el main habrá que darle un padding-top  de la altura de la nav
  background-color: black;
  
  @media (max-width: 600px)  {
    flex-direction: column;
    ?igual esto con el flex wrap sirve
  }
  & nav {
    width: 30vw;
    display: flex y centrar
  }
  & nav img {
    width: 20%;
    margin: 0.8em;

  }
  & .logo {
    !CUIDADO CON EL TEMA DE LOS % PORQUE HACEN QUE SE DEFORME LA IMAGEN
    //width: 20%;
    //height: 100%;
    !mejor ponerle la altura del padre
    width: 20vw;
    height: 20vh;
    object-fit: cover;

  }
}
para fijar un footer:
position: fixed, dandole el width siempre,
bottom: 0;
!Pero habría quedarle un padding bottom al main, igual que con el header

?preparamos el dashboard
cloudinary es buena pagina para las imagenes
*/
