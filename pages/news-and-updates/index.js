import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useFetchData } from "../../utils/useFetchData";
import NewsCarousel from "../../components/NewsCarousel";
import NewsTabs from "../../components/newsTabs";

const newsAndUpdate = () => {
  const { data: newsData, loading: newsLoading } = useFetchData("news-update");

  if (newsLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = newsData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";

  return (
    <Layout>
      <div class="blocks-head-news space-padding">
        <div class="container px-24 mx-auto container-xxl">
          <div class="row text-center">
            <div class="col-12 wow fadeInDown" data-wow-delay="0.1s">
              <h1 class="content-title f-46 gradient-02">
                {attributes.string1}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="blocks-content02 space-padding">
        <div
          class="container px-24 mx-auto container-xxl wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="grid grid-cols-1 ">
            <NewsCarousel />
            <NewsTabs />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default newsAndUpdate;
