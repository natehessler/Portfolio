# Nate Hessler's Portfolio

A personal portfolio website showcasing my technical skills, background, and experience.

## Features

- Responsive personal portfolio website
- Interactive navigation between different sections
- Dynamic content population using JavaScript
- Custom API that generates random inspirational quotes
- Links to professional profiles (LinkedIn, GitHub)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

## API

The portfolio includes a simple Express API that generates random inspirational quotes. The API runs on port 5050 and can be accessed via:

```
GET /api/quote
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/natehessler/Portfolio.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the API server:
   ```
   npm start
   ```

4. Open `home.html` in your browser to view the portfolio

## Structure

- `home.html` - Main landing page
- `skills.html` - Overview of technical skills
- `experience.html` - Work experience and projects
- `contact.html` - Contact information and quote generator
- `script.js` - Client-side JavaScript functionality
- `index.js` - API server for quotes
- `style.css` - Styling for the portfolio

## License

ISC