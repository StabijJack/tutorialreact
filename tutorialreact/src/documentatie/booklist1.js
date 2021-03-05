import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article className="book">
    <BookImage />
    <Author />
    <Title />
  </article>
);
const BookImage = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg"
      alt="is er niet"
    />
  );
};
const Author = () => <h1>de auteur</h1>;
const Title = () => <h4>de titel</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
