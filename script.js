document.addEventListener('DOMContentLoaded', () => {
    // Populate portfolio information
    const nameElement = document.getElementById('name');
    const educationElement = document.getElementById('education');
    const experienceTextElement = document.getElementById('experience-text');

    const name = "Nate Hessler";
    const education = "Business/Marketing from the University of Missouri-St. Louis";
    const experience = "software + support engineering";

    if (nameElement) nameElement.textContent = name;
    if (educationElement) educationElement.textContent = education;
    if (experienceTextElement) experienceTextElement.textContent = experience;
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();
});
