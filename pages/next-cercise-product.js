import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";
import styles from "../styles/blockUseCase.module.css";

const nextCerciseProduct = () => {
  const { data: nextCerciseData, loading: nextCerciseLoading } = useFetchData(
    "next-cercise?populate=image_1,image_2,image_3,image_4,image_4_1,image_5,image_6,image_6_1"
  );

  if (nextCerciseLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = nextCerciseData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";

  return (
    <Layout>
      <div className={`${styles.blocks_head_nextcercise} space-padding`}>
        <div className={`container-xxl`}>
          <div
            className={`row text-center sd-1 wow fadeInDown`}
            data-wow-delay={`0.1s`}
          >
            <div className={`columns-1`}>
              <h1 className={`content-title f-46`}>{attributes.string1}</h1>
              <h2 className={`f-20 fw-300 mt-2 mt-md-3`}>
                {attributes.string2}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={`blocks-content02 space-padding`}>
        <div className={`2xl:container mx-auto px-3 container-xxl`}>
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
              <br />
              <br />
              <p
                className={`fw-500`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string5),
                }}
              ></p>
            </div>
          </div>

          <div className={`row mt-3 mt-md-0`}>
            <div className={`md:columns-2 columns-1 md:flex items-center`}>
              <div
                className={`col-md-6 wow fadeInLeft`}
                data-wow-delay={`0.1s`}
              >
                <h2
                  className={`fw-600 f-38`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string6),
                  }}
                ></h2>
                <p
                  className={`mt-2 f-18 fw-300`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string7),
                  }}
                ></p>
              </div>

              <div
                className={`col-md-6 text-center wow fadeInRight`}
                data-wow-delay={`0.1s`}
              >
                <img
                  src={baseUrl + attributes.image_1.data.attributes.url}
                  alt="NextCercise Product"
                  className={`img-fluid mt-4 animation-UpDown`}
                />
              </div>
            </div>
          </div>

          <div className={`row`}>
            <div className={`grid md:grid-cols-2 md:flex`}>
              <div
                className={`mt-4 md:mt-5 wow fadeInLeft flex flex-col`}
                data-wow-delay={`0.1s`}
                id={`ios-android`}
              >
                <h2
                  className={`fw-600 f-38 mt-3 mt-sm-0`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string8),
                  }}
                ></h2>
                <div className={`text-center py-3`}>
                  <img
                    src={baseUrl + attributes.image_2.data.attributes.url}
                    alt={`IOS/Android data connection`}
                    className={`max-w-full h-auto`}
                  />
                </div>
                <p
                  className={`f-18 fw-300 mt-3`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string9),
                  }}
                ></p>
              </div>

              <div
                className={`self-end mt-4 md:mt-5 wow fadeInRight`}
                data-wow-delay={`0.1s`}
                id={`leaderboard`}
              >
                <h2
                  className={`fw-600 f-38 mt-3 mt-sm-0`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string10),
                  }}
                ></h2>
                <div className={`text-center py-3`}>
                  <img
                    src={baseUrl + attributes.image_3.data.attributes.url}
                    alt={`Leaderbaord`}
                    className={`max-w-full h-auto`}
                  />
                </div>
                <p
                  className={`f-18 fw-300`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string11),
                  }}
                ></p>
              </div>
            </div>

            <div
              className={`columns-1 col-md-12 md:mt-10 mt-5 wow fadeInUp`}
              data-wow-delay={`0.1s`}
              id={`challenge-system`}
            >
              <h2
                className={`fw-600 f-38 md:text-center md:mt-3 mt-0`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string12),
                }}
              ></h2>
              <div className={`text-center py-3 hidden md:block`}>
                <img
                  src={baseUrl + attributes.image_4.data.attributes.url}
                  alt={`Challenge System`}
                  className={`img-fluid`}
                />
              </div>
              <div className={`text-center py-3 block md:hidden`}>
                <img
                  src={baseUrl + attributes.image_4_1.data.attributes.url}
                  alt={`Challenge System`}
                  className={`img-fluid`}
                />
              </div>
              <p
                className={`f-18 fw-300`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string13),
                }}
              ></p>
            </div>
          </div>

          <div className={`row d-flex align-items-center`}>
            <div className={`grid md:grid-cols-2 md:mt-14`}>
              <div
                className={`col-md-6 mt-4 mt-md-5 wow fadeInLeft`}
                data-wow-delay={`0.1s`}
                id={`earn-point`}
              >
                <h2
                  className={`fw-600 f-38 mt-3 mt-sm-0`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string14),
                  }}
                ></h2>
                <p
                  className={`mt-3 f-18 fw-300`}
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string15),
                  }}
                ></p>
              </div>
              <div
                className={`text-center mt-4 mt-md-5 wow fadeInRight`}
                data-wow-delay={`0.1s`}
              >
                <img
                  src={baseUrl + attributes.image_5.data.attributes.url}
                  alt={`Earn point/coin system`}
                  className={`img-fluid`}
                />
              </div>
            </div>

            <div
              className={`columns-1 md:mt-10 mt-5 wow fadeInUp`}
              data-wow-delay={`0.1s`}
              id={`rewarding-system`}
            >
              <h2
                className={`fw-600 f-38 md:text-center md:mt-3 mt-sm-0`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string16),
                }}
              ></h2>
              <div className={`text-center py-3 hidden md:block`}>
                <img
                  src={baseUrl + attributes.image_6.data.attributes.url}
                  alt={`Rewarding System`}
                  className={`img-fluid`}
                />
              </div>
              <div className={`text-center py-3 block md:hidden`}>
                <img
                  src={baseUrl + attributes.image_6_1.data.attributes.url}
                  alt={`Rewarding System`}
                  className={`img-fluid`}
                />
              </div>
              <p className={`f-18 fw-300`}>{attributes.string17}</p>
            </div>
          </div>
        </div>
      </div>
      <MeetOurTeam />
    </Layout>
  );
};

export default nextCerciseProduct;
