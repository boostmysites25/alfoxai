import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import toast from "react-hot-toast";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "New Contact Form Submission - Alfox AI LLP",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div id="contact" className="section-padding bg-gradient-to-b from-black to-accent2">
      <div className="wrapper">
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Contact Us
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-1 text-gradient mt-4">
            Get in Touch
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="desc text-tertiary max-w-2xl mx-auto mt-4">
            Ready to take your business to the next level with innovative
            technology? Contact us today to learn how Alfox AI
            can help you achieve your digital transformation goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-[45%_auto] gap-10">
          <div
            data-aos="fade-right"
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-lg opacity-70"></div>
            <div className="relative bg-accent1 flex flex-col gap-6 text-white p-8 rounded-2xl shadow-soft h-full">
              <div className="flex flex-col gap-6 mb-4">
                <h3 className="text-2xl font-raleway font-semibold text-white">How Can We Help?</h3>
                <p className="text-tertiary">
                  Whether you're looking to start a new project, enhance your existing systems, or just want to learn more about our services, we're here to help.
                </p>
              </div>
              
              <Link
                to={`tel:${companyDetails.phone}`}
                className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent2 flex justify-center items-center group-hover:bg-accent3 transition-colors duration-300">
                  <FaPhone className="text-xl text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-tertiary">{companyDetails.phone}</p>
                </div>
              </Link>
              
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent2 flex justify-center items-center group-hover:bg-accent3 transition-colors duration-300">
                  <IoMail className="text-2xl text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium text-white">Email</p>
                  <p className="text-tertiary">{companyDetails.email}</p>
                </div>
              </Link>
              
              <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-accent2 flex justify-center items-center group-hover:bg-accent3 transition-colors duration-300 mt-1">
                  <FaLocationDot className="text-xl text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium text-white">Location</p>
                  <p className="text-tertiary max-w-[20rem]">{companyDetails.address}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-medium text-white mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <Link
                    to={companyDetails.facebook}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center hover:bg-accent3 transition-colors duration-300"
                  >
                    <BsFacebook className="text-lg text-white" />
                  </Link>
                  <Link
                    to={companyDetails.twitter}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center hover:bg-accent3 transition-colors duration-300"
                  >
                    <BsTwitter className="text-lg text-white" />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center hover:bg-accent3 transition-colors duration-300"
                  >
                    <BsLinkedin className="text-lg text-white" />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center hover:bg-accent3 transition-colors duration-300"
                  >
                    <BsInstagram className="text-lg text-white" />
                  </Link>
                  <Link
                    to={companyDetails.youtube}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center hover:bg-accent3 transition-colors duration-300"
                  >
                    <BsYoutube className="text-lg text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div
            data-aos="fade-left"
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-lg opacity-70"></div>
            <div className="relative rounded-2xl bg-accent1 p-8 shadow-soft h-full">
              <h3 className="text-2xl font-raleway font-semibold text-white mb-6">Send Us a Message</h3>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-accent2/50 border border-white/10 outline-none focus:border-white/30 transition-colors duration-300 text-white"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Full name is required",
                        validate: (val) => {
                          if (val.trim() !== "") {
                            return true;
                          } else {
                            return "Full name is required";
                          }
                        },
                      })}
                    />
                    {!errors.name && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  {errors.name && (
                    <small className="text-red-400 pl-1">{errors.name?.message}</small>
                  )}
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-accent2/50 border border-white/10 outline-none focus:border-white/30 transition-colors duration-300 text-white"
                        placeholder="Email Address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Entered email is invalid",
                          },
                        })}
                      />
                      {!errors.email && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    {errors.email && (
                      <small className="text-red-400 pl-1">{errors.email?.message}</small>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-accent2/50 border border-white/10 outline-none focus:border-white/30 transition-colors duration-300 text-white"
                        placeholder="Phone Number"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                      />
                      {!errors.phone && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                    </div>
                    {errors.phone && (
                      <small className="text-red-400 pl-1">{errors.phone?.message}</small>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="relative">
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-accent2/50 border border-white/10 outline-none focus:border-white/30 transition-colors duration-300 text-white resize-none"
                      placeholder="Your Message"
                      {...register("message", {
                        required: "Message is required",
                        validate: (val) => {
                          if (val.trim() !== "") {
                            return true;
                          } else {
                            return "Message is required";
                          }
                        },
                      })}
                    ></textarea>
                    {!errors.message && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )}
                  </div>
                  {errors.message && (
                    <small className="text-red-400 pl-1">{errors.message?.message}</small>
                  )}
                </div>
                
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="primary-btn mt-3 group flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h14" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
