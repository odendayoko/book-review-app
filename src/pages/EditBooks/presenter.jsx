import React from "react";
import { Header } from "../../components/Header";
import "./editBooks.css"; // CSSファイルをインポート

export const EditBooksPagePresenter = ({ register, handleSubmit, errors }) => {
  return (
    <>
      <Header />
      <div className="editBooks">
        <h2>レビュー編集</h2>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label htmlFor="title">本のタイトル</label>
            <input
              type="text"
              id="title"
              className="input"
              {...register("title", { required: "タイトルは必須です" })}
            />
            {errors.title && (
              <span className="error-message">{errors.title.message}</span>
            )}
          </div>
          <div className="formItem">
            <label htmlFor="url">購入サイトのURL</label>
            <input
              type="url"
              id="url"
              className="input"
              {...register("url", { required: "購入サイトのURLは必須です" })}
            />
            {errors.url && (
              <span className="error-message">{errors.url.message}</span>
            )}
          </div>
          <div className="formItem">
            <label htmlFor="detail">本の詳細</label>
            <textarea
              id="detail"
              className="textarea"
              {...register("detail", { required: "本の詳細は必須です" })}
            />
            {errors.detail && (
              <span className="error-message">{errors.detail.message}</span>
            )}
          </div>
          <div className="formItem">
            <label htmlFor="review">本のレビュー</label>
            <textarea
              id="review"
              className="textarea"
              {...register("review", { required: "本のレビューは必須です" })}
            />
            {errors.review && (
              <span className="error-message">{errors.review.message}</span>
            )}
          </div>
          <div className="updateButtonContainer">
            <button className="updateButton" type="submit">
              更新
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
