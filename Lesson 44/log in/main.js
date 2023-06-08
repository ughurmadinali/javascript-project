let user = [
    {
        name: 'Roman Reigns',
        phone: '050 - 999 - 99 - 99',
        password: 'Rore1572651568546'
    }
]

const users = JSON.parse(localStorage.getItem('user'))


const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
})