import { Header } from "../../components/Header";
import "./newBook.css";

export const NewBookPagePresenter = ({ onSubmit }) => {
  return (
    <>
      <Header />
      <div className="profile">
        <h2>新規レビュー投稿</h2>
        <form onSubmit={onSubmit}>
          <div className="formItem">
            <label htmlFor="title">タイトル</label>
            <br />
            <input
              type="text"
              id="name"
              className="input"
              // onChange={(event) => handleChangeUserName(event.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="url">購入サイトのリンク</label>
            <br />
            <input
              type="url"
              id="url"
              className="input"
              // onChange={(event) => handleChangeUserName(event.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="url">本の詳細</label>
            <br />
            <textarea
              type="detail"
              id="detail"
              className="textarea"
              // onChange={(event) => handleChangeUserName(event.target.value)}
            />
          </div>
          <div className="formItem">
            <label htmlFor="url">本のレビュー</label>
            <br />
            <textarea
              type="review"
              id="review"
              className="textarea"
              // onChange={(event) => handleChangeUserName(event.target.value)}
            />
          </div>
          <div className="updateButtonContainer">
            <button className="updateButton" type="submit">
              投稿
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
