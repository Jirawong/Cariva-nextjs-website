import React from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import { useFetchData } from "../../utils/useFetchData";

const NewsDetail = () => {
  const router = useRouter();
  const { newsID } = router.query; // Get the newsId from the router parameter
  const baseURL = "https://api.jobboxthai.com";

  const { data: newsDetailData, loading: newsDetailLoading } = useFetchData(
    `news-lists/${newsID}?populate=news_image`
  );

  if (newsDetailLoading) {
    return <div>Loading...</div>;
  }

  if (!newsDetailData) {
    return <div>News data not found.</div>;
  }
  const { attributes } = newsDetailData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };

  return (
    <Layout>
      <div className="blocks-head-news space-padding">
        <div className="container px-24 mx-auto container-xxl">
          <div className="row text-center">
            <div className="col-12 wow fadeInDown" data-wow-delay="0.1s">
              <h1 className="content-title f-46 gradient-02">
                News And Updates
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blocks-content02 space-padding">
        <div
          className="container px-24 mx-auto container-xxl font-kanit wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="f-38">{attributes.news_subject}</h1>
          <h2 className="f-14 mt-2 fw-300">
            <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
            {attributes.publishedAt}
          </h2>
          {attributes.news_image && (
            <div className="py-4 text-center flex justify-center">
              <img
                src={baseURL + attributes.news_image.data.attributes.url}
                className="img-fluid"
                alt="..."
              />
            </div>
          )}
          <p className="f-18 fw-200">{attributes.news_detail}</p>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
