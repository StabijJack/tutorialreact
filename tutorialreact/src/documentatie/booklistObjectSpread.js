import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const books = [
  {
    id: 1,
    title: "de title",
    author: "de auteur",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "de title",
    author: "de auteur",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
      ;
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.image} alt="is er niet" />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
