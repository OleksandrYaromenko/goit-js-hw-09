const INPUT_KEY = "input"
const TEXTAREA_KEY = "textarea"
const feedbackForm = document.querySelector(".feedback-form");
const input = feedbackForm.querySelector("input");
const textarea = feedbackForm.querySelector("textarea");
const saveToLocalStorage = (key, event) => {
    const message = event.target.value;
    localStorage.setItem(key, message);
};
getLocalStorage ()
input.addEventListener("input", saveToLocalStorage.bind(null, "input"));
textarea.addEventListener("input", saveToLocalStorage.bind(null, "textarea"))
feedbackForm.addEventListener("submit",resetSubmit)
function getLocalStorage () {
    const nameGet = localStorage.getItem(INPUT_KEY)
    const messageGet = localStorage.getItem(TEXTAREA_KEY)
    if (nameGet,messageGet) {
        input.value = nameGet
        textarea.value = messageGet
    }
    console.log(nameGet)
}
function resetSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(INPUT_KEY)
    localStorage.removeItem(TEXTAREA_KEY)
}

