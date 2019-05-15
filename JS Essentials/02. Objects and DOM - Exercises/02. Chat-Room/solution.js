function solve() {
    function clickEvent() {
        let divElement = document.createElement('div');
        divElement.textContent = chatInput.value;
        divElement.setAttribute('class', 'message my-message');
        chatMessages.appendChild(divElement);
        chatInput.value = '';
    }

    let chatInput = document.getElementById('chat_input');
    let chatMessages = document.getElementById('chat_messages');
    let buttonElement = document.getElementById('send');
    buttonElement.addEventListener('click', clickEvent);
}


