/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useCallback } from "react";
import styles from "./RP_LoadMoreData.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const RP_LoadMoreData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1048px)");

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=3&skip=${
          count === 0 ? 0 : count * 3
        }`
      );

      let result: any;
      if (response.ok) {
        result = await response.json();
      } else {
        console.log("Request failed!");
      }

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [setLoading, count, setProducts]);

  useEffect(() => {
    fetchProducts();
  }, [count, fetchProducts]);

  useEffect(() => {
    if (products && products.length === 9) setDisableButton(true);
  }, [products, setDisableButton]);

  return (
    <>
      <h2 className={styles.header}>Load More Data</h2>
      <div className={styles.load_more_container}>
        <div
          className={
            isDesktop
              ? styles.product_container
              : styles.product_container_mobile
          }
        >
          {products && products.length
            ? products.map((item) => (
                <div className={styles.product} key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className={styles.columnBox}>
        <button
          onClick={() => setCount(count + 1)}
          className={styles.load_button}
          disabled={disableButton}
        >
          Load More Products
        </button>
        {disableButton ? (
          <>
            <p style={{ textAlign: "center" }}>
              You have reached the max product count of 9
            </p>
            <button
              onClick={() => {
                setProducts([]);
                setCount(0);
                setDisableButton(false);
              }}
              className={styles.load_button}
            >
              reset?
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export { RP_LoadMoreData };
