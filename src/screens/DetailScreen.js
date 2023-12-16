import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BackHandler, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import BookPresentation from "../components/DetailScreen/BookPresentation";
import useXMLHttpRequest from "../hooks/useXMLHttpRequest";
import { URL_BASE } from "../util/constans";

const DetailScreen = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [cover, setCover] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [recomneded, setRecommended] = useState([]);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const {
    params: { id, category },
  } = useRoute();

  const { data, error, loading } = useXMLHttpRequest(
    `${URL_BASE}/api/articulo/${category}/${id}`,
    "GET",
    null
  );

  const pdfUrl = `${URL_BASE}/public/publicaciones/${pdfName}`;

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.status !== "success") {
      return;
    }
    const info = data.data;
    setTitle(info.publicacion ?? "");
    setPdfName(info.liga ?? "");
    setYear(info.ano ?? "");
    setSummary(
      `${info.publicacion} (${info.ano
        .toString()
        .replace("\n", "")
        .replace(/\s/, "")})\n${info.publicacionot ?? ""}\n${
        info.mensaje ?? ""
      }`
    );
    setCover(
      info.imagen ? `${URL_BASE}/public/publicaciones/${info.imagen}` : ""
    );
    setRecommended(info.recomendaciones ?? []);
  }, [data]);

  useEffect(() => {
    const backAction = () => {
      if (isPdfOpen) {
        setIsPdfOpen(false);
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      {!isPdfOpen ? (
        <BookPresentation
          id={id}
          title={title}
          year={year}
          summary={summary}
          cover={cover}
          category={category}
          recomneded={recomneded}
          loading={loading}
          pdfName={pdfName}
          isPdfOpen={isPdfOpen}
          openPdf={() => setIsPdfOpen(true)}
          closePdf={() => setIsPdfOpen(false)}
        />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setIsPdfOpen(false)}
            className="bg-[#427B70] items-center justify-center py-3"
          >
            <Text className="text-white">Cerrar</Text>
          </TouchableOpacity>
          <WebView
            source={{
              uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=${pdfUrl}`,
            }}
          />
        </>
      )}
    </>
  );
};

export default DetailScreen;
