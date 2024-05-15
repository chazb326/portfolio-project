"use client";

import React, { SetStateAction, useState } from "react";
import styles from "./Spotify_SearchBar.module.css";

interface Spotify_SearchBarProps {
  accessToken: string;
  setTracks: React.Dispatch<React.SetStateAction<any[]>>;
}

const Spotify_SearchBar = ({
  accessToken,
  setTracks,
}: Spotify_SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleclick = async () => {
    if (search === "") {
      setTracks([]);
    } else {
      try {
        const searchArr = search.split(" ");
        const q = searchArr.join("+");
        console.log("getting tracks...");

        const searchEndpoint = `https://api.spotify.com/v1/search?q=${q}&type=track&limit=5&market=ES`;

        await fetch(searchEndpoint, {
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
            }
          })
          .then((data) => {
            setTracks(data.tracks.items);
            return data;
          })
          .catch((err) => console.error("Error: ", err));

        console.log("done.");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="track-input"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
        required
        className={styles.input}
      />

      <button className={styles.button} onClick={handleclick}>
        Search
      </button>
    </div>
  );
};

export { Spotify_SearchBar };
