import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useFetchData } from "../utils/useFetchData";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const baseURL = "https://api.jobboxthai.com";
const Tabs = () => {
  const { data, loading, error } = useFetchData(
    "news-lists?populate=news_image"
  );
  const [activeCategory, setActiveCategory] = useState("");

  const carouselOptions = {
    items: 1,
    nav: true,
    dots: true,
    navText: ["<span class='prev'></span>", "<span class='next'></span>"],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const categories = [
    ...new Set(data.map((item) => item.attributes.news_type)),
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };
  const filteredData = data.filter((item) => {
    return (
      activeCategory === "" || item.attributes.news_type === activeCategory
    );
  });

  return (
    <div>
      <div>
        <ul className="nav nav-pills mb-3 flex" id="pills-tab" role="tablist">
          <li>
            <button
              onClick={() => handleCategoryClick("")}
              className={`nav-link  p-2 ${
                activeCategory === "" ? "active" : ""
              }`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`nav-link p-2 ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        {filteredData.length > 0 ? (
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {filteredData.map((item, index) => (
              <div key={index} className="item">
                <div className="card img-news-slide link-card-news w-full">
                  <Link href={`/news-and-updates/${item.id}`}>
                    <img
                      src={
                        baseURL + item.attributes.news_image.data.attributes.url
                      }
                      className="card-img-news w-full"
                      alt="..."
                    />
                    <div className="card-body detail-news-slide md:px-4 md:py-4 xl:px-12 xl:py-12 text-start">
                      <div>
                        <span className="tag-type">
                          {item.attributes.news_type}
                        </span>
                      </div>
                      <h1 className="f-32 fw-500 title-news mt-2">
                        {item.attributes.news_subject}
                      </h1>
                      <p className="text-time-date f-16">
                        {item.attributes.publishedAt} I
                        <span className="blue">
                          {item.attributes.news_view} views
                        </span>
                      </p>
                      <p className="card-text text-justify f-18">
                        {item.attributes.news_intro}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
