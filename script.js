'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML('beforeend', BookList(bookList));

    // Create a mouse target
  const mouseTarget = document.querySelectorAll('.book-list__item');
  
    // Add mouse target listeners to all created items in list
  for(let i = 0; i < mouseTarget.length; i++){

    // Mouse enter event
    mouseTarget[i].addEventListener('mouseenter', (e) => {
      //console.log("Mouse Enter")
      let book = getBook(e.target.id)
      book.then(function (result){
        renderBookDetails(result);
      })
    });
      
      // Mouse leave event
      mouseTarget[i].addEventListener('mouseleave', () => {
        //console.log("Mouse Leave");
        const existingElement = document.querySelector('.book-details');
        existingElement && existingElement.remove();
      });
    }
  }

  function renderBookDetails(book) {
    //console.log('Book Details Function')
    const existingElement = document.getElementById('bookDetail');
    const root = document.getElementById('root');

    existingElement && existingElement.remove();

    let html = BookDetails(book)

    root.insertAdjacentHTML('afterend', html);
  }