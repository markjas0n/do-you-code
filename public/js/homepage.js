
/**
 * Function: searchByUsername()
 * Purpose: Handles searching for posts by username. It sends a GET request
 * to a route that filters posts by the specified username.
 */
async function searchByUsername() {
    const username = document.getElementById('usernameSearchInput').value.trim().toLowerCase(); // Get the username input value and convert it to lowercase
    const resultsDiv = document.getElementById('results'); // Select the results div to display search results
    resultsDiv.innerHTML = ''; // Clear any previous results

    try {
        // Send a GET request to the server to search for posts by username
        const response = await fetch(`/search/username/${encodeURIComponent(username)}`);
        const results = await response.json(); // Parse the JSON response

        // Check if there are any results
        if (results.length > 0) {
            // Display the search results as a list of links
            resultsDiv.innerHTML = `<ul>${results.map(post =>
                `<li><a href="/posts/${post.id}">${post.title}</a></li>`
            ).join('')}</ul>`;
        } else {
            // Display a message if no results were found
            resultsDiv.innerHTML = 'No posts found for this username.';
        }
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        resultsDiv.innerHTML = 'Error fetching results.';
    }
}

/**
 * Function: searchTags()
 * Purpose: Handles searching for posts by tag name. It sends a GET request
 * to a route that filters posts by the specified tag name.
 */
async function searchTags() {
    const tag = document.getElementById('tagSearchInput').value.trim().toLowerCase(); // Get the tag input value and convert it to lowercase
    const resultsDiv = document.getElementById('results'); // Select the results div to display search results
    resultsDiv.innerHTML = ''; // Clear any previous results

    try {
        // Send a GET request to the server to search for posts by tag name
        const response = await fetch(`/search/tag/${encodeURIComponent(tag)}`);
        const results = await response.json(); // Parse the JSON response

        // Check if there are any results
        if (results.length > 0) {
            // Display the search results as a list of links
            resultsDiv.innerHTML = `<ul>${results.map(post =>
                `<li><a href="/posts/${post.id}">${post.title}</a></li>`
            ).join('')}</ul>`;
        } else {
            // Display a message if no results were found
            resultsDiv.innerHTML = 'No posts found for this tag.';
        }
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        resultsDiv.innerHTML = 'Error fetching results.';
    }
}

document.getElementById('userSearch').addEventListener('click', searchByUsername);
document.getElementById('tagSearch').addEventListener('click', searchTags);

