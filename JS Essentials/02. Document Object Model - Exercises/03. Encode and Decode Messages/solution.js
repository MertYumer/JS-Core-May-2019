function solve() {
    let buttonElements = document.getElementsByTagName('button');
    let textAreaElements = document.getElementsByTagName('textarea');

    for (let button of buttonElements) {
        button.addEventListener('click', clickEvent);
    }

    function clickEvent(){
        if (this == buttonElements[0]) {
            encode();
        } else if (this == buttonElements[1]) {
            decode();
        }
    }

    function encode(){
        let input = textAreaElements[0].value;
        let encodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            encodedMessage += String.fromCharCode(`${input[i]}`.charCodeAt(0) + 1);
        }

        textAreaElements[0].value = '';
        textAreaElements[1].value = encodedMessage;
    }

    function decode(){
        let encodedMessage = textAreaElements[1].value;
        let decodedMessage = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            decodedMessage += String.fromCharCode(`${encodedMessage[i]}`.charCodeAt(0) - 1);
        }

        textAreaElements[1].value = decodedMessage;
    }
}