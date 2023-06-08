let user = [
    {
        name: 'Roman Reigns',
        phone: '050 - 999 - 99 - 99',
        password: 'Rore1572651568546'
    }
]

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    if(allInputs[1].checkValidity()){
        e.preventDefault()
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            password: allInputs[2].value
        }
        user.push(newUser)
        localStorage.setItem('user', JSON.stringify(user))
    }
    else{
        alert('Name is wrong!')
    }
})