document.getElementById('restClientForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form values
    const method = document.getElementById('method').value;
    const url = document.getElementById('url').value;
    const body = document.getElementById('body').value;

    // Setup fetch options
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Only add body if the method is not GET or DELETE
    if (method !== 'GET' && method !== 'DELETE' && body.trim()) {
        try {
            options.body = JSON.stringify(JSON.parse(body));
        } catch (error) {
            document.getElementById('response').textContent = `Invalid JSON body: ${error.message}`;
            return;
        }
    }

    try {
        // Send request with Fetch API
        const response = await fetch(url, options);
        const responseData = await response.json();

        // Handle successful response
        document.getElementById('response').textContent = `Status: ${response.status}\nResponse: ${JSON.stringify(responseData, null, 2)}`;
    } catch (error) {
        // Handle errors
        document.getElementById('response').textContent = `Error: ${error.message}`;
    }
});
