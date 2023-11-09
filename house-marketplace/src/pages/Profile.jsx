import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";
import { useUpdateUser } from "./useUpdateUser";

function Profile() {
  const [changeDetails, setChangeDetails] = useState(false);
  const { updateUser } = useUpdateUser();
  const {
    user: {
      email,
      user_metadata: { name: currentName },
    },
  } = useUser();
  const [name, setName] = useState(currentName);
  // console.log(user);
  const { logout } = useLogout();

  function onSubmit() {
    if (!name) return;
    updateUser({ name });
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button className="logOut" onClick={logout}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prev) => !prev);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>

        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="email"
              className="profileEmail"
              disabled={true}
              defaultValue={email}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;