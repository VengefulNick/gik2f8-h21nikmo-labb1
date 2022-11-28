const BookDetails = (book) => {
  let html = `
    <div id="bookDetail" class="book-details bg-white/50 p-2 m-2 rounded w-1/3 mx-auto flex flex-col text-center">
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
