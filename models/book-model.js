const fs = require("fs");
const uuid = require("uuid");
const pathBD = "./baseDatos.json";

function createFile(book) {
  const datoJSON = JSON.stringify(book);
  fs.writeFileSync(pathBD, datoJSON);
  return "DB Modificada";
}

function readFile() {
  const booksJson = fs.readFileSync(pathBD, { encoding: "utf-8" });
  //console.log(booksJson);
  const booksJS = JSON.parse(booksJson);
  return booksJS;
}
//readFile()

function getAll() {
  return readFile();
}
// getAll();

function addBook(book) {
  book.id = uuid.v4(); // falta lo de validar

  const books = getAll();
  books.push(book);
  createFile(books);
}
// console.log(addBook({
//     "name": "comodice q dijo",
//     "author": "Lore Roca 2",
//     "tags": [
//         "Ciencia Ficcion",
//         "Drama",
//         "Accion"
//     ]
// }))

function getById(id) {
  //console.log("me ejecute con el id " + id);
  const books = readFile();
  const searchedBook = books.find((book) => book.id === id);

  if (!searchedBook) {
    return "No existe el libro";
  }

  return searchedBook;
}
//console.log(getById(100));

function getByName(name) {
  const books = readFile();
  const searchedBook = books.find((book) => book.name == name);
  return searchedBook;
}
// console.log(getByName("Orgullo y prejuicio"));

function getByAuthor(author) {
  const books = readFile();
  const searchedBook = books.filter((book) => book.author == author);
  return searchedBook;
}
//console.log(getByAuthor("Hermann Hesse"));

function deleteById(id) {
  const books = getAll();
  const searchedBook = books.find((book) => book.id === id);

  //console.log(searchedBook);
  console.log("ta borradooooooo el libro ", searchedBook);

  const nuevaDB = books.filter((book) => book.id != id);
  if (!searchedBook) {
    return "No existe el libro";
  }

  return createFile(nuevaDB);
}

//deleteById("3");

function modifyBook(book) {
  const books = getAll();

  const searchedBook = books.find((bookDB) => book.id === bookDB.id);
  //console.log(searchedBook);
  //console.log(book.name);
  if (book.name) {
    searchedBook.name = book.name;
  }
  if (book.author) {
    searchedBook.author = book.author;
  }
  if (book.sold) {
    searchedBook.sold = book.sold;
  }
  if (book.tags) {
    searchedBook.tags = book.tags;
  }

  createFile(books);

  //action: "update", body: { id: 13, name: "Nuevo nombre", author: "Tolkien"}
  // console.log("me llego este update " + book);
  //     const books = getAll();
}

//modifyBook({ id: 1, name: "me olvide otra vez" })

module.exports = {
  getById,
  getAll,
  addBook,
  getByAuthor,
  getByName,
  modifyBook,
  deleteById,
};
