// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books,setBooks] = useState([]);
  useEffect(() => {
    fetch('/booksData.json')
    .then(response => response.json() )
    .then(data => setBooks(data))
  },[])

  return (
    <section className="w-11/12 lg:w-4/5 mx-auto space-y-4">
      <h1 className="font-PlayfairDisplay font-bold text-color1 text-40 leading-53 text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          books.map((book,bookId) => <Book key={bookId} book={book}></Book>)
        }
      </div>
    </section>
  );
};

export default Books;