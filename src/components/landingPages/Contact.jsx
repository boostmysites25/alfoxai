import React, { useContext } from "react";
import { SpinnerContext } from "../SpinnerContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { companyDetails } from "../../constant";
import toast from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiFileText } from "react-icons/fi";

const Contact = () => {
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
      subject: "",
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
      subject: values.subject,
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
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-accent2 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5 z-0"></div>
      
      <div className="wrapper relative z-10">
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Contact Us
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-2 text-gradient mt-4">
            Get In Touch!
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="desc max-w-[40rem] mx-auto mt-4">
            Have a project in mind or questions about our services? Reach out to our team 
            and discover how <span className="font-semibold">Alfox AI</span> can create 
            tailored digital solutions to address your unique business challenges.
          </p>
        </div>
        
        <div className="relative">
          {/* Border Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl blur-lg opacity-70"></div>
          
          {/* Main Content Card */}
          <div className="relative bg-accent1/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Side - Form */}
              <div data-aos="fade-right">
                <h3 className="text-2xl font-raleway font-semibold text-white mb-6">Send Us a Message</h3>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        <FiUser />
                      </div>
                      <input
                        className="w-full bg-accent2/50 outline-none border border-white/10 rounded-lg px-10 py-3 text-white focus:border-white/30 transition-colors duration-300"
                        type="text"
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
                    </div>
                    {errors.name && (
                      <small className="text-red-400 pl-3">{errors.name.message}</small>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                          <FiMail />
                        </div>
                        <input
                          className="w-full bg-accent2/50 outline-none border border-white/10 rounded-lg px-10 py-3 text-white focus:border-white/30 transition-colors duration-300"
                          type="email"
                          placeholder="Email Address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Entered email is invalid",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <small className="text-red-400 pl-3">{errors.email.message}</small>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                          <FiPhone />
                        </div>
                        <input
                          type="tel"
                          className="w-full bg-accent2/50 outline-none border border-white/10 rounded-lg px-10 py-3 text-white focus:border-white/30 transition-colors duration-300"
                          placeholder="Phone Number"
                          inputMode="numeric"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Invalid phone number",
                            },
                          })}
                        />
                      </div>
                      {errors.phone && (
                        <small className="text-red-400 pl-3">{errors.phone.message}</small>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        <FiFileText />
                      </div>
                      <input
                        className="w-full bg-accent2/50 outline-none border border-white/10 rounded-lg px-10 py-3 text-white focus:border-white/30 transition-colors duration-300"
                        type="text"
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Subject is required",
                          validate: (val) => {
                            if (val.trim() !== "") {
                              return true;
                            } else {
                              return "Subject is required";
                            }
                          },
                        })}
                      />
                    </div>
                    {errors.subject && (
                      <small className="text-red-400 pl-3">{errors.subject.message}</small>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="relative">
                      <div className="absolute left-3 top-4 text-white/50">
                        <FiMessageSquare />
                      </div>
                      <textarea
                        className="w-full bg-accent2/50 outline-none border border-white/10 rounded-lg px-10 py-3 text-white focus:border-white/30 transition-colors duration-300 resize-none"
                        rows="5"
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
                    </div>
                    {errors.message && (
                      <small className="text-red-400 pl-3">{errors.message.message}</small>
                    )}
                  </div>
                  
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="primary-btn mt-3 group flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
              
              {/* Right Side - Contact Info */}
              <div data-aos="fade-left" className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-raleway font-semibold text-white mb-6">Contact Information</h3>
                  <p className="text-tertiary mb-8">
                    Our team is ready to respond to your inquiries and provide expert guidance 
                    on how our digital solutions can help your business thrive in today's 
                    competitive landscape.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center group-hover:bg-accent3 transition-colors duration-300">
                        <FiMail className="text-lg text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a href={`mailto:${companyDetails.email}`} className="text-tertiary hover:text-white transition-colors duration-300">
                          {companyDetails.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center group-hover:bg-accent3 transition-colors duration-300">
                        <FiPhone className="text-lg text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <a href={`tel:${companyDetails.phone}`} className="text-tertiary hover:text-white transition-colors duration-300">
                          {companyDetails.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                {/* <div className="hidden md:block relative mt-10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-lg blur-lg opacity-70"></div>
                  <div className="relative bg-accent2/50 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center justify-center">
                      <div className="w-[150px] h-[150px] relative">
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-[20%] border border-white/20 rounded-full animate-spin-slow-reverse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-white font-medium">Response Time</p>
                            <p className="text-2xl font-bold text-white">24 hrs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
