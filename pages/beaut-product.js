import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";
import styles from "../styles/blockUseCase.module.css";

const beautProduct = () => {
  const { data: beautData, loading: beautLoading } = useFetchData(
    "beaut-product?populate=image_1,image_2,image_3,image_4,image_5,image_6"
  );

  if (beautLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = beautData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";

  return (
    <Layout>
      <div className={`${styles.blocks_head_beaut} space-padding`}>
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
          <div className={`row wow fadeInUp`} data-wow-delay={`0.1s`}>
            <div className={`columns-1`}>
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
            <div className={`md:w-2/4 col-md-6`}>
              <h2
                className={`fw-600 f-38`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string5),
                }}
              ></h2>
              <p className={`mt-2 f-18 fw-200`}>{attributes.string6}</p>
            </div>
            <div className={`md:w-2/4 md:ps-10 xl:pb-8 col-md-6 text-center`}>
              <img
                src={baseUrl + attributes.image_1.data.attributes.url}
                alt={`Beaut Product`}
                className={`img-fluid py-4 animation-UpDown`}
              />
            </div>
          </div>
        </div>

        <div className={`xl:columns-2 mt-10`}>
          <div
            className={`col-xl-6 mt-md-5 mt-lg-4 wow fadeInLeft`}
            data-wow-delay={`0.1s`}
            id={`treatment-browsing`}
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
                className={`sm:w-1/3 xl:px-2 md:ps-28 sm:ps-10 ps-0 col-sm-4 col-lg-4 text-center py-2`}
              >
                <img
                  src={`${baseUrl}${attributes.image_2.data.attributes.url}`}
                  alt={`Treatment Browsing`}
                  className={`img-fluid ${styles.w_blocks_use_case}`}
                />
              </div>
            </div>
          </div>

          <div
            className={`col-xl-6 mt-4 wow fadeInRight`}
            data-wow-delay={`0.1s`}
            id={`clinics-near-me`}
          >
            <div
              className={`sm:columns-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
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
                className={`sm:w-1/3 xl:px-2 xl:mt-0 sm:mt-5 md:ps-28 sm:ps-10 ps-0 col-sm-4 col-lg-4 text-center py-2`}
              >
                <img
                  src={`${baseUrl}${attributes.image_3.data.attributes.url}`}
                  alt={`Clinics near me`}
                  className={`img-fluid ${styles.w_blocks_use_case}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`xl:columns-2 mt-5`}>
          <div
            className={`col-xl-6 mt-4 mt-xl-5 wow fadeInLeft`}
            data-wow-delay={`0.1s`}
            id={`marketplace`}
          >
            <div
              className={`sm:columns-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
            >
              <div className={`sm:w-2/3 pe-2 col-sm-8 col-lg-8`}>
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
                className={`sm:w-1/3 xl:px-2 xl:mt-0 sm:mt-5 md:ps-28 sm:ps-10 ps-0 col-sm-4 col-lg-4 text-center py-2`}
              >
                <img
                  src={`${baseUrl}${attributes.image_4.data.attributes.url}`}
                  alt={`Marketplace`}
                  className={`img-fluid ${styles.w_blocks_use_case}`}
                />
              </div>
            </div>
          </div>

          <div
            className={`pt-4 col-xl-6 mt-xl-5 wow fadeInRight`}
            data-wow-delay={`0.1s`}
            id={`community`}
          >
            <div
              className={`sm:columns-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
            >
              <div className={`sm:w-2/3 pe-2 col-sm-8 col-lg-8`}>
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
                className={`sm:w-1/3 xl:px-2 xl:mt-0 sm:mt-5 md:ps-28 sm:ps-10 ps-0 col-sm-4 col-lg-4 text-center py-2`}
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

        <div className={`xl:columns-2 mt-5`}>
          <div
            className={`col-xl-6 mt-4 mt-xl-5 wow fadeInLeft`}
            data-wow-delay={`0.2s`}
            id={`content-article`}
          >
            <div
              className={`sm:columns-2 sm:flex sm:flex-row flex-col ${styles.position_content}`}
            >
              <div className={`sm:w-2/3 pe-2 col-sm-8 col-lg-8`}>
                <h2
                  className={`fw-600 f-38 mt-3 mt-sm-0`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string15),
                  }}
                ></h2>
                <p className={`mt-2 f-18 fw-200 mb-2 mb-sm-0`}>
                  {attributes.string16}
                </p>
              </div>
              <div
                className={`sm:w-1/3 xl:px-2 xl:mt-0 sm:mt-5 md:ps-28 sm:ps-10 ps-0 col-sm-4 col-lg-4 text-center py-2`}
              >
                <img
                  src={`${baseUrl}${attributes.image_6.data.attributes.url}`}
                  alt={`Content Article`}
                  className={`img-fluid ${styles.w_blocks_use_case}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetOurTeam />
    </Layout>
  );
};

export default beautProduct;
