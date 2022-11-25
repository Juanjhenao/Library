let myLibrary = [
  {title: "the hunger games", author: "Suzanne Collins", read: "read"}
];

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

const form = document.getElementById("form");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formStatus = document.getElementById("status");

function addBookToLibrary() {
    if (formTitle.value == "" || formAuthor.value == ""){
        alert("Please, fill all the fields ;)");
        return;
    }
        const newBook = new Book(formTitle.value, formAuthor.value, formStatus.value);
        myLibrary.push(newBook);
        showBook();
        clearFields();

}

const bookTable = document.getElementById("bookTable");

function showBook () {
    bookTable.innerHTML = "";
    myLibrary.forEach((Book) => {
        const htmlBook = `
          <tr>
            <td>${Book.title}</td>
            <td>${Book.author}</td>
            <td><button class="status-button">${Book.read}</button></td>
            <td><button class="delete">delete</button></td>
          </tr>
          `;
        bookTable.insertAdjacentHTML("afterbegin", htmlBook);
      });
    }
showBook();
function clearFields() {
    formTitle.value = ""
    formAuthor.value = ""
}


form.addEventListener ("submit", (e)=> {
    e.preventDefault();
    addBookToLibrary();


});