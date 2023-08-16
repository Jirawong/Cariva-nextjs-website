import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";

const dataNetwork = () => {
  const { data: dataNetworkData, loading: dataNetworkLoading } =
    useFetchData("data-network");

  if (dataNetworkLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = dataNetworkData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com"; // Change this to the base URL of your API

  return (
    <Layout>
      <div className={`blocks-content01 space-padding`}>
        <div className={`2xl:container mx-auto 2xl:px-24 px-3`}>
          <div className={`text-center wow fadeInUp`} data-wow-delay={`0.1s`}>
            <div className={`columns-1 px-3`}>
              <h1 className={`title-menu-content fw-300 mb-3`}>
                {attributes.string1}
              </h1>
              <h2 className={`content-title f-46 gradient-02`}>
                {attributes.string2}
              </h2>
              <h3>
                <color-green-italic>{attributes.string3} </color-green-italic>
              </h3>
              <p className={`f-20 fw-300 mt-5`}>{attributes.string4}</p>
            </div>
          </div>

          <div className={`md:columns-2 columns-1 mt-14 mt-md-5`}>
            <div className={`px-1 wow fadeInUp`} data-wow-delay={`0.3s`}>
              <div className={`content-data-network`}>
                <div className={`icon-data-network`}>
                  <img
                    src={`images/data-network/icon-labs.png`}
                    alt={`Icon Hospital Labs`}
                    className={`img-fluid`}
                  />
                </div>
                <div className={`text-data-network`}>
                  <h2
                    className={`f-38 fw-600 text-uppercase mb-2`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string5),
                    }}
                  ></h2>
                  <p className={`f-16 fw-300 sd-1`}>{attributes.string6}</p>
                </div>
              </div>
            </div>
            <div
              className={`px-1 mt-4 mt-md-0 wow fadeInUp`}
              data-wow-delay={`0.3s`}
            >
              <div className={`content-data-network`}>
                <div className={`icon-data-network`}>
                  <img
                    src={`images/data-network/icon-molakun.png`}
                    alt={`Icon Medical Hardware`}
                    className={`img-fluid`}
                  />
                </div>
                <div className={`text-data-network`}>
                  <h2 className={`f-38 fw-600 text-uppercase mb-2`}>
                    {attributes.string7}
                  </h2>
                  <p className={`f-16 fw-300 sd-1`}>{attributes.string8}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`md:columns-2 columns-1 mt-4`}>
            <div className={`px-1 wow fadeInUp`} data-wow-delay={`0.5s`}>
              <div className={`content-data-network`}>
                <div className={`icon-data-network`}>
                  <img
                    src={`images/data-network/icon-iot.png`}
                    alt={`Icon IoT And Wearable Device`}
                    className={`img-fluid`}
                  />
                </div>
                <div className={`text-data-network`}>
                  <h2
                    className={`f-38 fw-600 text-uppercase mb-2`}
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(attributes.string9),
                    }}
                  ></h2>
                  <p className={`f-16 fw-300 sd-1`}>{attributes.string10}</p>
                </div>
              </div>
            </div>
            <div
              className={`px-1 mt-4 mt-md-0 wow fadeInUp`}
              data-wow-delay={`0.7s`}
            >
              <div className={`content-data-network`}>
                <div className={`icon-data-network`}>
                  <img
                    src={`images/data-network/icon-pharmacy.png`}
                    alt={`Icon Pharmacy`}
                    className={`img-fluid`}
                  />
                </div>
                <div className={`text-data-network`}>
                  <h2 className={`f-38 fw-600 text-uppercase mb-2`}>
                    {attributes.string11}
                  </h2>
                  <p className={`f-16 fw-300 sd-1`}>{attributes.string12}</p>
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

export default dataNetwork;
