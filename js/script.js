//Including the UI Elements
let form = document.querySelector('#book-form');

//Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Event Listener Section
form.addEventListener('submit', newBook);


function newBook(e) {
    console.log("Hello");

    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;

    let book = new Book(title, author, isbn);
    console.log(book);

    e.preventDefault();
}