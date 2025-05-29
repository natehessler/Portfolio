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

    // Quote fetching functionality
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');

    if (quoteText && quoteAuthor && newQuoteButton) {
        const fetchQuote = () => {
            fetch('http://localhost:5050/api/quote')
                .then(response => response.json())
                .then(data => {
                    quoteText.textContent = `"${data.text}"`;
                    quoteAuthor.textContent = `- ${data.author}`;
                    quoteText.classList.add('fade-in');
                    quoteAuthor.classList.add('fade-in');
                    setTimeout(() => {
                        quoteText.classList.remove('fade-in');
                        quoteAuthor.classList.remove('fade-in');
                    }, 1000);
                })
                .catch(error => console.error('Error fetching quote:', error));
        };

        // Fetch a new quote on button click
        newQuoteButton.addEventListener('click', fetchQuote);

        // Fetch a quote on page load
        fetchQuote();
    } else {
        console.warn('Quote elements are not found in the DOM.');
    }
});
