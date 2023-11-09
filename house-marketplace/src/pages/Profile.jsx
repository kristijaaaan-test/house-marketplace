import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";

function Profile() {
  const [changeDetails, setChangeDetails] = useState(false);
  const navigate = useNavigate();
  const { isLoading, isAuth, user } = useUser();
  // console.log(user);
  const { logout } = useLogout();

  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/sign-in");
  }, [isLoading, isAuth, navigate]);

  function onSubmit() {}

  function onChange() {}

  if (isAuth) {
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
                value={user?.user_metadata?.name}
                onChange={onChange}
              />
              <input
                type="text"
                id="email"
                className="profileEmail"
                disabled={true}
                value={user?.email}
                onChange={onChange}
              />
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Profile;
