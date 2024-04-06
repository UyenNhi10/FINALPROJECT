import { useEffect, useState } from "react";
import HeaderGuest from "./HeaderGuest/HeaderGuest";
import HeaderUser from "./HeaderUser/HeaderUser";

const Header = () => {
  const [showHeaderUser, setShowHeaderUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setShowHeaderUser(false);
    } else {
      setShowHeaderUser(true);
    }
  }, []);

  return (
    <div>
      {showHeaderUser ? (
        <HeaderUser setShowHeaderUser={setShowHeaderUser} />
      ) : (
        <HeaderGuest setShowHeaderUser={setShowHeaderUser} />
      )}
    </div>
  );
};

export default Header;
