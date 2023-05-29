// DOM 
// const form = document.getElementById('form')

const userData = {
    name: 'USer',
    email: 'test@gmail.com',
    nikName: 'venom_',
    password: '23456'
}

form.onsubmit = (e) => {
    e.preventDefault()   // БРАУЗЕРДИ ТОКТОТУУ
    const formData = e.target
    const formEmail = formData.email.value
    console.log('formEmail: ', formEmail);
    const formPassword = formData.password.value
    console.log('formPassword: ', formPassword);

    if (userData.email === formEmail && userData.password === formPassword) {
        alert('WELCOME ' +userData.name)
        window.location.href = 'https://www.google.com/'
    }
    else {
        alert (' Error email or password')
    }
}


// DOM ELEMENTY
const btnMinus = document.getElementById('minus')
const btnPlus = document.getElementById('plus')
const pText = document.getElementById('text-count')
const price = document.getElementById('price')

//ONCLICK
btnPlus.onclick = () => {
    pText.innerText = parseInt(pText.innerText) + 1
    const tPPrice = parseInt(price.innerText)
    price.innerText = 500 * parseInt(pText.innerText) + ' $'
}



btnMinus.onclick = () => {
    if (parseInt(pText.innerText) > 0) {
    
        pText.innerText = parseInt(pText.innerText) - 1
    }
    const allTotal = parseInt(price.innerText)
    price.innerText = allTotal - 500 + ' $'
}
// if else (parseInt(price.innerText) > 0) {
//     price.innerText = parseInt(price.innerText) - 1
// }


