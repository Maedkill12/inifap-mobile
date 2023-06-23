import { useRoute } from "@react-navigation/native";
import BookContainer from "../components/DetailScreen/BookContainer";

const DetailScreen = () => {
  const {
    params: { id },
  } = useRoute();

  return <BookContainer id={id} />;
};

export default DetailScreen;
