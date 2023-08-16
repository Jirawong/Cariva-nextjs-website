import React, { useEffect, useState } from "react";
import { useFetchData } from "../utils/useFetchData";
import Navmenu from "../components/Navmenu";
import HomeBanner from "../components/HomeBanner";
import OurPartner from "../components/OurPartner";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const HomePage = () => {
  const { data: homeData, loading: homeLoading } = useFetchData(
    "home?populate=BannerHeader,image_1,ourPartner"
  );

  if (homeLoading) {
    return <div>Loading...</div>;
  }

  const { attributes } = homeData;

  const renderFormattedContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    return doc.body.innerHTML;
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const baseUrl = "https://api.jobboxthai.com";
  return (
    <div>
      <HomeBanner />
      <div className={`sticky top-0 z-50`}>
        <Navmenu />
      </div>
      <div className={`${styles.content_home} space-padding`}>
        <div className="lg:container mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="wow fadeInDown">
              <h2 className={`content-title f-42 gradient-01`}>
                {attributes.string1}
              </h2>

              <img
                src={baseUrl + attributes.image_1.data.attributes.url}
                alt={attributes.image_1.data.attributes.name}
                className="w-full py-3"
              />
              <p
                className="f-20 fw-200 sd-1"
                dangerouslySetInnerHTML={{
                  __html: renderFormattedContent(attributes.string2),
                }}
              />
            </div>
            <div className="mt-4 md:mt-0 forms-meet-ourteam wow fadeInDown">
              <h2 className={`content-title f-42 gradient-01`}>
                {attributes.string3}
              </h2>
              <form className="pt-3" onSubmit={handleSubmit}>
                <fieldset>
                  <input
                    className="form-control form-dark form-hight w-full px-3"
                    placeholder="Name"
                    type="text"
                    tabindex="1"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className="form-control form-dark form-hight w-full px-3"
                    placeholder="Phone"
                    type="tel"
                    tabindex="2"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className="form-control form-dark form-hight w-full px-3"
                    placeholder="Work Email"
                    type="email"
                    tabindex="3"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    className="form-control form-dark form-hight w-full px-3"
                    placeholder="Company Name"
                    type="text"
                    tabindex="4"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    className="form-control form-dark w-full px-3 py-2"
                    placeholder="Let's us know your requirements"
                    tabindex="5"
                    rows="5"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                  ></textarea>
                </fieldset>
                <fieldset className="flex justify-center">
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="Sending"
                    className="button-submit mt-4"
                  >
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-2 space-content">
            <div className="px-3 wow fadeInDown">
              <div
                className={`flex-col justify-between ${styles.block_building}`}
              >
                <div>
                  <h2 className={`${styles.title_building} f-42`}>
                    {attributes.string4}
                  </h2>
                  <p className="f-18 fw-300 sd-1 mt-2 mt-lg-4">
                    {attributes.string5}
                  </p>
                </div>
                <div>
                  <Link href="/building-blocks">
                    <div className={styles.button01_learn_more}>
                      Learn More..
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 px-3 wow fadeInDown">
              <div
                className={`flex-col justify-between ${styles.data_network}`}
              >
                <div>
                  <h2 className="title-data-network f-42">
                    {attributes.string6}
                  </h2>
                  <p className="f-18 fw-300 sd-1 mt-2 xl:mt-4">
                    {attributes.string7}
                  </p>
                </div>
                <div>
                  <Link
                    className={styles.button02_learn_more}
                    href="/data-network"
                  >
                    Learn More..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-partner">
        <div className="lg:container lg:mx-auto wow fadeInDown">
          <h1 className="content-title f-42 gradient-03">Our Partners</h1>
          <div className="row mt-3 xl:px-5">
            <OurPartner />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
