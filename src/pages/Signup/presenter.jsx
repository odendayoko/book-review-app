import "./SignUp.css";

export const SignUpPagePresenter = () => {
  return (
    <div className="signUp">
      <h2>ユーザー新規作成</h2>
      <form onSubmit={() => {}}>
        <div className="form-item">
          <label>メールアドレス</label>
          <br />
          <input type="email" id="email" className="input" />
        </div>
        <div className="form-item">
          <label>名前</label>
          <br />
          <input type="text" id="name" className="input" />
        </div>
        <div className="form-item">
          <label>パスワード</label>
          <br />
          <input type="password" id="password" className="input" />
        </div>
        <div className="signUp-button-container">
          <button type="button" onClick={() => {}} className="signUp-button">
            作成
          </button>
        </div>
      </form>
    </div>
  );
};
