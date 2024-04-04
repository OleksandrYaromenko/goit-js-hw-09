const INPUT_KEY = "feedback-form-state"
const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
feedbackForm.addEventListener("input", saveToLocalStorage);

feedbackForm.addEventListener("submit", resetSubmit);


getLocalStorage()


function getLocalStorage () {
    const messageGet = localStorage.getItem(INPUT_KEY)
    if (messageGet) {
        const { email, message } = JSON.parse(messageGet)
        emailInput.value = email
        messageInput.value = message
    }
}
function saveToLocalStorage () {
    const fromData = {
        email:
            emailInput.value,
        message:
            messageInput.value
        
    }
    localStorage.setItem(INPUT_KEY, JSON.stringify(fromData))
   
};
function resetSubmit(event) {
    event.preventDefault()
    const formData = { email: emailInput.value, message: messageInput.value };
    console.log(formData); 
    event.currentTarget.reset()
    localStorage.removeItem(INPUT_KEY)
    
}











