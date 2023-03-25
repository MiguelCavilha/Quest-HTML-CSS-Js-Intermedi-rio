const inputsFormulario = document.querySelectorAll(".input")
const confirmarBotao = document.querySelector("button")

confirmarBotao.addEventListener("click", (e) => {
    e.preventDefault()

   

    inputsFormulario.forEach((input) => {

        const campoOb =
            input.nextElementSibling;

        if (input.value==="") {
            input.classList.add("invalido");
            campoOb.style.display = "block";

        } else {
            input.classList.remove("invalido");
            campoOb.style.display = "none";
        }
    })

    inputsFormulario.forEach((input) => {


        if (!input.value) {
            input.classList.remove("valido");
    
        } else {
            input.classList.add("valido");
        }
    })




})

