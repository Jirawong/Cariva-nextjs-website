import React, { useEffect, useState } from "react";
import { useFetchData } from "../utils/useFetchData";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../styles/About.module.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const AboutPage = () => {
  const { data: aboutData, loading: aboutLoading } = useFetchData(
    "about?populate=image_1"
  );

  if (aboutLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = aboutData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";
  return (
    <Layout>
      <div className={`${styles.blocks_head_title01} space-padding`}>
        <div className={`container mx-auto `}>
          <div className={`text-center`}>
            <div className={`wow fadeInDown`} data-wow-delay="0.1s">
              <h1 className={`title-menu-content fw-300 mb-3`}>
                {attributes.string1}
              </h1>
              <h2 className={`content-title f-46 gradient-02`}>
                {attributes.string2}
              </h2>
              <p
                className={`f-20 fw-300 mt-4`}
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string3),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blocks_our_team}>
        <div
          className={`xl:container 2xl:px-24 mx-auto wow fadeIn`}
          data-wow-delay="0.3s"
        >
          <div className={`grid grid-cols-1 text-center`}>
            <h2 className={`content-title f-42 gradient-02`}>
              {attributes.string4}
            </h2>
          </div>

          <div className={`grid grid-cols-1 text-center`}>
            <div className={`flex justify-center mt-4 mb-md-3`}>
              <img
                src={baseUrl + attributes.image_1.data.attributes.url}
                alt={attributes.image_1.data.attributes.name}
                className={`w-full ${styles.team_pictures}`}
              />
            </div>
          </div>

          <div className={`grid grid-cols-1 mt-10`}>
            <OwlCarousel
              className={`owl-theme px-4`}
              id={`our-team-carousel`}
              items={`6`}
              nav
              navText={[
                `<div className="nav-btn prev-slide"></div>`,
                `<div className="nav-btn next-slide"></div>`,
              ]}
                responsiveClass
        responsive={{
          0: {
            items: 2,
            nav: false,
          },
          320: {
            items: 2,
            nav: false,
          },
          600: {
            items: 3,
            nav: false,
          },
          800: {
            items: 4,
            nav: false,
          },
          1000: {
            items: 5,
          },
          1400: {
            items: 6,
          },
        }}
            >
              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team01.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={`${styles.text_team}`}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1 sd-1`}>
                      Siwadol Matayakul
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Co-founder Tech Incubator, Product Development{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team03.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1 sd-1`}>
                      Narongchai Limpiyapirom
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Co-founder, Digital Health Solutions{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team04.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1 sd-1`}>
                      Watcharajitt Silawatpong
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Commercial &amp; Execution Team Lead
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card} ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team05.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1 sd-1`}>
                      Ekaphol Voravarn Na Ayuthya
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Product Owner Lead
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team06.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1 sd-1`}>
                      Piyalitt Ittichaiwong
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Medical &amp; Data sci Advisor (Under CARIVA Incubation
                      Program)
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team07.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1`}>
                      Kanyakorrn Veerakanjana
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Medical &amp; Data sci Advisor (Under CARIVA Incubation
                      Program)
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card}  ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team08.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-22 fw-400 mt-3 mb-1`}>
                      Thidathip Wongsurawat
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Bioinformatic Advisor (Under CARIVA Incubation Program)
                    </p>
                  </div>
                </div>
              </div>

              <div className={`px-2`}>
                <div className={`${styles.card} ${styles.our_team}`}>
                  <img
                    src={`images/about-us/team09.png`}
                    alt=""
                    className={`w-100`}
                  />
                  <div className={styles.text_team}>
                    <h2 className={`f-20 fw-400 mt-3 mb-1`}>
                      Prakasit Karavanich
                    </h2>
                    <p className={`${styles.text_position} f-14`}>
                      Medical Advisor
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
