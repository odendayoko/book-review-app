import { Link } from "react-router-dom";
import "./header.css";

export const HeaderPresenter = ({
  isLoggedIn,
  user,
  handleLoginClick,
  handleLogoutClick,
}) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Book Review</h1>
      </Link>
      {isLoggedIn ? (
        <div className="header__buttonContainer">
          <Link to="/profile">
            <div className="header__userName">{user?.name}</div>
          </Link>
          <button onClick={handleLogoutClick} className="header__logoutButton">
            ログアウト
          </button>
        </div>
      ) : (
        <button onClick={handleLoginClick} className="header__loginButton">
          ログイン
        </button>
      )}
    </header>
  );
};
