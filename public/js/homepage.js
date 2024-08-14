
/**
 * Function: searchByUsername()
 * Purpose: Handles searching for posts by username. It sends a GET request
 * to a route that filters posts by the specified username.
 */
async function searchByUsername() {
    const username = document.getElementById('usernameSearchInput').value.trim(); // Get the username input value 
    try {
        // Send a GET request to the server to search for posts by username
        const url = `/search/username/${username}`;
        document.location = url;
        
    } catch (error) {
        console.log(error);
        // Handle any errors that occur during the fetch operation
    }
}

/**
 * Function: searchTags()
 * Purpose: Handles searching for posts by tag name. It sends a GET request
 * to a route that filters posts by the specified tag name.
 */
async function searchTags() {
    const tag = document.getElementById('tagSearchInput').value.trim(); // Get the tag input value 

    document.location = `/search/tag/${tag}`;
}

document.getElementById('userSearch').addEventListener('click', searchByUsername);
document.getElementById('tagSearch').addEventListener('click', searchTags);

