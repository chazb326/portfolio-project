"use client";

import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import styles from "./Spotify_Logout.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Spotify_LogoutProps {
  accessToken: string;
  setAccessToken: React.Dispatch<SetStateAction<string>>;
}

const Spotify_Logout = ({
  accessToken,
  setAccessToken,
}: Spotify_LogoutProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  const handleLogout = () => {
    //remove the token from localStorage and reset the state var accessToken
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_in");
    localStorage.removeItem("expires");
    setAccessToken("");

    //redirect the user to the /spotify-project route with no code in it
    if (location.href.indexOf("localhost") > -1) {
      location.href = "http://localhost:3000/spotify-project";
    } else {
      location.href =
        "https://chazb326.github.io/portfolio-project/spotify-project";
    }
  };

  return (
    <div
      className={styles.box}
      style={{ width: isDesktop ? "400px" : "200px" }}
    >
      {accessToken && (
        <button className={styles.button} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export { Spotify_Logout };
