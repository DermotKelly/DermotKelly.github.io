// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Enthusiasm is everything. It must be taut and vibrating like a guitar string."`,
    person: `Pele`
}, {
    quote: `"If you're a goalkeeper, it doesn't matter what you save the ball with - if you keep it out, it's not a goal."`,
    person: `Mark Lawrenson`
}, {
    quote: `"I think sometimes the best training is to rest."`,
    person: `Cristiano Ronaldo`
}, {
    quote: `"I think I chose wisely. When it came down to it, I knew I was a better goalkeeper than I was a bowler."`,
    person: `David Seaman`
}, {
    quote: `"My toughest opponent? Scholes of Manchester. He is the complete midfielder."`,
    person: `Zinedine Zidane`
}, {
    quote: `"Money is not a motivating factor. I do what comes to me at that moment."`,
    person: `Diego Maradona`
}, {
    quote: `"A penalty is a cowardly way to score."`,
    person: `Pele`
}, {
    quote: `"I love football, football is my life."`,
    person: `Wayne Rooney.`
}, {
    quote: `"Sometimes you have to accept you can’t win all the time."`,
    person: `Lionel Messi`
}, {
    quote: `"You have got to shoot, otherwise you can’t score."`,
    person: `Johan Cruyff`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})





/* Div tag   */


document.querySelector('button').addEventListener('click', result);



let allInputs = document.querySelector("input");
for(let x of allinput) {

    x.addEventListener('keyup', function() {

        if (event.keycode === 13) { result();}
});
    
}
function result(){

    let a = document.querySelector('.a').value;
    document.querySelector('.result').innerHTML = a;
}