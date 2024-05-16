const quoteContainer = document.getElementById('quote');
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', fetchRandomQuote);

async function fetchRandomQuote() {
    try {
        const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const quote = data.data[0];
        console.log(quote);
        jokeEl.innerHTML = `
            <p><strong>Quote:</strong> ${quote.quoteText}</p>
            <p><strong>Author:</strong> ${quote.quoteAuthor}</p>
            <hr>
        `;
    } catch (error) {
        console.error('Error fetching random quote:', error);
    }
}
