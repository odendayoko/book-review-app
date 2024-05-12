import "./header.css";

export const HeaderPresenter = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <h1 className="header__title">Book Review</h1>
      {isLoggedIn ? (
        <div className="header__userName">ユーザー名</div>
      ) : (
        <button onClick={() => {}} className="header__loginButton">
          ログイン
        </button>
      )}
    </header>
  );
};
