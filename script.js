// Get references to the DOM elements
const quoteEl = document.getElementById('quote');
const quoteAuthorEl = document.getElementById('author');
const button = document.getElementById('new-quote');


// Function to fetch a quote from the API
async function getQuote() {
    try {
        // Call the API
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        // Update the page with the new quote
        quoteEl.textContent = `${data.content}`;
        quoteAuthorEl.textContent = `- ${data.author}`;
    } catch (error) {
        // If something goes wrong
        quoteEl.textContent = "Oops! Could not fetch a quote :(";
        console.error(error);
    }
}

// Fetch a quote when the page loads
getQuote();

// Fetch a new quote when the button is clicked
button.addEventListener('click', getQuote);
