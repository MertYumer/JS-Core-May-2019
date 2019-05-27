function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.createElement('li');
    listElement.textContent = inputElement.value;
    document.getElementById('items').appendChild(listElement);
    inputElement.value = '';
}