const extra = document.getElementById("extra");
const colors = ["pink","green","blue","violet", "yellow"];
const url = 'https://api.api-ninjas.com/v1/quotes?category=';
const categories = ["age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communication", "computers", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];

function getRandom() {
    let max = categories.length;
    let num = Math.floor(Math.random()*max);
    getQuote(categories[num]);
}

async function getQuote(category) {
    try {
        extra.replaceChildren();
        let quote = document.createElement("h2");
        let author = document.createElement("h4");
        let res = await fetch(url+category, {
            method: 'GET',
            headers: { 'X-Api-Key': '0Zl6SuHOQUXnhVPRdlJaNg==fGQDkqluivGHZQN1'}
            });
        console.log(res.status);
        let res1 = await res.json();
        quote.innerHTML = '"'+res1[0].quote+'"';
        author.innerHTML = res1[0].author;
        extra.appendChild(quote);
        extra.appendChild(author);
    }
    catch (error) {
            console.log(error);
    }
}

function getCategories() {
    extra.replaceChildren();
    let newList = document.createElement("ul");
    let innerText = '';
    categories.forEach((cat) => innerText += '<li><button onclick=getQuote("'+cat+'")>'+cat+'</button></li>');
    newList.innerHTML = innerText;
    extra.appendChild(newList);
    const btns  = extra.querySelectorAll("button");
    for(let i = 0; i<btns.length; i++){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    btns[i].className = randomColor;
    }
}

//add optional random joke at the end
//url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,

const btns  = document.querySelectorAll("button");
const btns1  = extra.querySelectorAll("button");
for(let i = 0; i<btns.length; i++){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    btns[i].className = randomColor;
}


