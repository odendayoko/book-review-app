import "./SignUp.css";

export const SignUpPagePresenter = ({ register, handleSubmit, errors }) => {
  return (
    <div className="signUp">
      <h2>ユーザー新規作成</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="email">メールアドレス</label>
          <br />
          <input
            type="email"
            id="email"
            className="input"
            {...register("email", { required: "メールアドレスは必須です" })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="name">名前</label>
          <br />
          <input
            type="text"
            id="name"
            className="input"
            {...register("name", { required: "名前は必須です" })}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="password">パスワード</label>
          <br />
          <input
            type="password"
            id="password"
            className="input"
            {...register("password", {
              required: "パスワードは必須です",
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <div className="signUp-button-container">
          <button className="signUp-button" type="submit">
            作成
          </button>
        </div>
      </form>
    </div>
  );
};
