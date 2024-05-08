const { render, screen } = require("@testing-library/react");
const { SignUpPage } = require("../pages/Signup");

describe("ユーザー新規作成画面", () => {
  it("メールアドレス入力フォームが存在すること", () => {
    render(<SignUpPage />);
    const emailInput = screen.getByLabelText("メールアドレス");
    expect(emailInput).toBeInTheDocument();
  });

  it("名前入力フォームが存在すること", () => {
    render(<SignUpPage />);
    const nameInput = screen.getByLabelText("名前");
    expect(nameInput).toBeInTheDocument();
  });

  it("パスワード入力フォームが存在すること", () => {
    render(<SignUpPage />);
    const passwordInput = screen.getByLabelText("パスワード");
    expect(passwordInput).toBeInTheDocument();
  });

  it("作成ボタンが存在すること", () => {
    render(<SignUpPage />);
    const createButton = screen.getByRole("button", { name: "作成" });
    expect(createButton).toBeInTheDocument();
  });
});
