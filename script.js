document.addEventListener('DOMContentLoaded', () => {
    // Populate portfolio information
    const nameElement = document.getElementById('name');
    const educationElement = document.getElementById('education');
    const experienceTextElement = document.getElementById('experience-text');
    const bootcampElement = document.getElementById('bootcamp');

    const name = "Nate Hessler";
    const education = "Business/Marketing from the University of Missouri-St. Louis";
    const experience = "Full-Stack development, API's, GitHub, VS Code, Heroku, Jira, Zendesk, troubleshooting, debugging, etc";
    const bootcamp = "Savvy Coders";

    if (nameElement) nameElement.textContent = name;
    if (educationElement) educationElement.textContent = education;
    if (experienceTextElement) experienceTextElement.textContent = experience;
    if (bootcampElement) bootcampElement.textContent = bootcamp;

    // Quote functionality with local quotes (no API required)
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');

    // Local collection of inspirational quotes
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
        { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" }
    ];

    if (quoteText && quoteAuthor && newQuoteButton) {
        const getRandomQuote = () => {
            // Get a random quote from the array
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            
            // Display the quote
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `- ${quote.author}`;
            quoteText.classList.add('fade-in');
            quoteAuthor.classList.add('fade-in');
            setTimeout(() => {
                quoteText.classList.remove('fade-in');
                quoteAuthor.classList.remove('fade-in');
            }, 1000);
        };

        // Get a new quote on button click
        newQuoteButton.addEventListener('click', getRandomQuote);

        // Display a quote on page load
        getRandomQuote();
    } else {
        console.warn('Quote elements are not found in the DOM.');
    }
});
