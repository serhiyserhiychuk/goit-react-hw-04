import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";

import { useState, useEffect } from "react";

const App = () => {
  const [responce, setResponce] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function handleSearch(query) {
      try {
        const baseURL =
          "https://api.unsplash.com/photos/?client_id=OZ4LcaR_w8EOzH6tuoKvWOmMgGbKqowTrf-FN000WKI";
        setQuery(query);
        setIsLoading(true);
        const images = await axios.get(
          `${baseURL}&query=${query}&page=${page}&per_page=8`
        );
        setResponce(images.data);
      } catch (error) {
        ErrorMessage("Something went wrong, try again!");
      } finally {
        setIsLoading(false);
      }
    }
    handleSearch();
  }, [query, page]);

  const onSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setResponce([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={onSubmit} />
      {isLoading && <Loader />}
      {responce.length !== 0 && <ImageGallery images={responce} />}
      {responce.length !== 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
};

export default App;
