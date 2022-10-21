import React from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export default function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      auth,
      (authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
