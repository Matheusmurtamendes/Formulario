const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')
let mandatory = document.querySelector('mandatory')
let input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
     
        setErrorFor(username, 'Campo Obrigatório')
        if(usernameValue === ''){
        input.addEventListener('click',() => mandatory.style.color = 'red');
        }
    } else {
      
        setSuccessFor(username)
    }

    if(emailValue === '') {
   
        setErrorFor(email, 'Campo Obrigatório')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {

        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
       
        setErrorFor(password, 'Campo Obrigatório')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
      
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
    
        setErrorFor(passwordtwo, 'Campo Obrigatório')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
      
        setSuccessFor(passwordtwo)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}