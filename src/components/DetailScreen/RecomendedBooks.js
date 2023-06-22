import React from "react";
import HorizontalBookList from "../HorizontalBookList/HorizontalBookList";

const RecomendedBooks = ({ books }) => {
  return (
    <HorizontalBookList title="Recomendados" list={books} color="text-black" />
  );
};

export default RecomendedBooks;
