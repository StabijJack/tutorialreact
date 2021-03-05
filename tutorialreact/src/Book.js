import React from "react";
const Book = (props) => {
  const onClickHandler = () => {
    alert("image");
  };
  const onClickComplexHandler = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img src={props.image} alt="is er niet" onClick={onClickHandler} />
      <h1 onClick={() => onClickComplexHandler(props.title)}>{props.title}</h1>
      <h4 onClick={() => alert("header")}>{props.author}</h4>
    </article>
  );
};
export default Book;
