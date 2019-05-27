function focus() {
    function highlight() {
        this.parentNode.className = 'focused';
    }

    function unhighlight() {
        this.parentNode.removeAttribute('class');
    }

    let inputElements = document.getElementsByTagName('input');

    Array.from(inputElements).forEach(i => {
        i.addEventListener('focus', highlight);
        i.addEventListener('blur', unhighlight);
    });
}