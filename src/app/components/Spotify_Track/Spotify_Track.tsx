"use client";

import React, { useEffect, useState } from "react";
import styles from "./Spotify_Track.module.css";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Spotify_TrackProps {
  t: any;
  isSearchResult?: boolean;
  setPlaylist: React.Dispatch<React.SetStateAction<any[]>>;
  playlist: any[];
  id: number;
}

const Spotify_Track = ({
  t,
  isSearchResult,
  setPlaylist,
  playlist,
  id,
}: Spotify_TrackProps) => {
  const [artists, setArtists] = useState<any[]>([]);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  useEffect(() => {
    const _artists: any = [];
    t.artists.forEach((a: any) => {
      _artists.push(a.name);
    });

    setArtists(_artists);
  }, [t, setArtists]);

  const handleAdd = () => {
    const _playlist: any = [...playlist];
    _playlist.push(t);

    setPlaylist!(_playlist);
  };

  const handleRemove = () => {
    const _playlist: any = [...playlist];
    _playlist.splice(id, 1);

    setPlaylist!(_playlist);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.album}
        style={{ width: isDesktop ? "20%" : "30%" }}
      >
        <Image
          style={{ borderRadius: "8px" }}
          src={t.album.images[2].url}
          height={t.album.images[2].height + 10}
          width={t.album.images[2].height + 10}
          alt="album-image"
        />
      </div>
      <div className={styles.song} style={{ width: isDesktop ? "70%" : "60%" }}>
        <p style={{ fontSize: isDesktop ? "28px" : "26px" }}>{t.name}</p>
        <p
          style={{
            color: "rgba(256, 256, 256, 0.8)",
            fontSize: isDesktop ? "18px" : "16px",
          }}
        >
          {artists.join(", ")}
        </p>
      </div>
      {isSearchResult ? (
        <button className={styles.button} onClick={handleAdd}>
          +
        </button>
      ) : (
        <button className={styles.button} onClick={handleRemove}>
          -
        </button>
      )}
    </div>
  );
};

export { Spotify_Track };
