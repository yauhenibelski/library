import books from '../../assets/books';

const getBookByID = (id) => books.filter((book) => book.id === id)[0];

export default getBookByID;
