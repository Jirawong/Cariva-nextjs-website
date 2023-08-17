import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFetchData } from "../utils/useFetchData";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BASE_URL = "https://api.jobboxthai.com";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const OurPartner = () => {
  const { data: homeData, loading: homeLoading } = useFetchData(
    "home?populate=BannerHeader,image_1,ourPartner"
  );

  if (homeLoading) {
    return <div>Loading...</div>;
  }

  const { attributes } = homeData || {};

  const partnerImages = homeData?.attributes?.ourPartner?.data || [];
  return (
    <div>
      <OwlCarousel
        className="owl-theme px-7"
        id="our-partner-carousel"
        items={5}
        margin={25}
        nav
        navText={[
          '<div class="nav-btn prev-slide"></div>',
          '<div class="nav-btn next-slide"></div>',
        ]}
        responsiveClass
        responsive={{
          0: {
            items: 2,
            margin: 8,
            nav: false,
          },
          320: {
            items: 3,
            margin: 8,
            nav: false,
          },
          600: {
            items: 5,
            margin: 10,
            nav: false,
          },
          1000: {
            items: 5,
            margin: 15,
          },
        }}
      >
        {partnerImages.map((image, index) => {
          if (index % 2 === 0) {
            const firstImage = image;
            const secondImage = partnerImages[index + 1];

            return (
              <div className="item" key={index}>
                <div className="">
                  <img
                    src={BASE_URL + firstImage.attributes.url}
                    alt={firstImage.attributes.name}
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
                {secondImage && (
                  <div className="mt-4">
                    <img
                      src={BASE_URL + secondImage.attributes.url}
                      alt={secondImage.attributes.name}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </OwlCarousel>
    </div>
  );
};

export default OurPartner;
