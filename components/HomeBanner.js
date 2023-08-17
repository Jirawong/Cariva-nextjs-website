import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useFetchData } from "../utils/useFetchData";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../styles/Home.module.css";
import banner from "../public/images/home/text-banner.png";

const baseUrl = "https://api.jobboxthai.com";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const HomeBanner = () => {
  const { data: homeData, loading: homeLoading } = useFetchData(
    "home?populate=BannerHeader,image_1,ourPartner"
  );

  if (homeLoading) {
    return <div>Loading...</div>;
  }

  const { attributes } = homeData || {};

  const bannerImages = homeData?.attributes?.BannerHeader?.data || [];

  return (
    <div>
      <OwlCarousel
        id="carouselBanner"
        className="owl-theme carousel-container"
        items="1"
      >
        {bannerImages.map((image) => (
          <div className="item">
            <div
              className={styles.background_banner}
              key={image.id}
              style={{
                backgroundImage: `url('${baseUrl}${image.attributes.url}')`,
              }}
            >
              <div className="container">
                <div className="row">
                  <Image
                    src={banner}
                    alt="Banner"
                    layout="responsive"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default HomeBanner;
