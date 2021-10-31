const quotes = [
    {
        quote: "Love yourself."
    },
    {
        quote: "You only live once."
    },
    {
        quote: "Life is a journey."
    },
    {
        quote: "Be brave."
    },
    {
        quote: "Time is gold."
    },
    {
        quote: "This too shall pass away."
    },
    {
        quote: "Love what you do."
    },
    {
        quote: "Time waits for no one."
    },
    {
        quote: "Don't waste your youth."
    },
    {
        quote: "Life is all about timing."
    },
];

const quote = document.querySelector("#quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;