import React, { useState } from "react";

const MeetOurTeam = () => {
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

  return (
    <div className="meet-our-team space-padding">
      <div className="container mx-auto px-2">
        <div className="columns-1 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-md-10 col-lg-8 mx-auto">
            <h2 className="content-title-white f-42">Meet our team</h2>
            <form className="row pt-4 px-1" onSubmit={handleSubmit}>
              <div className="sm:columns-2 columns-1 2xl:px-60 xl:px-24">
                <fieldset className="w-full">
                  <input
                    className="w-full ps-3 form-control form-light form-hight"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset className="w-full">
                  <input
                    className="w-full ps-3 form-control form-light form-hight"
                    placeholder="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
              </div>
              <div className="sm:columns-2 columns-1 2xl:px-60 xl:px-24">
                <fieldset className="w-full">
                  <input
                    className="w-full ps-3 form-control form-light form-hight"
                    placeholder="Work Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
                <fieldset className="w-full">
                  <input
                    className="w-full ps-3 form-control form-light form-hight"
                    placeholder="Company Name"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
              </div>
              <div className="columns-1 2xl:px-60 xl:px-24">
                <fieldset className="w-full">
                  <textarea
                    className="w-full ps-3 pt-2 form-control form-light"
                    placeholder="Let's us know your requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </fieldset>
              </div>

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
      </div>
    </div>
  );
};

export default MeetOurTeam;
