import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return (
      <div className="image-slider-wrapper">
        <h2 className="slider-header">Image Slider</h2>
        <div className="slider-container">
          <div className="slider-message loading-message">
            Loading images! Please wait...
          </div>
        </div>
      </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="image-slider-wrapper">
        <h2 className="slider-header">Image Slider</h2>
        <div className="slider-container">
          <div className="slider-message error-message">
            Error occurred! {errorMsg}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="image-slider-wrapper">
      <h2 className="slider-header">Image Slider</h2>
      <div className="slider-container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        <div className="slider">
          {images && images.length
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  alt={imageItem.download_url}
                  src={imageItem.download_url}
                  className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              ))
            : null}
          <span className="circle-indicators">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
        </div>
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
      </div>
    </div>
  );
}
