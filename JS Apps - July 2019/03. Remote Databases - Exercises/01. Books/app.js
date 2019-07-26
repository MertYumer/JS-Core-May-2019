const username = 'guest';
const password = 'guest';
const appKey = 'kid_BJpzeByzB';
const appSecret = '18299ca5e36b48e88ee01f8e46dd494e';
const auth = {
    'Authorization': 'Basic ' + btoa(`${username}:${password}`),
    'Content-type': 'application/json'
};

const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/books`;

const elements = {
    loadBooksButton: document.getElementById('loadBooks'),
    submitButton: document.getElementById('submit'),
    titleInput: document.getElementById('title'),
    authorInput: document.getElementById('author'),
    isbnInput: document.getElementById('isbn'),
    tableBody: document.querySelector('tbody')
};

elements.tableBody.innerHTML = '';

elements.submitButton.addEventListener('click', createBook);
elements.loadBooksButton.addEventListener('click', loadBooks);

function createBook(event) {
    event.preventDefault();

    const title = elements.titleInput.value;
    const author = elements.authorInput.value;
    const isbn = elements.isbnInput.value;

    if (title && author && isbn) {
        const body = {
            title,
            author,
            isbn
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: auth,
            body: JSON.stringify(body)
        })
            .then(handler)
            .then(response => {
                if (response) {
                    const currentTr = createTableRow(title, author, isbn, "toBeSet");
                    elements.tableBody.appendChild(currentTr);
                }
            })
            .then(loadBooks);
    }

    clearForm();
}

function createTableRow(title, author, isbn, id) {
    let tr = document.createElement('tr');

    tr.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>`;

    tr.setAttribute('id', id);
    return tr;
}

function loadBooks() {
    elements.tableBody.innerHTML = '';

    fetch(baseUrl, {
        headers: auth
    })
        .then(handler)
        .then(data => data.forEach(element => {
            const [id, title, author, isbn] = Object.values(element);
            const currentTr = createTableRow(title, author, isbn, id);
            elements.tableBody.appendChild(currentTr);
        }));

    elements.tableBody.addEventListener('click', editOrDeleteBook);
}

function editOrDeleteBook(event) {
    const element = event.target;

    if (element.textContent === 'Delete') {
        deleteBook(element);
    } else if (element.textContent === 'Edit') {
        editBook(element);
    }
}

function deleteBook(element) {
    const book = element.parentNode.parentNode;
    const bookId = book.getAttribute('id');
    const deleteUrl = baseUrl + '/' + bookId;

    let body = {};

    fetch(deleteUrl, {
        method: 'DELETE',
        headers: auth,
        body: JSON.stringify(body)
    })
        .then(handler)
        .then(response => {
            if (response) {
                book.remove();
            }
        })
}

function editBook(element) {
    const book = element.parentNode.parentNode;
    const bookId = book.getAttribute('id');
    const putUrl = baseUrl + '/' + bookId;

    elements.titleInput.value = book.getElementsByTagName('td')[0].textContent;
    elements.authorInput.value = book.getElementsByTagName('td')[1].textContent;
    elements.isbnInput.value = book.getElementsByTagName('td')[2].textContent;

    const editButton = book.getElementsByTagName('button')[0];

    editButton.addEventListener('click', () => {
        const newTitle = elements.titleInput.value;
        const newAuthor = elements.authorInput.value;
        const newIsbn = elements.isbnInput.value;

        if (newTitle && newAuthor && newIsbn) {
            const body = {
                title: newTitle,
                author: newAuthor,
                isbn: newIsbn
            };

            fetch(putUrl, {
                method: 'PUT',
                headers: auth,
                body: JSON.stringify(body)
            })
                .then(handler);

            book.getElementsByTagName('td')[0].textContent = newTitle;
            book.getElementsByTagName('td')[1].textContent = newAuthor;
            book.getElementsByTagName('td')[2].textContent = newIsbn;

            clearForm();
        }
    });
}

function clearForm() {
    elements.titleInput.value = '';
    elements.authorInput.value = '';
    elements.isbnInput.value = '';
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}