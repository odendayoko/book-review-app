import "./profile.css";
import { Header } from "../../components/Header";

export const ProfilePagePresenter = ({
  formValue,
  onUpdate,
  handleChangeUserName,
}) => {
  return (
    <>
      <Header />
      <div className="profile">
        <h2>プロフィール編集</h2>
        <form onSubmit={onUpdate}>
          <div className="formItem">
            <label htmlFor="name">名前</label>
            <br />
            <input
              type="name"
              id="name"
              className="input"
              onChange={(event) => handleChangeUserName(event.target.value)}
              value={formValue.name}
            />
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
