const inputsFormulario = document.querySelectorAll(".input")

const confirmarBotao = document.querySelector("button")
const form = document.getElementById("form")

confirmarBotao.addEventListener("click", () =>{

    form.addEventListener("submit", (e)=>{
        e.preventDefault();


    })

    inputsFormulario.forEach((input) => {

        const campoOb =
            input.parentElement.querySelector(".campo-ob");

        if(!input.value) {
            input.classList.add("invalido");
            campoOb.innerHTML = "campo obrigatório";
            
        } else {
            input.classList.remove("invalido");
            campoOb.style.display = "block"
        }
    })
})

 