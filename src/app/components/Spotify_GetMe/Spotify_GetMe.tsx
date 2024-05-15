"use client";

import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import styles from "./Spotify_GetMe.module.css";
import { Me } from "@/app/models/Me";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Spotify_GetTokenProps {
  accessToken: string;
}

const Spotify_GetMe = ({ accessToken }: Spotify_GetTokenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Me | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  const getMe = useCallback(async () => {
    setLoading(true);
    console.log("getting spotify profile...");

    try {
      const url = `https://api.spotify.com/v1/me`;

      const _profile = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            Promise.reject(response);
            setLoading(false);
          }
        })
        .then((data) => {
          return data;
        })
        .catch((err) => console.error("Error: ", err));

      console.log("done.");
      setProfile(_profile);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [setLoading, setProfile, accessToken]);

  useEffect(() => {
    getMe();
  }, [accessToken, getMe]);

  return (
    <div style={{ width: isDesktop ? "400px" : "250px" }}>
      {profile && (
        <Link href="https://open.spotify.com/" className={styles.profileBox}>
          <h3>{profile.display_name}</h3>
          <div className={styles.profileImg}>
            <Image
              style={{ borderRadius: "100%" }}
              src={profile.images[0].url}
              width={profile.images[0].width - 12}
              height={profile.images[0].height - 12}
              alt="profile-image"
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export { Spotify_GetMe };
