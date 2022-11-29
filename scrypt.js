let myLibrary = [
  {title: "The hunger games", author: "Suzanne Collins", read: "read"}
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

let library;
const bookTable = document.getElementById("bookTable");

function showBook () {
    library = myLibrary;
    bookTable.innerHTML = "";
    myLibrary.forEach((Book) => {
        const htmlBook = `
          <tr>
            <td>${Book.title}</td>
            <td>${Book.author}</td>
            <td><button name="status" class="statusButton">${Book.read}</button></td>
            <td><button name="delete" class="delete">delete</button></td>
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

function deleteBookObj (bookN){
for(var i = myLibrary.length - 1; i >= 0; i--) {
    if(myLibrary[i].title === bookN) {
        myLibrary.splice(i, 1);
    }
}
}

function findBook (bookN){
    for(var i = myLibrary.length - 1; i >= 0; i--) {
        if(myLibrary[i].title === bookN) {
            if(myLibrary[i].read == "read"){
                myLibrary[i].read = "not read"
                showBook();
            }
            else{
                myLibrary[i].read = "read"
                showBook();
            }
        }
    }
    }

function deleteBookDom(element){
    element.parentNode.parentNode.remove()  
}


const table =  document  
.querySelector("table")
.addEventListener("click", (e) => {
    const bookNode = e.target.parentNode.parentNode.childNodes[1];  //returns the element containing the title
    const bookName = bookNode.innerText;                            //returns the title book
        if(e.target.name == "delete"){            //Avoid removing objects from the array with the read button 
            deleteBookObj(bookName);
            deleteBookDom(e.target);
        }
        if(e.target.name == "status"){
            findBook(bookName)
        }
    }
);