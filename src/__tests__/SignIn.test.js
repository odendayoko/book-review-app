const { render, screen } = require("@testing-library/react");

// TODO
// SignInコンポーネントを作成したらimport文を記載
describe("ログイン画面", () => {
  it("メールアドレス入力フォームが存在すること", () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText("メールアドレス");
    expect(emailInput).toBeInTheDocument();
  });

  it("パスワード入力フォームが存在すること", () => {
    render(<SignIn />);
    const passwordInput = screen.getByPlaceholderText("パスワード");
    expect(passwordInput).toBeInTheDocument();
  });

  it("ログインボタンが存在すること", () => {
    render(<SignIn />);
    const loginButton = screen.getByRole("button", { name: "ログイン" });
    expect(loginButton).toBeInTheDocument();
  });
});
