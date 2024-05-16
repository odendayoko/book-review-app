import axios from "axios";
import { BookInfoPagePresenter } from "./presenter";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const fetchBookInfo = async (bookId, token) => {
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

export const BookInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      navigate("/login");
      return;
    }

    fetchBookInfo(id, token).then((responseData) => {
      setBookInfo(responseData);
    });
  }, [id, navigate]);

  return <BookInfoPagePresenter bookInfo={bookInfo} />;
};
