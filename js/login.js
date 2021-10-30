
//Icon0
window.addEventListener("load", function() {

    // icono para poder interaccionar con el elemento
    showPassword = document.querySelector('.show-password');
    showPassword.addEventListener('click', () => {

      // elementos input de tipo password
    password1 = document.querySelector('.password1');


    if ( password1.type === "text" ) {
        password1.type = "password"

        showPassword.classList.remove('fa-eye-slash');
    } else {
        password1.type = "text"

        showPassword.classList.toggle("fa-eye-slash");
        }
    })
});


const nombre = document.getElementById("user")
const pass = document.getElementById("password1")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false

    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 6){
        warnings += `La contraseña debe ser mayor a 6 digitos <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})


/*Validacion
const enviar = document.getElementById("enviar");

enviar.addEventListener("click", validar);

function validar(e) {
  e.preventDefault();

  const campoNombre = document.getElementById("usuario");
  let valido = true;

  if (!campoNombre.value) {
    const nombreError = document.getElementById("usuarioError");
    nombreError.classList.add("visible");
    campoNombre.classList.add("invalido");
    nombreError.setAttribute("aria-hidden", false);
    nombreError.setAttribute("aria-invalid", true);
  }
  return valido;
}*/
