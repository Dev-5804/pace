// import React from "react";
import Button from "../components/Button";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container pt-36 pb-16 px-20"
    >
      <div className="flex flex-1 flex-col pr-5">
        <h2 className="font-palanquin text-4xl lg:text-5xl font-bold lg:max-w-lg leading-tight">
          Get in <span className="text-coral-red">Touch</span>
        </h2>

        <p className="mt-6 lg:mt-8 max-w-lg info-text text-slate-gray leading-7">
          We would love to hear from you! Whether you have a question about our
          products, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>

        <div className="mt-8 lg:mt-11">
          <Button label="Send a Message" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center max-lg:mt-8 pl-5">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">
            Contact Info
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800">Email</h4>
              <p className="text-slate-gray">customer@pace.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">Phone</h4>
              <p className="text-slate-gray">+0123456789</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">Address</h4>
              <p className="text-slate-gray">
                123 Sneaker Street
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
