async function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    try {
        const response = await fetch(`/search?query=${input}`);
        const results = await response.json();

        if (results.length > 0) {
            resultsDiv.innerHTML = `<ul>${results.map(user =>
                `<li><a href="/users/${user.username}">${user.username}</a></li>`
            ).join('')}</ul>`;
        } else {
            resultsDiv.innerHTML = 'No users found.';
        }
    } catch (error) {
        resultsDiv.innerHTML = 'Error fetching results.';
    }
}

document.getElementById('searchButton').addEventListener('click', search);