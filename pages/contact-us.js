import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useFetchData } from "../utils/useFetchData";
import MeetOurTeam from "../components/meetOurTeam";

const contactUs = () => {
  const { data: contactData, loading: contactLoading } =
    useFetchData("contact");

  if (contactLoading) {
    return <div>Loading...</div>;
  }
  const { attributes } = contactData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const baseUrl = "https://api.jobboxthai.com";

  return (
    <Layout>
      <div className={`contact-us blocks-content02 space-padding`}>
        <div className={`container mx-auto`}>
          <div className={`md:grid md:grid-cols-2`}>
            <div className={`col-md-6 wow fadeInUp`} data-wow-delay={`0.1s`}>
              <div className={`row`}>
                <h2 className={`content-title f-42 gradient-01`}>
                  {attributes.string1}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: renderFormattedContent(attributes.string2),
                  }}
                ></p>
              </div>
              <div className={`row mt-3`}>
                <div className={`columns-1 col-12`}>
                  <h1 className={`color-light-blue fw-400`}>
                    {attributes.string3}
                  </h1>
                  <h2 className={`f-22 fw-700 text-uppercase`}>
                    {attributes.string4}
                  </h2>
                  <p className={`f-18 fw-300 mt-3`}>
                    {attributes.string5}
                    <br className={`d-none d-lg-block`} />
                    {attributes.string6}
                  </p>
                </div>
                <div className={`flex items-center mt-10`}>
                  <div className={`flex-shrink-0`}>
                    <img
                      src="images/contact/icon-clock.png"
                      alt="Working Hour"
                      className={`img-fluid`}
                    />
                  </div>
                  <div className={`flex-grow-1 ms-3`}>
                    <h1 className={`color-light-blue fw-400`}>
                      {attributes.string7}
                    </h1>
                    <p className={`f-18 f-200 mt-1`}>{attributes.string8}</p>
                  </div>
                </div>
                <div className={`flex items-center mt-4`}>
                  <div className={`flex-shrink-0`}>
                    <img
                      src="images/contact/icon-email.png"
                      alt="Email"
                      className={`img-fluid`}
                    />
                  </div>
                  <div className={`flex-grow-1 ms-3`}>
                    <h1 className={`color-light-blue fw-400`}>
                      {attributes.string9}
                    </h1>
                    <p className={`f-18 f-200 mt-1`}>{attributes.string10}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`col-md-6 mt-10 md:mt-0 wow fadeInUp`}
              data-wow-delay={`0.1s`}
            >
              <h2 className={`content-title f-42 gradient-01`}>
                {attributes.string11}
              </h2>
              <form className={`pt-3`}>
                <fieldset>
                  <input
                    className={`w-full px-3 form-control form-dark form-hight`}
                    placeholder={`Name`}
                    type={`text`}
                    tabindex={`1`}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className={`w-full px-3 form-control form-dark form-hight`}
                    placeholder={`Phone`}
                    type={`tel`}
                    tabindex={`2`}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className={`w-full px-3 form-control form-dark form-hight`}
                    placeholder={`Work Email`}
                    type={`email`}
                    tabindex={`3`}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className={`w-full px-3 form-control form-dark form-hight`}
                    placeholder={`Company Name`}
                    type={`text`}
                    tabindex={`4`}
                    required
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    className={`w-full px-3 pt-2 form-control form-dark`}
                    placeholder={`Let's us know your requirements`}
                    tabindex={`5`}
                    rows={`5`}
                    required
                  ></textarea>
                </fieldset>
                <fieldset className={`flex justify-center`}>
                  <button
                    name={`submit`}
                    type={`submit`}
                    id={`contact-submit`}
                    data-submit={`Sending`}
                    className={`button-submit mt-4`}
                  >
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <iframe
        className="position-relative map-iframe w-full wow fadeIn"
        data-wow-delay="0.1s"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.9605118855363!2d100.52329949078045!3d13.71958267808847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f9f6a88ce7d%3A0x11e92a6701c5830c!2sAI%20AND%20ROBOTICS%20VENTURES!5e0!3m2!1sth!2sth!4v1656492691279!5m2!1sth!2sth"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </Layout>
  );
};

export default contactUs;
