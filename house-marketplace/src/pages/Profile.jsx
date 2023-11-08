import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";

function Profile() {
  const navigate = useNavigate();
  const { isLoading, isAuth } = useUser();
  const { logout } = useLogout();

  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/sign-in");
  }, [isLoading, isAuth, navigate]);

  if (isAuth) {
    return (
      <div>
        <h1>profile</h1>
        <button onClick={logout}>logout</button>
      </div>
    );
  }
}

export default Profile;
