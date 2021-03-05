import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const firstBook = {
  title: "de title",
  author: "de auteur",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          reiciendis excepturi, iure architecto quas quidem aperiam. Id,
          eveniet, at ab molestiae delectus est dolorum doloremque, cumque
          cupiditate odit ut magni.
        </p>
      </Book>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt="is er niet" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
