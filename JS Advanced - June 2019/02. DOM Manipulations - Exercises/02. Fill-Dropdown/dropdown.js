function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.text = newItemTextElement.value;
    optionElement.value = newItemValueElement.value;

    let menuElement = document.getElementById('menu');
    menuElement.appendChild(optionElement);

    newItemTextElement.value = '';
    newItemValueElement.value = '';
}