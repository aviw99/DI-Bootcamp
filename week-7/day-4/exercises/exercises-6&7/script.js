let div = document.getElementById('navBar');
div.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
newLi.innerText = 'Logout';

const list = document.querySelector('ul');
list.appendChild(newLi);

const firstChild = list.firstElementChild;
// console.log(firstChild.textContent);
const lastChild = list.lastElementChild;
// console.log(lastChild.textContent);


let allBooks = [
    {
        title: "Book 1",
        author: "Author 1",
        image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
        alreadyRead: true
    },
    {
        title: "Book 2",
        author: "Author 2",
        image: "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
        alreadyRead: false
    }
];
const listBooks = document.getElementsByClassName('listBooks')[0];

for(let i = 0; i < allBooks.length; i++){
    const book = allBooks[i];
    const bookDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.innerText = book.title;
    const author = document.createElement('h3');
    author.innerText = 'written by: ' +  book.author;
    const image = document.createElement('img');
    image.setAttribute('src', book.image);
    image.setAttribute('width', 100);
    if(book.alreadyRead){
        title.classList.add('header_red');
        author.classList.add('header_red');
    }
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(image);
    listBooks.appendChild(bookDiv);
};


 