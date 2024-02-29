import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import axios from "axios";

import { useState, useEffect } from "react";

const App = () => {
  const [responce, setResponce] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(query) {
    const baseURL =
      "https://api.unsplash.com/photos/?client_id=OZ4LcaR_w8EOzH6tuoKvWOmMgGbKqowTrf-FN000WKI";
    const params = {
      query: query,
      page: 1,
      per_page: 3,
    };
    setIsLoading(true);
    const images = await axios.get(
      `${baseURL}&query=${params.query}&page=${params.page}&per_page=${params.per_page}`
    );
    setResponce(images.data);
    setIsLoading(false);
  }
  return (
    <>
      <SearchBar onSearch={onSubmit} />
      {isLoading && <Loader />}
      {responce.length !== 0 && <ImageGallery images={responce} />}
      {responce.length !== 0 && <LoadMoreBtn />}
    </>
  );
};

export default App;
