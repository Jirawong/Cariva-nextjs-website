import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";
import styles from "../styles/buildingBlocks.module.css";

const buildingBlocks = () => {
  const { data: blocksData, loading: blocksLoading } = useFetchData(
    "building-block?populate=image_1,image_2,image_3"
  );

  if (blocksLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = blocksData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";

  return (
    <Layout>
      <div className="blocks-content01 space-padding h-nav">
        <div className={`container mx-auto`}>
          <div className={`row text-center`}>
            <div className={`col-12 wow fadeInDown`}>
              <h1 className={`title-menu-content fw-300 mb-3`}>
                {attributes.string1}
              </h1>
              <h2 className={`content-title f-46 gradient-02`}>
                {attributes.string2}
              </h2>
              <p className={`f-20 fw-400 mt-4 px-12`}>{attributes.string3}</p>
            </div>
          </div>

          <div className={`row mt-4 mt-md-5`}>
            <div className={`grid grid-cols-2`}>
              <div className={`col-lg-6 mb-3 mb-md-0 px-3 mt-5`}>
                <div
                  className={`${styles.building_blocks} wow fadeIn`}
                  data-wow-delay={`0.1s`}
                >
                  <div className={`row`}>
                    <h2
                      className={`fw-600 f-34`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string4),
                      }}
                    ></h2>
                    <p
                      className={`mt-2 f-18 fw-300 h-space-text`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string5),
                      }}
                    ></p>
                    <div className={`py-4 w-img-content mx-auto`}>
                      <img
                        src="images/building-blocks/next-cercise-use-case.png"
                        alt="NextCercise UseCase"
                        className={`img-fluid`}
                      />
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-y-2 gap-x-6 row fw-200 position-relative`}
                  >
                    <div className={`col-sm-6 ${styles.b_link} `}>
                      <Link href="/next-cercise-product.html#ios-android">
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img01.png"
                              alt="IOS/Android data connection"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string6}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={`col-sm-6  ${styles.b_link}`}>
                      <Link href={`/next-cecise-product`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img02.png"
                              alt="Challenge system"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string7}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={`col-sm-6 ${styles.b_link} `}>
                      <a href="next-cercise-product.html#leaderboard">
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img03.png"
                              alt="Leaderboard"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string8}
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={`col-sm-6 ${styles.b_link}`}>
                      <Link href="/next-cercise-product.html#earn-point">
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img04.png"
                              alt="Earn point/coin system"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string9}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={`col-sm-6 ${styles.b_link}`}>
                      <Link href="/next-cercise-product.html#rewarding-system">
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img05.png"
                              alt="Rewarding system"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string10}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className={`col-span-2 z-50 flex justify-end ${styles.learn_more}`}
                    >
                      <Link href="/next-cercise-product">Learn More..</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`col-lg-6 px-3 mb-3 mb-md-0 mt-5 mt-md-4 mt-lg-0`}
              >
                <div
                  className={`${styles.building_blocks} wow fadeIn`}
                  data-wow-delay={`0.3s`}
                >
                  <div className={`row`}>
                    <h2
                      className={`fw-600 f-34`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string11),
                      }}
                    ></h2>
                    <p
                      className={`mt-2 f-18 fw-300 h-space-text`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string12),
                      }}
                    ></p>
                    <div className={`py-4 w-img-content mx-auto`}>
                      <img
                        src="images/building-blocks/arvic-use%20case.png"
                        alt="Arvic UseCase"
                        className={`img-fluid`}
                      />
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-y-2 gap-x-6 fw-200 relative`}
                  >
                    <div className={`col-sm-6`}>
                      <div
                        className={`${styles.building_blocks_icon} flex items-center`}
                      >
                        <div className={`flex-shrink-0`}>
                          <img
                            src="images/building-blocks/Icon-img06.png"
                            alt="Data connecting from multiple sources"
                            className={`img-fluid`}
                          />
                        </div>
                        <div className={`flex-grow-1 ms-2`}>
                          {attributes.string13}
                        </div>
                      </div>
                    </div>
                    <div className={`col-sm-6 `}>
                      <div
                        className={`${styles.building_blocks_icon} flex items-center`}
                      >
                        <div className={`flex-shrink-0`}>
                          <img
                            src="images/building-blocks/Icon-img07.png"
                            alt="Symptom checker"
                            className={`img-fluid`}
                          />
                        </div>
                        <div className={`flex-grow-1 ms-2`}>
                          {attributes.string14}
                        </div>
                      </div>
                    </div>
                    <div className={`col-sm-6 ${styles.b_link} `}>
                      <a href="arvic-product.html#telemedicine">
                        <div
                          className={`${styles.building_blocks_icon}  flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img08.png"
                              alt="Telemedicine"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string15}
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={`col-sm-6 `}>
                      <div
                        className={`${styles.building_blocks_icon}  flex items-center`}
                      >
                        <div className={`flex-shrink-0`}>
                          <img
                            src="images/building-blocks/Icon-img09.png"
                            alt="Telepharmacy"
                            className={`img-fluid`}
                          />
                        </div>
                        <div className={`flex-grow-1 ms-2`}>
                          {attributes.string16}
                        </div>
                      </div>
                    </div>
                    <div className={`col-sm-6 mb-sm-0`}>
                      <div
                        className={`${styles.building_blocks_icon}  flex items-center`}
                      >
                        <div className={`flex-shrink-0`}>
                          <img
                            src="images/building-blocks/Icon-img10.png"
                            alt="HR dahsboard"
                            className={`img-fluid`}
                          />
                        </div>
                        <div className={`flex-grow-1 ms-2`}>
                          {attributes.string17}
                        </div>
                      </div>
                    </div>
                    <div className={`col-sm-6`}>
                      <div
                        className={`${styles.building_blocks_icon}  flex items-center`}
                      >
                        <div className={`flex-shrink-0`}>
                          <img
                            src="images/building-blocks/Icon-img11.png"
                            alt="CMS for monitoring"
                            className={`img-fluid`}
                          />
                        </div>
                        <div className={`flex-grow-1 ms-2`}>
                          {attributes.string18}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-span-2 z-50 mt-1 flex justify-end ${styles.learn_more}`}
                    >
                      <Link href="/arvic-product">Learn More..</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`columns-1 px-3 col-12 mt-2 mt-md-4`}>
              <div
                className={`${styles.building_blocks} wow fadeIn`}
                data-wow-delay={`0.1s`}
              >
                <div
                  className={`grid grid-cols-2 row fw-200 d-flex align-items-center`}
                >
                  <div className={`col-lg-6 position-relative`}>
                    <h2
                      className={`fw-600 f-34`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string19),
                      }}
                    ></h2>
                    <p
                      className={`mt-2 f-18 fw-300 pe-12`}
                      dangerouslySetInnerHTML={{
                        __html: renderFormattedContent(attributes.string20),
                      }}
                    ></p>

                    <div
                      className={`col-lg-6 block xl:hidden py-4 w-img-content mx-auto`}
                    >
                      <img
                        src="images/building-blocks/beaut-use-case.png"
                        alt="Beaut UseCase"
                        className={`img-fluid`}
                      />
                    </div>
                    <div className={`grid grid-cols-2 xl:mt-4`}>
                      <div className={`col-sm-6 mb-2 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon}  flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img12.png"
                              alt="Product catalog"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string21}
                          </div>
                        </div>
                      </div>

                      <div className={`col-sm-6 mb-2 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img13.png"
                              alt="Add to cart/Check out"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string22}
                          </div>
                        </div>
                      </div>

                      <div className={`col-sm-6 mb-2 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img14.png"
                              alt="Payment"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string23}
                          </div>
                        </div>
                      </div>

                      <div className={`col-sm-6 mb-2 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img15.png"
                              alt="Discount code"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string24}
                          </div>
                        </div>
                      </div>
                      <div className={`col-sm-6 mb-2 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img16.png"
                              alt="Booking"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string25}
                          </div>
                        </div>
                      </div>
                      <div className={`col-sm-6 px-3`}>
                        <div
                          className={`${styles.building_blocks_icon} flex items-center`}
                        >
                          <div className={`flex-shrink-0`}>
                            <img
                              src="images/building-blocks/Icon-img17.png"
                              alt="Reviews"
                              className={`img-fluid`}
                            />
                          </div>
                          <div className={`flex-grow-1 ms-2`}>
                            {attributes.string26}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`col-span-2 z-50 mt-3 flex justify-end ${styles.learn_more}`}
                      >
                        <Link href="/beaut-product">Learn More..</Link>
                      </div>
                    </div>
                  </div>

                  <div className={`col-lg-6 hidden xl:block`}>
                    <img
                      src="images/building-blocks/beaut-use-case.png"
                      alt="Beaut UseCase"
                      className={`img-fluid py-4`}
                    />
                  </div>
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

export default buildingBlocks;
