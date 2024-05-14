import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";

export const BookInfoPagePresenter = ({ bookInfo }) => {
  if (!bookInfo) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="profile">
        <h2>レビュー詳細</h2>
        <div className="formItem">
          <label htmlFor="title">本のタイトル</label>
          <br />
          {bookInfo.title}
        </div>
        <div className="formItem">
          <label htmlFor="url">購入サイトのURL</label>
          <br />
          {bookInfo.url}
        </div>
        <div className="formItem">
          <label htmlFor="detail">本の詳細</label>
          <br />
          {bookInfo.detail}
        </div>
        <div className="formItem">
          <label htmlFor="review">本のレビュー</label>
          <br />
          {bookInfo.review}
        </div>
        <div className="formItem">
          <label htmlFor="review">投稿者</label>
          <br />
          {bookInfo.reviewer}
        </div>
      </div>
    </>
  );
};
