import { Link } from "react-router-dom";
import "./home.css";
import { Pagination } from "../../components/Pagination";

export const HomePagePresenter = ({ books, handlePageChange }) => {
  return (
    <div className="homeContainer">
      <h2 className="homeContainer__title">書籍レビュー一覧</h2>
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
      <div className="paginationContainer">
        <Pagination
          // 最大データ数どうやって取得すればいいの？
          // とりあえずこれ以上のデータは存在しなかったので、ベタ書きしておく
          total={22}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
