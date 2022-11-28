const BookDetails = (book) => {
  let html = `
    <div id="bookDetail" class="book-details position absolute bg-white/50 p-2 m-2 rounded w-1/5 top-1/4 ml-2 mx-auto flex flex-col text-center">
        <img src="${book.coverImage}" alt="Bild på bokens omslag saknas">
        <ul class="list-disc">
            <li>Author: ${book.author}</li>
            <li>Title: ${book.title}</li>
            <li>Pages: ${book.pages}</li>
            <li>Year: ${book.releaseDate}</li>
        </ul>
    </div>
    `;
  return html;
};
