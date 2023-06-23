import React, { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../../contexts/Article";
import BookPresentation from "./BookPresentation";
import useFetch from "../../hooks/useFetch";

const BookContainer = ({ id }) => {
  const { articles } = useContext(ArticleContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const { data, error, isLoading } = useFetch(
    `https://book-finder1.p.rapidapi.com/api/search?title=The%20Brightest%20Night&results_per_page=25&page=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b6ac727c27msh9d5371b7a600d81p1499f5jsnad87346e86d7",
        "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
      },
    }
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    const info = data.results[0];
    setTitle(info.title);
    setAuthor(info.authors[0]);
    setSummary(info.summary);
  }, [data]);

  return (
    <BookPresentation
      title={title}
      author={author}
      summary={summary}
      recomneded={articles}
    />
  );
};

export default BookContainer;
