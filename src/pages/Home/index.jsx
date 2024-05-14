import { useContext, useEffect, useState } from "react";
import { HomePagePresenter } from "./presenter";
import axios from "axios";
import { AuthContext } from "../../router/AuthContext";

export const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const booksPerPage = 10;

  useEffect(() => {
    // pageの変更だけを検知して再フェッチを行う
    fetchBooks(page).then((responseData) => {
      setBooks(responseData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchBooks = async (page) => {
    try {
      // tokenもAuthContextから返してもいいかも
      const token = localStorage.getItem("token");
      const offset = page * booksPerPage;
      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
      // ログイン状況によってAPIが異なる
      const response = await axios.get(
        `https://railway.bookreview.techtrain.dev/${
          isLoggedIn ? "books" : "public/books"
        }?offset=${offset}`,
        { headers }
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

  const sendLog = async (selectBookId, token) => {
    try {
      axios.post(
        `https://railway.bookreview.techtrain.dev/logs`,
        { selectBookId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response.data.ErrorMessageJP);
      }
      throw error;
    }
  };

  const handleClickItem = (id) => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    sendLog(id, token);
  };

  return (
    <HomePagePresenter
      books={books}
      handlePageChange={handlePageChange}
      isLoggedIn={isLoggedIn}
      handleClickItem={handleClickItem}
    />
  );
};
