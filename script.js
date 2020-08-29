const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastName')
const inputEmail = document.getElementById('email')
const inputNumber = document.getElementById('number')
const nombreMensaje = document.getElementById("nombreMensaje")
const nombreMensaje1 = document.getElementById("nombreMensaje1")
const nombreMensaje2 = document.getElementById("nombreMensaje2")
const nombreMensaje3 = document.getElementById("nombreMensaje3")

function validarFormulario(){
    event.preventDefault()
	let errores = false
 if(inputName.value.length < 2){
    inputName.classList.add("alert")
		nombreMensaje.innerText='Debe contener al menos dos letras'	  
        errores = true  
 } else {
     inputName.classList.remove('alert')
		 nombreMensaje.innerText=''
 }
 if(inputLastName.value.length < 2){
    inputLastName.classList.add("alert")
		nombreMensaje1.innerText='Debe contener al menos dos letras'
        errores = true  
 } else {
    inputLastName.classList.remove('alert')
		nombreMensaje1.innerText=''
 }
 console.log(inputEmail.value.includes('@'))
 console.log(inputEmail.value.includes('.'))
 if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.') ) {
     inputEmail.classList.add("alert")
		 nombreMensaje2.innerText='Debe ser una dirección de correo electronico'
         errores = true  
 } else {
    inputEmail.classList.remove('alert')
		nombreMensaje2.innerText=''
 }
 if (inputNumber.value.length < 10) {
    inputNumber.classList.add("alert")
		nombreMensaje3.innerText='El numero celular debe contener al menos 10 dígitos'
        errores = true  
 } else {
    inputNumber.classList.remove('alert')
		nombreMensaje3.innerText=''
 }
 if (errores == false) {
	swal({
		title: "Buen Trabajo!",
		text: "Formulario completado",
		icon: "success",
		button: "Continuar",
    })
    .then((value) => {
        window.open('https://juans1lva.github.io/Calculadora/', '_self'); 
    })
 } 
 else {
	swal("Error!", "Faltan campos por completar:", "warning");
 }
}