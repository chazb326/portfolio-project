"use client";

import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import styles from "./Spotify_GetToken.module.css";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Spotify_GetTokenProps {
  accessToken: string;
  setAccessToken: React.Dispatch<SetStateAction<string>>;
}

const Spotify_GetToken = ({
  accessToken,
  setAccessToken,
}: Spotify_GetTokenProps) => {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>(usePathname());
  const [redirectUrl, setRedirectUrl] = useState<string>("");
  const [clientId, setClientId] = useState<string>("");
  const authorizationEndpoint = "https://accounts.spotify.com/authorize";
  const tokenEndpoint = "https://accounts.spotify.com/api/token";
  const scope = "user-read-private user-read-email";
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  async function redirectToSpotifyAuthorize() {
    localStorage.setItem("client_id", clientId);
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomValues = crypto.getRandomValues(new Uint8Array(64));
    const randomString = randomValues.reduce(
      (acc, x) => acc + possible[x % possible.length],
      ""
    );

    const code_verifier = randomString;
    const data = new TextEncoder().encode(code_verifier);
    const hashed = await crypto.subtle.digest("SHA-256", data);

    const code_challenge_base64 = btoa(
      String.fromCharCode(...new Uint8Array(hashed))
    )
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

    localStorage.setItem("code_verifier", code_verifier);
    localStorage.setItem("client_id", clientId);

    const authUrl = new URL(authorizationEndpoint);
    const params = {
      response_type: "code",
      client_id: clientId,
      scope: scope,
      code_challenge_method: "S256",
      code_challenge: code_challenge_base64,
      redirect_uri: redirectUrl,
    };

    authUrl.search = new URLSearchParams(params).toString();
    location.href = authUrl.toString(); // Redirect the user to the authorization server for login
  }

  useEffect(() => {
    const url = location.href;
    const { protocol, hostname, port } = location;
    const origin = protocol + "//" + hostname + (port ? ":" + port : "");
    setRedirectUrl(`${origin}/spotify-project/`);
    console.log(`${origin}/spotify-project/`);

    if (url.includes("code=")) {
      setPathname(url);
      setCode(url.split("=")[1]);
    }

    const _clientId: string | null = localStorage.getItem("client_id");

    if (_clientId !== null) {
      setClientId(_clientId);
    }
  }, [pathname, setPathname, setCode, setClientId, setRedirectUrl]);

  // Soptify API Calls
  const getToken = async () => {
    // stored in the previous step
    const codeVerifier: any = localStorage.getItem("code_verifier");

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUrl,
        code_verifier: codeVerifier,
      }),
    };

    const response = await fetch(tokenEndpoint, payload);
    const body = await response.json();
    const { access_token, expires_in } = body;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expires_in", expires_in);

    const now = new Date();
    const expiry = {
      value: "expiry",
      timestamp: new Date(now.getTime() + expires_in * 1000),
    };

    localStorage.setItem("expires", JSON.stringify(expiry));
    setAccessToken(access_token);
  };

  return (
    <>
      {loading ? (
        <div className={styles.container}>Loading...</div>
      ) : (
        <div className={styles.container}>
          {!accessToken.length && (
            <div
              className={styles.modal}
              style={{ width: isDesktop ? "500px" : "400px" }}
            >
              <h2>Give Spotify Permission to Connect to your App</h2>
              <form className={styles.form}>
                <label htmlFor="clientId" className={styles.form_label}>
                  Client Id (<span style={{ color: "red" }}>required</span>):
                </label>
                <input
                  className={styles.form_input}
                  type="text"
                  id="clientId"
                  value={clientId}
                  onChange={(e) => {
                    setClientId(e.target.value);
                  }}
                />
              </form>
              <button
                onClick={redirectToSpotifyAuthorize}
                className={clsx(styles.button, {
                  [styles.inactive]: !clientId.length || code.length > 0,
                })}
              >
                Submit
              </button>
              <button
                onClick={getToken}
                className={clsx(styles.button, {
                  [styles.inactive]: !code.length,
                })}
              >
                Login to Spotify
              </button>
              <p style={{ display: code ? "none" : "" }}>
                (must submit Client Id before Logging in)
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { Spotify_GetToken };
