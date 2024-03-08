/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useCallback } from "react";
import styles from "./RP_ImageSlider.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import clsx from "clsx";

interface RP_ImageSliderProps {
  url: string;
  page: string;
  limit: string;
}

const RP_ImageSlider = ({
  url,
  page = "1",
  limit = "5",
}: RP_ImageSliderProps) => {
  const isDesktop = useMediaQuery("(min-width: 1048px)");
  const [images, setImages] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async (getUrl: string) => {
    try {
      setLoading(true);

      const res = await fetch(getUrl);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e: any) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(`${url}?page=${page}&limit=${limit}`);
    }
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading data, please wait!</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <>
      <h2 className={styles.header}>Image Slider</h2>
      <div className={isDesktop ? styles.container : styles.mobile_container}>
        <BsArrowLeftCircleFill
          onClick={() => handlePrevious()}
          style={{ display: currentSlide === 0 ? "none" : "" }}
          className={clsx(styles.arrow, styles.arrow_left)}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                src={imageItem.download_url}
                alt={imageItem.download_url}
                key={imageItem.id}
                className={
                  currentSlide === index
                    ? styles.current_image
                    : styles.hide_current_image
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={() => handleNext()}
          style={{ display: currentSlide === images.length - 1 ? "none" : "" }}
          className={clsx(styles.arrow, styles.arrow_right)}
        />
        <span className={styles.circle_indicators}>
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? styles.current_indicator
                      : clsx(
                          styles.current_indicator,
                          styles.inactive_indicator
                        )
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export { RP_ImageSlider };
