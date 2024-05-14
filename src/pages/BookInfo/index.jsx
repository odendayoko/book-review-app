import axios from "axios";
import { BookInfoPagePresenter } from "./presenter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookInfoPage = () => {
  const { id } = useParams();

  const [bookInfo, setBookInfo] = useState(null);

  const fetchBookInfo = async (bookId, token) => {
    try {
      const response = await axios.get(
        `https://railway.bookreview.techtrain.dev/books/${bookId}`,
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      return;
    }

    fetchBookInfo(id, token).then((responseData) => {
      setBookInfo(responseData);
    });
  }, [id]);

  return <BookInfoPagePresenter bookInfo={bookInfo} />;
};
