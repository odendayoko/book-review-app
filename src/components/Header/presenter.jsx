import "./header.css";

export const HeaderPresenter = ({ isLoggedIn, user }) => {
  return (
    <header className="header">
      <h1 className="header__title">Book Review</h1>
      {isLoggedIn ? (
        <div className="header__userName">{user?.name}</div>
      ) : (
        <button onClick={() => {}} className="header__loginButton">
          ログイン
        </button>
      )}
    </header>
  );
};
