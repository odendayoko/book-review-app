import "./profile.css";
import { Header } from "../../components/Header";

export const ProfilePagePresenter = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <h2>プロフィール編集</h2>
        <form>
          <div className="formItem">
            <label htmlFor="name">名前</label>
            <br />
            <input type="name" id="name" className="input" />
          </div>
          <div className="updateButtonContainer">
            <button className="updateButton" type="submit">
              変更
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
