import { useEffect, useState } from "react";
import { HomePagePresenter } from "./presenter";
import axios from "axios";

export const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // 仮でpageを0としておく
    fetchBooks(0).then((responseData) => {
      setBooks(responseData);
    });
  }, []);

  const fetchBooks = async (page) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `https://railway.bookreview.techtrain.dev/books?offset=${page}`,
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

  return <HomePagePresenter books={books} />;
};
