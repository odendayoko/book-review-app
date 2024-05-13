import { Link } from "react-router-dom";
import "./home.css";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";

export const HomePagePresenter = ({ books, handlePageChange, isLoggedIn }) => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <h2 className="homeContainer__title">書籍レビュー一覧</h2>
        <div className="newBookButtonContainer">
          <Link to={isLoggedIn ? "/new" : "/login"}>
            <button className="newBookButton">
              {isLoggedIn
                ? "＋ レビューを投稿する"
                : "＋ ログインしてレビューを投稿する"}
            </button>
          </Link>
        </div>
        <ul className="bookList">
          {books.map((book) => (
            <li key={book.id} className="bookList__item">
              <Link to={`/detail/${book.id}`} className="bookItem__link">
                <div className="bookItem__title">{book.title}</div>
                <div className="bookItem__body">{book.detail}</div>
                <div className="bookItem__body">{book.review}</div>
                <div className="bookItem__user">by {book.reviewer}</div>
                <div className="bookItem__url">
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(book.url, "_blank");
                    }}
                  >
                    本の購入はこちら
                  </a>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="paginationContainer">
          <Pagination
            // 最大データ数どうやって取得すればいいの？
            // とりあえずこれ以上のデータは存在しなかったので、ベタ書きしておく
            total={22}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
