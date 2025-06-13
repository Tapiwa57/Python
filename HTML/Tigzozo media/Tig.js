document.getElementById('dark-mode-toggle').addEventListener('click', function()
{
    document.body.classList.toggle('dark-mode');
});


const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);


const books = [
    {Title: "To kill a Mockingbird", author: "Harper Lee"},
    {Title: "1984", author: "Georger Orwell"},
    {Title: "The Great Gatsy", author: "F. Scott Fitzgerald"},
    {Title: "The catcher in the Rye", author: "J.D Salinger"},
];

const searchQuery = "Rye"

const searchResults = books.filter((book)=> {
    const Title = book.Title.toLowerCase();
    const author = book.author.toLowerCase()
    return Title.includes(searchQuery.toLowerCase()) || author.includes(searchQuery.toLowerCase())
 })

 console.log(searchResults);



const number = [2,3,4];
const doubled = number.map(number=> number*2)
console.log(doubled)

const prices = [5,30,10,25,15,20]
const sum = prices.reduce((accumulator, prices) => accumulator + prices, 0);
console.log(sum)

const words =['hi','hello','Hie','hey'];
const morethanthreeletter= words.filter(word => word.length > 3);
console.log(morethanthreeletter);

const person ={
    name: jimalo,
    age: 72,
    occupation: gardener,
}

person[ na]