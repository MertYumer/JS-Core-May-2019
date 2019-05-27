function deleteByEmail() {
    let searchedEmail = document.getElementsByName('email')[0].value;
    let emailTds = document.querySelectorAll("table tr td:nth-child(2)");
    let isFound = false;

    for (let td of emailTds) {
        if (td.textContent === searchedEmail) {
            let trElement = td.parentNode.parentNode;
            trElement.removeChild(td.parentNode);
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? "Deleted." : "Not found.";
}