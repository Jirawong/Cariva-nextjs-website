import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";
import styles from "../styles/blockUseCase.module.css";

const arvicProduct = () => {
  const { data: arvicData, loading: arvicLoading } = useFetchData(
    "arvic-product?populate=image_1,image_2,image_3,image_4,image_5"
  );

  if (arvicLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = arvicData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com"; // Change this to the base URL of your API

  return (
    <Layout>
      <div className={`${styles.blocks_head_arvic} space-padding`}>
        <div className={`container-xxl`}>
          <div className={`row text-center sd-1`}>
            <div className={`col-12 wow fadeInDown`} data-wow-delay={`0.1s`}>
              <h1 className={`content-title f-46`}>{attributes.string1}</h1>
              <h2 className={`f-20 fw-300 mt-2 mt-md-3`}>
                {attributes.string2}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={`blocks-content02 space-padding`}>
        <div className={`container mx-auto px-3`}>
          <div className={`columns-1`}>
            <div className={`col-12 wow fadeInUp`} data-wow-delay={`0.1s`}>
              <h1
                className={`f-42 fw-700 text-center`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string3),
                }}
              ></h1>
              <p
                className={`f-20 fw-300 mt-3 mt-md-4`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string4),
                }}
              ></p>
            </div>
          </div>
          <div
            className={`md:columns-2 md:flex items-center mt-4 mt-lg-0 wow fadeInUp`}
            data-wow-delay={`0.2s`}
          >
            <div className={`col-md-6`}>
              <h2
                className={`fw-600 f-38`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string5),
                }}
              ></h2>
              <p className={`mt-2 f-18 fw-200`}>{attributes.string6}</p>
            </div>
            <div className={`col-md-6 text-center`}>
              <img
                src={`${baseUrl}${attributes.image_1.data.attributes.url}`}
                alt={`Arvic Product`}
                className={`img-fluid py-4 animation-UpDown`}
              />
            </div>
          </div>
          <div className={`xl:columns-2 pt-5`}>
            <div
              className={`mt-md-4 mt-lg-4 wow fadeInLeft`}
              data-wow-delay={`0.1s`}
              id={`health-dDrive`}
            >
              <div
                className={`sm:columns-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
              >
                <div className={`sm:w-2/3 pe-2 col-sm-8 col-lg-8`}>
                  <h2
                    className={`fw-600 f-38 mt-3 mt-sm-0`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string7),
                    }}
                  ></h2>
                  <p className={`mt-2 f-18 fw-200 mb-2 mb-sm-0`}>
                    {attributes.string8}
                  </p>
                </div>
                <div
                  className={`sm:w-1/3 xl:ps-2 xl:pt-0 md:ps-28 ps-10 col-sm-4 col-lg-4 text-center py-2`}
                >
                  <img
                    src={`${baseUrl}${attributes.image_2.data.attributes.url}`}
                    alt={`Health Drive`}
                    className={`img-fluid ${styles.w_blocks_use_case}`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`mt-4 wow fadeInRight`}
              data-wow-delay={`0.1s`}
              id={`health-assessment`}
            >
              <div
                className={`sm:columns-2 sm:flex flex-col sm:flex-row ${styles.position_content}`}
              >
                <div className={`sm:w-2/3 pe-2 col-sm-8 col-lg-8`}>
                  <h2
                    className={`fw-600 f-38 mt-3 mt-sm-0`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string9),
                    }}
                  ></h2>
                  <p className={`mt-2 f-18 fw-200 mb-2 mb-sm-0`}>
                    {attributes.string10}
                  </p>
                </div>
                <div
                  className={`sm:w-1/3 xl:ps-2 sm:pt-5 xl:pt-0 md:ps-28 ps-10 col-sm-4 col-lg-4 text-center py-2`}
                >
                  <img
                    src={`${baseUrl}${attributes.image_3.data.attributes.url}`}
                    alt={`Health Assessment`}
                    className={`img-fluid ${styles.w_blocks_use_case}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`xl:columns-2 pt-5`}>
            <div
              className={`col-xl-6 mt-4 mt-xl-5 wow fadeInLeft`}
              data-wow-delay={`0.1s`}
              id={`symptom-hecker`}
            >
              <div
                className={`sm:columns-2 pe-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
              >
                <div className={`sm:w-2/3 col-sm-8 col-lg-8`}>
                  <h2
                    className={`fw-600 f-38 mt-3 mt-sm-0`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string11),
                    }}
                  ></h2>
                  <p className={`mt-2 f-18 fw-200 mb-2 mb-sm-0`}>
                    {attributes.string12}
                  </p>
                </div>
                <div
                  className={`sm:w-1/3 xl:ps-2 xl:pt-0 md:ps-28 ps-10 col-sm-4 col-lg-4 text-center py-2`}
                >
                  <img
                    src={`${baseUrl}${attributes.image_4.data.attributes.url}`}
                    alt={`Symptom Checker`}
                    className={`img-fluid ${styles.w_blocks_use_case}`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`col-xl-6 pt-4 mt-xl-5 wow fadeInRight`}
              data-wow-delay={`0.1s`}
              id={`telemedicine`}
            >
              <div
                className={`xl:columns-2 pe-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
              >
                <div className={`sm:w-2/3 col-sm-8 col-lg-8`}>
                  <h2
                    className={`fw-600 f-38 mt-3 mt-sm-0`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string13),
                    }}
                  ></h2>
                  <p className={`mt-2 f-18 fw-200 mb-2 mb-sm-0`}>
                    {attributes.string14}
                  </p>
                </div>
                <div
                  className={`sm:w-1/3 xl:ps-2 md:ps-28 ps-10 sm:pt-5 xl:pt-0 col-sm-4 col-lg-4 text-center py-2`}
                >
                  <img
                    src={`${baseUrl}${attributes.image_5.data.attributes.url}`}
                    alt={`Community`}
                    className={`img-fluid ${styles.w_blocks_use_case}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetOurTeam />
    </Layout>
  );
};

export default arvicProduct;
