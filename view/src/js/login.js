const button = document.getElementById('login')

const getUsuarios = async() => {

    const urlLogin = 'https://back-login.vercel.app/usuarios'
    const listarUsers = await fetch(urlLogin)
    const objUsers = await listarUsers.json()

    return objUsers
}

const validarLogin = async () => {

    const email = document.getElementById('user').value
    const password = document.getElementById('psswrd').value

    const users = await getUsuarios()


    if (email == '' || password == ''){
        Swal.fire({
            timer: 2000,
            title: '<p class="text-2xl text-secundary font-fontP"> É necessário preencher todos os dados <p>',
            icon: 'warning',
            iconColor: '#A79E8F',
            showConfirmButton: false,
            width: '25rem',
            padding: '0 0 28px 0',
            heightAuto: false,
        })
    } else {

        let validaUser = false

        users.forEach(user => {
        
            if(user.email == email && user.senha == password){
                validaUser = true

                window.location.href = './view/src/pages/home.html'
            }
        })

        if (!validaUser){
            Swal.fire({
            timer: 2000,
            title: '<p class="text-2xl text-secundary font-fontP"> Email ou senha incorretos <p>',
            icon: 'warning',
            iconColor: '#A79E8F',
            showConfirmButton: false,
            width: '25rem',
            padding: '0 0 28px 0',
            heightAuto: false,
        })
        }

    }

}

button.addEventListener('click', validarLogin)

user.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        validarLogin()
    }
})
password.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        validarLogin()
    }
})