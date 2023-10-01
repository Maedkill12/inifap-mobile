import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import BookPresentation from "../components/DetailScreen/BookPresentation";
import useXMLHttpRequest from "../hooks/useXMLHttpRequest";
import { URL_BASE } from "../util/constans";

const DetailScreen = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [cover, setCover] = useState("");
  const [recomneded, setRecommended] = useState([]);
  const {
    params: { id, category },
  } = useRoute();

  const { data, error, loading } = useXMLHttpRequest(
    `${URL_BASE}/api/articulo/${category}/${id}`,
    "GET",
    null
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.status !== "success") {
      return;
    }
    const info = data.data;
    setTitle(info.publicacion ?? "");
    setYear(info.ano ?? "");
    setSummary(
      `${info.publicacion} (${info.ano.replace("\n", "").replace(/\s/, "")})\n${
        info.publicacionot ?? ""
      }\n${info.mensaje ?? ""}`
    );
    setCover(
      info.imagen ? `${URL_BASE}/public/publicaciones/${info.imagen}` : ""
    );
    setRecommended(info.recomendaciones ?? []);
  }, [data]);

  return (
    <BookPresentation
      id={id}
      title={title}
      year={year}
      summary={summary}
      cover={cover}
      category={category}
      recomneded={recomneded}
      loading={loading}
    />
  );
};

export default DetailScreen;
