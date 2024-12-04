document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const bootcampElement = document.getElementById('bootcamp');

    // Customize this data based on your LinkedIn profile
    const name = "Nate Hessler";
    const education = "Business/Marketing from the University of Missouri-St. Louis";
    const experience = "Full-Stack development, API's, GitHub, VS Code, Heroku, Jira, Zendesk, troubleshooting, debugging, etc";
    const bootcamp = "Savvy Coders";

    nameElement.textContent = name;
    educationElement.textContent = education;
    experienceElement.textContent = experience;
    bootcampElement.textContent = bootcamp;
});
document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');

    const fetchQuote = () => {
        fetch('http://localhost:5000/api/quote')
            .then(response => response.json())
            .then(data => {
                quoteText.textContent = `"${data.text}"`;
                quoteAuthor.textContent = `- ${data.author}`;
            })
            .catch(error => console.error('Error fetching quote:', error));
    };

    // Fetch a new quote on button click
    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch a quote on page load
    fetchQuote();

});
