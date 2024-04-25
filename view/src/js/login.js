'use strict'

const user = document.getElementById('user')
const password = document.getElementById('psswrd')
const button = document.getElementById('botao')

const validateLogin = () => {

    let login = false

    let userLogin = {
        name: 'gabriela',
        password: '123'
    }

    if(user.value == userLogin.name && password.value == userLogin.password){
        login = true
    }

    return login

}

const login = () => {
    
    let validate = validateLogin()

    // se for validado as informacoes de login, roda, senao aparece o balaozinho legal do ryan
    if(validate){
        window.location = './view/src/pages/home.html'
    } else {
        Swal.fire({
            position: 'center',
            timer: 2000,
            icon: 'warning',
            iconColor: '#6F6A66',
            heightAuto: false,
            showConfirmButton: false,
            width: '25rem',

            title: '<p class="text-2xl text-marromClaro" > Invalid user or password </p>',
            html: 'The user or password data are entered wrong. Try again.'
        })
    }

}

button.addEventListener('click', login)

user.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        login()
    }
})
password.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        login()
    }
})