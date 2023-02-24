let  btnNewQuote=document.getElementById('newQuote')
let contentChange=document.getElementById('content')


// var arrNumberrandom=(Math.random()*arrQuote.length)
// var arrNumberFinal=Math.floor(arrNumberrandom)
// console.log(arrNumberrandom);
// console.log(arrNumberFinal);


btnNewQuote.addEventListener('click',function(){
  // function newQuote(){

    var arrNumberrandom=(Math.random()*arrQuote.length)
    var arrNumberFinal=Math.trunc(arrNumberrandom)
console.log(arrNumberFinal);

    contentChange.innerHTML=`<h3 class="my-4 quoteHeader" >${arrQuote[arrNumberFinal].quote}</h3>
<h3 class="my-5 quoteContent">${arrQuote[arrNumberFinal].auther}</h3>
`
  // }
  // console.log(Math.random()*arrQuote.length);


  // newQuote()
})





















var arrQuote = [
  {
    auther: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    auther: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  { auther: "Frank Zappa", quote: "So many books, so little time." },
  {
    auther: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    auther: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.  1",
  },
  {
    auther: "William W. Purkey",
    quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
  },
  {
    auther: "Dr. Seuss",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    auther: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  ,
  {
    auther: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  }
];
