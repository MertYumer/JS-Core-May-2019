function solve() {
    let userButtonElement = document.getElementsByName('myBtn')[0];
    let peshoButtonElement = document.getElementsByName('peshoBtn')[0];

    userButtonElement.addEventListener('click', clickEvent);
    peshoButtonElement.addEventListener('click', clickEvent);

    function clickEvent() {
        let messageDiv = document.createElement('div');
        let messageSpan = document.createElement('span');
        let messageParagraph = document.createElement('p');

        messageDiv.appendChild(messageSpan);
        messageDiv.appendChild(messageParagraph);

        let myChatBoxElement = document.getElementById('myChatBox');
        let peshoChatBoxElement = document.getElementById('peshoChatBox');

        if (this == userButtonElement) {
            messageSpan.textContent = 'Me';
            messageParagraph.textContent = myChatBoxElement.value;
            messageDiv.style.textAlign = 'left';
        } else if (this == peshoButtonElement) {
            messageSpan.textContent = 'Pesho';
            messageParagraph.textContent = peshoChatBoxElement.value;
            messageDiv.style.textAlign = 'right';
        }

        document.getElementById('chatChronology').appendChild(messageDiv);
        myChatBoxElement.value = '';
        peshoChatBoxElement.value = '';
    }
}