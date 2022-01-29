import throttle from "lodash/throttle"

const formRef = document.querySelector('form')

formRef.addEventListener('submit', onSubmitForm)
formRef.addEventListener('input', throttle(onMessage, 500))

const KEY_LOCAL_STORAGE = 'feedback-form-state'
const formData = {}

function onMessage(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(formData))
}

function onSubmitForm(event) {
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(KEY_LOCAL_STORAGE)
    console.log(formData)
}

function populateMessage(event) {
    const savedMessage = localStorage.getItem(KEY_LOCAL_STORAGE)
    if (savedMessage) {
        formRef.value = JSON.parse(savedMessage)
    }
}