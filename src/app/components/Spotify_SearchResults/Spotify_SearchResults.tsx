"use client";

import React, { useState } from "react";
import styles from "./Spotify_SearchResults.module.css";
import { Spotify_Track } from "../Spotify_Track";

interface Spotify_SearchResultsProps {
  accessToken: string;
  tracks: any[];
  setPlaylist: React.Dispatch<React.SetStateAction<any[]>>;
  playlist: any[];
}

const Spotify_SearchResults = ({
  accessToken,
  tracks,
  setPlaylist,
  playlist,
}: Spotify_SearchResultsProps) => {
  return (
    <div className={styles.container}>
      {tracks.length ? (
        <div className={styles.results}>
          <h1>Results</h1>
          {tracks.map((t, index) => (
            <Spotify_Track
              t={t}
              key={index}
              isSearchResult
              setPlaylist={setPlaylist}
              playlist={playlist}
              id={index}
            />
          ))}
        </div>
      ) : (
        <div className={styles.results}>
          <h1>No results</h1>
        </div>
      )}
    </div>
  );
};

export { Spotify_SearchResults };
