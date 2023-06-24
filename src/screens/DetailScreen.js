import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import useFetch from "../hooks/useFetch";
import BookPresentation from "../components/DetailScreen/BookPresentation";

const DetailScreen = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [cover, setCover] = useState("");
  const [recomneded, setRecommended] = useState([]);
  const {
    params: { id },
  } = useRoute();

  const { data, error, isLoading, setUrl } = useFetch(
    `http://192.168.1.67/articles/${id}`,
    {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "b6ac727c27msh9d5371b7a600d81p1499f5jsnad87346e86d7",
      //   "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
      // },
    }
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    setTitle(data.titulo);
    setAuthor(data.autores[0]);
    setSummary(data.descripcion);
    setCover(data.portada_url);
    setRecommended(data.recomendados);
  }, [data]);

  if (isLoading || !data) {
    return <Text>Fetcing...</Text>;
  }

  return (
    <BookPresentation
      title={title}
      author={author}
      summary={summary}
      cover={cover}
      recomneded={recomneded}
    />
  );
};

export default DetailScreen;
