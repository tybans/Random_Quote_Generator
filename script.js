const quote = document.getElementById('quote');
const author = document.querySelector('#author');
const botton = document.querySelector('.btn');




async function fetchQuote(){
    let response = await fetch("https://type.fit/api/quotes");
    let data = await response.json();
    console.log(data);

    let len= data.length;
    let random= Math.floor(Math.random()*len);

    quote.innerHTML = `${data[random].text}`;
    author.innerHTML = `${data[random].author.split(",").shift()}`;
}


botton.addEventListener("click", fetchQuote)