import React, { useState, useEffect } from "react";

const HeroSectionTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slides = [
    {
      id: 1,
      image: "https://www.whatmobile.com.pk/control/news/assets/05012024/548dc5db69d45b530c6c3cd36b9434d3.jpg",
    },
    {
      id: 2,
      image: "https://macstores.vn/wp-content/uploads/2023/02/macbook-pro-2023-4.jpg",
    },
    {
      id: 3,
      image: "https://cdn.tgdd.vn//News/1548517//kich-thuoc-airpods-3-chuan-nhat-co-nen-mua-tai2-800x450.jpg",
    }
  ];

  return (
    <div className="hero-section-two">
            <style>
        {`
          .hero-section-two {
            position: relative;
            overflow: hidden;
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            height: 50%;
          }

          .video-container {
            position: relative;
            width: 100%;
            height: 100% / 9 * 16; /* Keeps aspect ratio 16:9 (standard for YouTube videos) */
            overflow: hidden;
          }

          .slider {
            display: flex;
            transition: transform 0.6s ease;
            width: ${slides.length * 100}%;
          }

          .slide {
            width: calc(100% / ${slides.length});
            flex: 0 0 auto;
            position: relative;
            overflow: hidden;
            height: 1000px; /* Thiết lập chiều cao mong muốn */
          }

          .slide img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Hiển thị hình ảnh mà không bị kéo ra */
            object-position: center; /* Canh giữa hình ảnh */
            transition: transform 0.5s ease;
            transform: scale(1); /* Zoom hình ảnh nhỏ hơn */
          }

          .slide-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;
            z-index: 2;
            max-width: 80%;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .slide.active .slide-content {
            opacity: 1;
          }

          .slider-controls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            display: flex;
            justify-content: center;
          }

          .slider-controls button {
            background: rgba(255, 255, 255, 0.5);
            border: none;
            cursor: pointer;
            outline: none;
            padding: 10px 15px;
            margin: 0 10px;
            font-size: 20px;
            color: #fff;
            transition: background-color 0.3s;
            border-radius: 50%;
            z-index: 3;
          }

          .slider-controls button:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
      <div className="video-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className={`slide ${index === currentSlide ? "active" : ""}`}>
              <img src={slide.image} alt={`Slide ${index}`} />
              <div className="slide-content"></div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button className="control" onClick={prevSlide}>&#10094;</button>
          <button className="control" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
