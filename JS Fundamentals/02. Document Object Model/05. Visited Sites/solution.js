function solve() {
    function onclick() {
        let textElement = this.parentNode.children[1];
        let siteInfo = textElement.textContent;
        let number = siteInfo.match(/\d+/g);
        siteInfo = siteInfo.replace(number, (+number + 1));
        textElement.textContent = siteInfo;
    }

    let tagElements = document.getElementsByTagName('a');

    for (let tagElement of tagElements) {
        tagElement.addEventListener('click', onclick);
    }
}