import React, { useState } from "react";
import Link from "next/link";
import { useFetchData } from "../utils/useFetchData";

const baseURL = "https://api.jobboxthai.com";
const NewsTabs = () => {
  const { data, loading, error } = useFetchData(
    "news-lists?populate=news_image"
  );
  const [activeTab, setActiveTab] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Split the data into chunks of 4 elements each
  const tabData = [];
  for (let i = 0; i < data.length; i += 4) {
    tabData.push(data.slice(i, i + 4));
  }

  return (
    <div>
      <div className="tab-buttons"></div>
      <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 gap-6">
        {tabData[activeTab].map((item, index) => (
          <div key={index}>
            <div className="mb-4 xl:mb-0">
              <div className="card link-card-news">
                <Link href={`/news-and-updates/${item.id}`}>
                  <div>
                    <span className="tag">{item.attributes.news_type}</span>
                  </div>
                  <img
                    src={
                      baseURL + item.attributes.news_image.data.attributes.url
                    }
                    className="card-img-news aspect rounded img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h1 className="f-22 fw-500 title-news">
                      {item.attributes.news_subject}
                    </h1>
                    <p className="text-time-date f-14">
                      {item.attributes.publishedAt} I
                      <span className="blue">{item.attributes.news_view}</span>{" "}
                      views
                    </p>
                    <article>
                      <p className="card-text f-16">
                        {item.attributes.news_intro}
                      </p>
                    </article>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="...">
        <ul className="pagination flex justify-center mb-0 mt-5">
          <li className="page-item disabled">
            <a className="page-link" tabIndex="-1" aria-disabled="true">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </li>
          {tabData.map((_, index) => (
            <li
              key={index}
              className={`page-item ${activeTab === index ? "active" : ""}`}
            >
              <a className="page-link" onClick={() => setActiveTab(index)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewsTabs;
