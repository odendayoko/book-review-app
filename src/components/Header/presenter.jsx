import "./header.css";

export const HeaderPresenter = () => {
  return (
    <header className="header">
      <h1 className="header__title">Book Review</h1>
      {/* <button onClick={() => {}} className="header__logOutButton">
        ログアウト
      </button> */}
      <div className="header__userName">ユーザー名</div>
    </header>
  );
};
