import { useEffect, useState } from "react";
import { HomePagePresenter } from "./presenter";
import axios from "axios";

export const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const booksPerPage = 10;

  useEffect(() => {
    fetchBooks(page).then((responseData) => {
      setBooks(responseData);
    });
  }, [page]);

  const fetchBooks = async (page) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `https://railway.bookreview.techtrain.dev/books?offset=${
          page * booksPerPage
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
      throw error;
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <HomePagePresenter books={books} handlePageChange={handlePageChange} />
  );
};
