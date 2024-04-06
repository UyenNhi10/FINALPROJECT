import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import Link from "next/link";

const CategorySlider = () => {
  const sectionTitleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '36px',
    fontWeight: '700',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    position: 'relative',
    display: 'inline-block',
  };

  const sectionTitleUnderlineStyle = {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '4px',
    backgroundColor: '#3482A3',
    bottom: '-10px',
    left: '0',
  };

  return (
    <div className="categories-area grey-2 pt-110 pb-90 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-20">
            <div className="section-title mb-30" style={sectionTitleStyle}>
              <h2>
                <span className="down-mark" style={{ display: 'block' }}>Featured Products</span>
                <span style={sectionTitleUnderlineStyle}></span>
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="category-main-wrapper position-relative">
              <div className="category-slide-wrapper position-relative">
                <div className="swiper-container category-active">
                  <div className="swiper-wrapper">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      autoplaydisableoninteraction={"false"}
                      loop={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                        1400: {
                          slidesPerView: 5,
                        },
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                      }}
                      navigation={{
                        clickable: true,
                        nextEl: ".category-button-next",
                        prevEl: ".category-button-prev",
                      }}
                    >
                      <SwiperSlide>
                        <Link href="product">
                          <a>
                            <div className="categories-wrapper text-center mb-30">
                              <div className="categiories-thumb">
                                <img src="https://p.turbosquid.com/ts-thumb/8v/6jwEe9/wa/prosilicon50001/png/1627387973/1920x1080/fit_q87/5d4bbb44cf8be5b70dc86a2af704b88b1686be9c/prosilicon50001.jpg" alt="Laptop" />
                              </div>
                              <div className="categories-content">
                                <h4>Laptop</h4>
                                <p>High-performance and beautifully designed laptops.</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link href="product">
                          <a>
                            <div className="categories-wrapper text-center mb-30">
                              <div className="categiories-thumb">
                                <img src="https://tuvanthietbiamthanh.com/wp-content/uploads/2023/09/Huong-dan-su-dung-tai-nghe-chup-tai-Marshall-Major-IV.jpg" alt="Marshall Headphones" />
                              </div>
                              <div className="categories-content">
                                <h4>Marshall Headphones</h4>
                                <p>Marshall Major IV over-ear headphones with high-quality sound.</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link href="product">
                          <a>
                            <div className="categories-wrapper text-center mb-30">
                              <div className="categiories-thumb">
                                <img src="https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2023/12/4/iphone-16-1701690556649191793436.jpg" alt="iPhone" />
                              </div>
                              <div className="categories-content">
                                <h4>iPhone</h4>
                                <p>One of the top smartphones in the market.</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link href="product">
                          <a>
                            <div className="categories-wrapper text-center mb-30">
                              <div className="categiories-thumb">
                                <img src="https://genk.mediacdn.vn/139269124445442048/2023/10/31/apple-macbook-pro-2up-231030full-bleed-imagejpglarge-1698717486016-1698717486678299662327-1698717957177-1698717957633451212737.jpg" alt="Laptop" />
                              </div>
                              <div className="categories-content">
                                <h4>MacBook Pro</h4>
                                <p>MacBook Pro 2024 comes in black with up to 128GB of RAM The Verge</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link href="product">
                          <a>
                            <div className="categories-wrapper text-center mb-30">
                              <div className="categiories-thumb">
                                <img src="https://marshallstorevietnam.vn/wp-content/uploads/elementor/thumbs/03-usp-desktop-q3mslc00a1z2pbr36uvpke3yj8x3tqqe33v52nhnvk.jpeg" alt="Marshall Speaker" />
                              </div>
                              <div className="categories-content">
                                <h4>Marshall Speaker</h4>
                                <p>High-end Bluetooth speaker from Marshall.</p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="category-nav">
                  <div className="category-button-prev">
                    <i className="far fa-long-arrow-left"></i>
                  </div>
                  <div className="category-button-next">
                    <i className="far fa-long-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
