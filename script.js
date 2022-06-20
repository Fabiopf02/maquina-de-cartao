const buttons = document.querySelectorAll('.button')
const valueInput = document.querySelector('.value-input')
const clock = document.querySelector('.clock')
let inputValue = ''

function formatMoney(value) {
  return Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(value)
}

const actions = {
  add: (value) => {
    inputValue += value
    valueInput.textContent = formatMoney(inputValue)
  },
  delete: () => {
    inputValue = inputValue.slice(0, inputValue.length - 1)
    valueInput.textContent = formatMoney(inputValue)
  },
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const text = button.innerText
    const attributeAction = button.getAttribute('data-action')
    const action = actions[attributeAction]
    if (!action) return
    action(text)
  })
})

function getDate() {
  return Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date())
}

window.onload = () => {
  clock.textContent = getDate()
}
