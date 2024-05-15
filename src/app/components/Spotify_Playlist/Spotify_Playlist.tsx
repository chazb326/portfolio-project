"use client";

import React, { useState } from "react";
import styles from "./Spotify_Playlist.module.css";
import { Spotify_Track } from "../Spotify_Track";

interface Spotify_PlaylistProps {
  accessToken: string;
  playlist: any[];
  setPlaylist: React.Dispatch<React.SetStateAction<any[]>>;
}

const Spotify_Playlist = ({
  accessToken,
  playlist,
  setPlaylist,
}: Spotify_PlaylistProps) => {
  return (
    <div className={styles.container}>
      {playlist.length ? (
        <div className={styles.results}>
          <h1>Playlist</h1>
          {playlist.map((t, index) => (
            <Spotify_Track
              t={t}
              key={index}
              playlist={playlist}
              setPlaylist={setPlaylist}
              id={index}
            />
          ))}
        </div>
      ) : (
        <div className={styles.results}>
          <h1>Playlist</h1>
          <br />
          <div>No tracks added yet!</div>
        </div>
      )}
    </div>
  );
};

export { Spotify_Playlist };
