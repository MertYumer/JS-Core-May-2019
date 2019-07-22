window.addEventListener('load', loadStudents);

const username = 'guest';
const password = 'guest';
const appKey = 'kid_BJpzeByzB';
const appSecret = '18299ca5e36b48e88ee01f8e46dd494e';
const auth = {
    'Authorization': 'Basic ' + btoa(`${username}:${password}`),
};

const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;

const tableBody = document.querySelector('tbody');

function loadStudents() {
    fetch(baseUrl, {
        headers: auth
    })
        .then(handler)
        .then(data => {
            data.sort((a, b) =>  a.ID - b.ID);

            data.forEach(student => {
                const id = student.ID;
                const firstName = student.FirstName;
                const lastName = student.LastName;
                const facultyNumber = student.FacultyNumber;
                const grade = student.Grade;

                const newRow = createTableRow([id, firstName, lastName, facultyNumber, grade]);
                tableBody.appendChild(newRow);
            })
        })
}

function createTableRow(arguments) {
    let tr = document.createElement('tr');

    arguments.forEach(arg => {
        let th = document.createElement('th');
        th.textContent = arg;
        tr.appendChild(th);
    });

    return tr;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}