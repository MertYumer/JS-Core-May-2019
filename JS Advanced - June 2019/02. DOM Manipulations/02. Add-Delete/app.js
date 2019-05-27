function addItem() {
    function deleteItem() {
        let li = this.parentNode;
        let ul = this.parentNode.parentNode;
        ul.removeChild(li);
    }

    let deleteLink = document.createElement('a');
    deleteLink.textContent ="[Delete]";
    deleteLink.href = "#";
    deleteLink.addEventListener('click', deleteItem);

    let inputElement = document.getElementById('newText');
    let listElement = document.createElement('li');
    listElement.textContent = inputElement.value + ' ';
    listElement.appendChild(deleteLink);
    document.getElementById('items').appendChild(listElement);
    inputElement.value = '';
}