function mySolution() {
    const sendButton = document.getElementsByTagName('button')[0];
    sendButton.addEventListener('click', sendQuestion);
    const pendingQuestions = document.getElementById('pendingQuestions');
    const openQuestions = document.getElementById('openQuestions');

    function sendQuestion() {
        const textArea = document.getElementsByTagName('textarea')[0];
        const username = document.getElementsByTagName('input')[0];

        if (textArea.value) {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'pendingQuestion';

            const img = document.createElement('img');
            img.src = "./images/user.png";
            img.width = 32;
            img.height = 32;

            const span = document.createElement('span');

            if (username.value) {
                span.textContent = username.value;
            } else {
                span.textContent = 'Anonymous';
            }

            const p = document.createElement('p');
            p.textContent = textArea.value;

            const archiveButton = document.createElement('button');
            archiveButton.className = 'archive';
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', function (e) {
                questionDiv.remove();
            });

            const openButton = document.createElement('button');
            openButton.className = 'open';
            openButton.textContent = 'Open';
            openButton.addEventListener('click', moveQuestion);

            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'actions';
            buttonsDiv.appendChild(archiveButton);
            buttonsDiv.appendChild(openButton);

            questionDiv.appendChild(img);
            questionDiv.appendChild(span);
            questionDiv.appendChild(p);
            questionDiv.appendChild(buttonsDiv);

            pendingQuestions.appendChild(questionDiv);
        }

        textArea.value = '';
        username.value = '';
    }

    function moveQuestion(e) {
        const questionDiv = e.target.parentNode.parentNode;
        questionDiv.className = 'openQuestion';

        const buttonsDiv = questionDiv.lastChild;
        buttonsDiv.removeChild(buttonsDiv.firstChild);
        buttonsDiv.removeChild(buttonsDiv.firstChild);

        const replyButton = document.createElement('button');
        replyButton.className = 'reply';
        replyButton.textContent = 'Reply';
        replyButton.addEventListener('click', reply);

        buttonsDiv.appendChild(replyButton);

        const replyInput = document.createElement('input');
        replyInput.className = 'replyInput';
        replyInput.type = 'text';
        replyInput.placeholder = 'Reply to this question here...';

        const sendReplyButton = document.createElement('button');
        sendReplyButton.className = 'replyButton';
        sendReplyButton.textContent = 'Send';

        const ol = document.createElement('ol');
        ol.className = 'reply';
        ol.type = '1';

        const replySection = document.createElement('div');
        replySection.className = 'replySection';
        replySection.style.display = 'none';

        replySection.appendChild(replyInput);
        replySection.appendChild(sendReplyButton);
        replySection.appendChild(ol);

        questionDiv.appendChild(replySection);

        pendingQuestions.removeChild(questionDiv);
        openQuestions.appendChild(questionDiv);
    }

    function reply(e) {
        const replySection = e.target.parentNode.parentNode.lastChild;

        if (e.target.textContent === 'Reply') {
            e.target.textContent = 'Back';
            replySection.style.display = 'block';

            const sendReplyButton = replySection.getElementsByTagName('button')[0];
            sendReplyButton.addEventListener('click', sendReply);
        } else {
            e.target.textContent = 'Reply';
            replySection.style.display = 'none';
        }
    }

    function sendReply(e) {
        const replySection = e.target.parentNode;

        const replyInput = replySection.firstChild;
        const ol = replySection.lastChild;

        if (replyInput.value) {
            const li = document.createElement('li');
            li.textContent = replyInput.value;
            ol.appendChild(li);
        }

        replyInput.value = '';
    }
}
