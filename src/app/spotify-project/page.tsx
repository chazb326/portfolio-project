"use client";

import styles from "./page.module.css";
import useMediaQuery from "../hooks/useMediaQuery";
import { Spotify_GetToken } from "../components/Spotify_GetToken/Spotify_GetToken";
import { useEffect, useState } from "react";
import { Spotify_GetMe } from "../components/Spotify_GetMe";
import { Spotify_Logout } from "../components/Spotify_Logout";
import { Spotify_SearchBar } from "../components/Spotify_SearchBar";
import { Spotify_SearchResults } from "../components/Spotify_SearchResults";
import clsx from "clsx";
import { Spotify_Playlist } from "../components/Spotify_Playlist";

export default function Spotify_Project() {
  const isDesktop = useMediaQuery("(min-width: 1100px)");
  const [accessToken, setAccessToken] = useState<string>("");
  const [tracks, setTracks] = useState<any[]>([]);
  const [playlist, setPlaylist] = useState<any[]>([]);

  useEffect(() => {
    console.log(playlist);
  }, [playlist]);

  const checkToken = () => {
    const expiryItem = localStorage.getItem("expires");
    console.log(expiryItem);

    if (expiryItem !== undefined || expiryItem !== null) {
      const expires = JSON.parse(expiryItem!);
      const date = new Date();
      const now = date.toISOString();

      if (now > expires.timestamp) {
        return "expired";
      } else {
        return "not expired";
      }
    } else {
      return "expired";
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("access_token");
    if (localToken === undefined || localToken === null) {
      setAccessToken("");
    } else {
      const expiry = checkToken();

      if (expiry === "not expired") {
        setAccessToken(localToken!);
      } else {
        //remove the token from localStorage and reset the state var accessToken
        localStorage.removeItem("access_token");
        localStorage.removeItem("expires_in");
        localStorage.removeItem("expires");
        setAccessToken("");
      }
    }
  }, [accessToken, setAccessToken]);

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
          top: isDesktop ? "170px" : "140px",
        }}
      >
        {!accessToken && (
          <div className={styles.appBox}>
            <div className={styles.header}>
              <div className={styles.headerTextBox}>
                <h2 className={styles.headerText}>
                  Ja<span style={{ color: "rgb(113, 45, 170)" }}>mmm</span>ing
                </h2>
              </div>
            </div>

            <Spotify_GetToken
              setAccessToken={setAccessToken}
              accessToken={accessToken}
            />
          </div>
        )}

        {accessToken && (
          <div className={styles.appBox}>
            {isDesktop ? (
              <div className={styles.header}>
                <Spotify_Logout
                  accessToken={accessToken}
                  setAccessToken={setAccessToken}
                />

                <div className={styles.headerTextBox}>
                  <h2 className={styles.headerText}>
                    Ja<span style={{ color: "rgb(113, 45, 170)" }}>mmm</span>ing
                  </h2>
                </div>

                <Spotify_GetMe accessToken={accessToken} />
              </div>
            ) : (
              <div className={styles.headerMobile}>
                <div className={styles.headerTextBox}>
                  <h2 className={styles.headerText}>
                    Ja<span style={{ color: "rgb(113, 45, 170)" }}>mmm</span>ing
                  </h2>
                </div>

                <div className={styles.mobileProfile}>
                  <Spotify_Logout
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
                  />

                  <Spotify_GetMe accessToken={accessToken} />
                </div>
              </div>
            )}

            <Spotify_SearchBar
              accessToken={accessToken}
              setTracks={setTracks}
            />

            <div
              className={clsx(styles.tracks, {
                [styles.tracksMobile]: !isDesktop,
              })}
            >
              <Spotify_SearchResults
                accessToken={accessToken}
                tracks={tracks}
                setPlaylist={setPlaylist}
                playlist={playlist}
              />

              <Spotify_Playlist
                accessToken={accessToken}
                playlist={playlist}
                setPlaylist={setPlaylist}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
