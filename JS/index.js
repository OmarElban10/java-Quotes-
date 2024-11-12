document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
        { text: "Nothing is impossible, the word itself says, 'I'm possible!'", author: "Audrey Hepburn" },
        { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
        { text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    ];

    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `--${randomQuote.author}`;
    }

    newQuoteButton.addEventListener('click', displayRandomQuote);
    displayRandomQuote();
});
