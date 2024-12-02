document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const bootcampElement = document.getElementById('bootcamp');

    // Customize this data based on your LinkedIn profile
    const name = "Nate Hessler";
    const education = "Business/Marketing from the University of Missouri-St. Louis";
    const experience = "Full-Stack development, GitHub, VS Code, Heroku, Jira, Zendesk, troubleshooting, debugging, etc";
    const bootcamp = "Savvy Coders";

    nameElement.textContent = name;
    educationElement.textContent = education;
    experienceElement.textContent = experience;
    bootcampElement.textContent = bootcamp;
});
