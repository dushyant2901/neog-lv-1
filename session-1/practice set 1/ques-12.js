const book1 = {
  title: "Elements Of Physics",
  author: "H.C. Verma",
  pages: 256,
};
const book2 = {
  title: " Physics",
  author: "AB Verma",
  pages: 56,
};
const getBookDetails = (book) => book.pages > 100;

console.log(getBookDetails(book1));
console.log(getBookDetails(book2));
