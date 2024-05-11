import { Link } from "react-router-dom";
import "./Login.css";

export const LoginPagePresenter = () => {
  return (
    <div className="login">
      <h2>ログイン</h2>
      <form onSubmit={() => {}}>
        <div className="form-item">
          <label htmlFor="email">メールアドレス</label>
          <br />
          <input
            type="email"
            id="email"
            className="input"
            // {...register("email", { required: "メールアドレスは必須です" })}
          />
          {/* {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )} */}
        </div>
        <div className="form-item">
          <label htmlFor="password">パスワード</label>
          <br />
          <input
            type="password"
            id="password"
            className="input"
            // {...register("password", {
            //   required: "パスワードは必須です",
            // })}
          />
          {/* {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )} */}
        </div>
        <div className="button-container">
          <button className="login-button" type="submit">
            ログイン
          </button>
        </div>
      </form>
      <div className="button-container">
        <label>はじめての方はこちら</label>
        <br />
        <br />
        <Link to="/SignUp">
          <button className="navigate-button">ユーザー新規作成</button>
        </Link>
      </div>
    </div>
  );
};
