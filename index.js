const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const quotes = [
    { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance you must keep moving." },
    { author: "Maya Angelou", text: "You will face many defeats in life, but never let yourself be defeated." },
    { author: "Steve Jobs", text: "Innovation distinguishes between a leader and a follower." },
    { author: "Helen Keller", text: "The only thing worse than being blind is having sight but no vision." },
    { author: "Walt Disney", text: "The way to get started is to quit talking and begin doing." },
    { author: "Nate Hessler", text: "These people have much better quotes than me." },
    { author: "Albert Einstein", text: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."},
    { author: "Bob Marley", text: "You never know how strong you are until being strong is your only choice."},
    { author: "Steve Jobs", text: "Your time is limited, so don't waste it living someone else's life."},
];

app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Quote API is running on http://localhost:${PORT}`);
});
