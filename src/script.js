function toogle(e) {
    let login = document.getElementById('login')
    let signUp = document.getElementById('sign-up')

    let inputFields = [...document.getElementsByClassName('hide')]
    if (e.target.id === 'login') {
        inputFields.map(element => element.style.display = 'none')
    }
    else {
        inputFields.map(element => element.style.display = 'block')
    }
    [login.id, signUp.id] = [signUp.id, login.id]
    login.innerHTML = 'Sign Up'
    signUp.innerHTML = 'Login'

}