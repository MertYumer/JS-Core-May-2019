function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';
    const messages = document.getElementById('messages');
    const inputAuthor = document.getElementById('author');
    const inputContent = document.getElementById('content');

    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    sendButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', refreshMessages);

    function  sendMessage() {
        const author = inputAuthor.value;
        const content = inputContent.value;

        if (author && content) {
            const message = {
                author,
                content
            };

            messages.textContent += `${author}: ${content}\n`;

            fetch(url, {
                method: 'post',
                body: JSON.stringify(message)
            })
                .then(resolve => resolve.json());
        }

        inputAuthor.value = '';
        inputContent.value = '';
    }

    function  refreshMessages() {
        messages.textContent = '';

        fetch(url)
            .then(request => request.json())
            .then(data => {
                const currentMessages = Object.values(data);

                for (const message of currentMessages){
                    const author = message.author;
                    const content = message.content;
                    messages.textContent += `${author}: ${content}\n`;
                }
            });
    }
}

attachEvents();