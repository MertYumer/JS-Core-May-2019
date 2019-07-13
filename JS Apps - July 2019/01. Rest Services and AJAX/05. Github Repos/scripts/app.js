function loadRepos() {
    const repos = document.getElementById('repos');
    repos.innerHTML = '';
    const username = document.getElementById('username').value;

    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => displayRepos(data))
        .catch((error) => displayError(error));

    function displayRepos(repoItems) {
        repoItems.forEach(repo => {
            const {full_name, html_url} = repo;

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = full_name;
            a.href = html_url;
            li.appendChild(a);

            repos.appendChild(li);
        });
    }

    function displayError(error) {
        const li = document.createElement('li');
        li.textContent = error;
        repos.appendChild(li);
    }
}