import { Link } from "react-router-dom";
import "./home.css";

export const HomePagePresenter = () => {
  const books = [
    {
      id: "1",
      title: "カブトムシ",
      url: "https://hoge",
      detail: "少し背の高い",
      review: "ちょっと怖いよなこの歌詞",
      reviewer: "aiko",
    },
    {
      id: "2",
      title: "Pretender",
      url: "https://pretender",
      detail: "君は綺麗だ",
      review: "神曲！",
      reviewer: "髭男",
    },
  ];

  return (
    <div className="homeContainer">
      <h2>書籍レビュー一覧</h2>
      <ul className="bookList">
        {books.map((book) => (
          <li key={book.id} className="bookList__item">
            <Link to={`/detail/${book.id}`} className="bookItem__link">
              <div className="bookItem__title">{book.title}</div>
              <div className="bookItem__body">{book.detail}</div>
              <div className="bookItem__body">{book.review}</div>
              <div className="bookItem__user">by {book.reviewer}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
