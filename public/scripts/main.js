// import { query } from 'express'
import Modal from './modal.js'
const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .deleteButton')
const deleteButton = document.querySelectorAll('.actions a.delete')
const readButtons = document.querySelectorAll('.actions a.read')

readButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const slug = check ? 'check' : 'delete'

  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  const form = document.querySelector('.modal form')

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check
    ? 'Marcar como lida esta pergunta?'
    : 'Excluir esta pergunta?'
  modalDescription.innerHTML = check
    ? 'Tem certeza que deseja marcar como lida essa pergunta?'
    : 'Tem certeza que quer excluir essa pergunta?'
  modalButton.innerHTML = check ? 'Sim, esta pergunta' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open()
}
