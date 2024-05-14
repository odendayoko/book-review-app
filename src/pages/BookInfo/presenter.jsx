import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import "./bookInfo.css";

export const BookInfoPagePresenter = ({ bookInfo }) => {
  if (!bookInfo) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="bookInfo">
        <h2>レビュー詳細</h2>
        <div className="formItem">
          <label htmlFor="title">本のタイトル</label>
          <div className="value">{bookInfo.title}</div>
        </div>
        <div className="formItem">
          <label htmlFor="url">購入サイトのURL</label>
          <div className="value">
            <a href={bookInfo.url} target="_blank" rel="noopener noreferrer">
              {bookInfo.url}
            </a>
          </div>
        </div>
        <div className="formItem">
          <label htmlFor="detail">本の詳細</label>
          <div className="value">{bookInfo.detail}</div>
        </div>
        <div className="formItem">
          <label htmlFor="review">本のレビュー</label>
          <div className="value">{bookInfo.review}</div>
        </div>
        <div className="formItem">
          <label htmlFor="reviewer">投稿者</label>
          <div className="value">{bookInfo.reviewer}</div>
        </div>
      </div>
    </>
  );
};
