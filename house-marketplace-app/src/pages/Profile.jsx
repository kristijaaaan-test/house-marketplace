import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : <h1>Not logged in</h1>;
}

export default Profile;
