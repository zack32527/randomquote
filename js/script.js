function generateQuote() {
    const quotes = [
        {
        quote: "We’ll always be with you. No one’s ever really gone. A thousand generations live in you now",
        author: "Luke Skywalker, Star Wars episode IX"
        },
        {
            quote: "If you strike me down I will become more powerful than you could possibly imagine.",
            author: "Ben Kenobi, Star Wars Episode IV"
        },
        {
            quote: "These aren’t the droids you’re looking for.",
            author: "Ben Kenobi, Star Wars Episode IV"
        }
            
        
        
        
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}

document.getElementById("generate").addEventListener('click', generateQuote());
