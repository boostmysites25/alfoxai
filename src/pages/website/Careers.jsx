import React, { useState } from "react";
import Banner from "../../components/website/Banner";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../constant";

const jobOpenings = [
  {
    id: 1,
    title: "AI Engineer",
    department: "Artificial Intelligence",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "We're looking for an AI Engineer with strong experience in machine learning and natural language processing to join our growing team.",
    responsibilities: [
      "Design, develop and implement AI models for various applications",
      "Work with large datasets and perform feature engineering",
      "Collaborate with cross-functional teams to integrate AI solutions",
      "Stay updated with the latest AI research and technologies",
      "Optimize existing models for improved performance and accuracy",
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, AI, or related field",
      "3-5 years of experience in AI/ML development",
      "Proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
      "Experience with NLP and computer vision technologies",
      "Strong problem-solving skills and attention to detail",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Web Development",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "We are seeking a talented Full Stack Developer to build and maintain web applications for our clients across various industries.",
    responsibilities: [
      "Develop responsive and scalable web applications",
      "Work with both front-end and back-end technologies",
      "Collaborate with designers to implement UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and maintain code quality",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2-4 years of experience in full stack development",
      "Proficiency in JavaScript, React, Node.js, and MongoDB",
      "Experience with RESTful APIs and modern web frameworks",
      "Knowledge of version control systems (Git)",
    ],
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Mobile Development",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Join our mobile development team to create innovative and user-friendly mobile applications for iOS and Android platforms.",
    responsibilities: [
      "Develop native and cross-platform mobile applications",
      "Collaborate with the design team to implement UI/UX designs",
      "Ensure the performance and quality of applications",
      "Identify and fix bugs and performance bottlenecks",
      "Stay updated with the latest mobile development trends",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2-5 years of experience in mobile app development",
      "Proficiency in React Native or Flutter",
      "Experience with iOS (Swift) and Android (Kotlin/Java) development",
      "Knowledge of RESTful APIs and mobile app architecture",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-6 years",
    description:
      "We're looking for a creative UI/UX Designer to create engaging and intuitive user experiences for our web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Create and maintain design systems",
      "Stay updated with the latest design trends and tools",
    ],
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "3-6 years of experience in UI/UX design",
      "Proficiency in design tools (Figma, Adobe XD, Sketch)",
      "Strong portfolio demonstrating UI/UX projects",
      "Knowledge of design principles and user-centered design",
    ],
  },
  {
    id: 5,
    title: "IoT Developer",
    department: "IoT Development",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Join our IoT team to develop innovative solutions that connect the physical and digital worlds for various industries.",
    responsibilities: [
      "Design and develop IoT applications and systems",
      "Work with various sensors, devices, and communication protocols",
      "Implement secure data collection and processing systems",
      "Collaborate with hardware engineers and software developers",
      "Troubleshoot and resolve technical issues",
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, Electronics, or related field",
      "3-5 years of experience in IoT development",
      "Knowledge of IoT protocols (MQTT, CoAP, etc.)",
      "Experience with embedded systems and microcontrollers",
      "Proficiency in programming languages like Python, C/C++, or JavaScript",
    ],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
      coverLetter: "",
    },
  });

  const openJobDetails = (job) => {
    setSelectedJob(job);
    // Use setTimeout to ensure the DOM has updated before trying to scroll
    setTimeout(() => {
      const jobDetailsElement = document.getElementById("job-details");
      if (jobDetailsElement) {
        // Get the element's position
        const elementPosition = jobDetailsElement.getBoundingClientRect().top;
        // Get the current scroll position
        const offsetPosition = elementPosition + window.pageYOffset - 150;

        // Scroll to the element with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  const handleFormSubmit = async (values) => {
    setSpinner(true);
    try {
      const formData = new FormData();

      const reqBody = `
      Name: ${values.name} \n
      Email: ${values.email} \n
      Phone: ${values.phone} \n
      Position: ${selectedJob?.title || "General Application"} \n
      Experience: ${values.experience} \n
      Cover Letter: ${values.coverLetter}
      `;

      formData.append("body", reqBody);

      // Append the resume file
      if (values.resume && values.resume[0]) {
        formData.append("attachments", values.resume[0]);
      }

      formData.append("to", companyDetails.email);
      formData.append("subject", `Career Application - ${values.name}`);
      formData.append("name", "Alfox AI Careers");

      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          body: formData,
        }
      );

      const res = await response.json();
      if (res.success) {
        toast.success("Application submitted successfully!");
        reset();
        closeModal();
      } else {
        toast.error(res.message || "Failed to submit application");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the application");
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <Banner page="Join Our Team" />

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-accent1 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Apply for {selectedJob?.title || "Position"}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-tertiary hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-tertiary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full bg-accent1/50 border ${
                        errors.name ? "border-red-500" : "border-white/20"
                      } rounded-lg p-3 text-white focus:outline-none focus:border-accent2`}
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-tertiary mb-2">Email *</label>
                    <input
                      type="email"
                      className={`w-full bg-accent1/50 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                      } rounded-lg p-3 text-white focus:outline-none focus:border-accent2`}
                      placeholder="Your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-tertiary mb-2">Phone *</label>
                    <input
                      type="tel"
                      className={`w-full bg-accent1/50 border ${
                        errors.phone ? "border-red-500" : "border-white/20"
                      } rounded-lg p-3 text-white focus:outline-none focus:border-accent2`}
                      placeholder="Your phone number"
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-tertiary mb-2">
                      Experience *
                    </label>
                    <input
                      type="text"
                      className={`w-full bg-accent1/50 border ${
                        errors.experience ? "border-red-500" : "border-white/20"
                      } rounded-lg p-3 text-white focus:outline-none focus:border-accent2`}
                      placeholder="Years of experience"
                      {...register("experience", {
                        required: "Experience is required",
                      })}
                    />
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-tertiary mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    className={`w-full bg-accent1/50 border ${
                      errors.resume ? "border-red-500" : "border-white/20"
                    } rounded-lg p-3 text-white focus:outline-none focus:border-accent2`}
                    accept=".pdf,.doc,.docx"
                    {...register("resume", { required: "Resume is required" })}
                  />
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.resume.message}
                    </p>
                  )}
                  <p className="text-sm text-tertiary mt-1">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-tertiary mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    className="w-full bg-accent1/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accent2 min-h-[150px]"
                    placeholder="Tell us why you're interested in this position and what makes you a good fit"
                    {...register("coverLetter")}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="primary-btn inline-flex items-center justify-center"
                    disabled={spinner}
                  >
                    {spinner ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Company Culture Section */}
      <div className="wrapper py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
          <p className="desc max-w-3xl mx-auto">
            At Alfox AI, we foster a culture of innovation, collaboration, and
            continuous learning. We believe in empowering our team members to
            explore new ideas and grow professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
            <p className="text-tertiary">
              We encourage creative thinking and embrace new technologies to
              solve complex problems.
            </p>
          </div>

          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Collaboration</h3>
            <p className="text-tertiary">
              We work together across disciplines to create integrated solutions
              that exceed expectations.
            </p>
          </div>

          <div
            className="card text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Growth</h3>
            <p className="text-tertiary">
              We invest in our team's professional development and provide
              opportunities to learn new skills.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-lg opacity-70"></div>
          <div className="relative bg-accent1/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
              Why Work With Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-white">Health Insurance</h4>
                  <p className="text-sm text-tertiary">
                    Comprehensive health coverage for you and your family
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-white">Flexible Work</h4>
                  <p className="text-sm text-tertiary">
                    Remote work options and flexible hours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-white">Modern Office</h4>
                  <p className="text-sm text-tertiary">
                    State-of-the-art facilities and amenities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-white">Paid Time Off</h4>
                  <p className="text-sm text-tertiary">
                    Generous vacation policy and paid holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Openings Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Current Openings
          </h2>

          {selectedJob ? (
            <div id="job-details" className="card mb-8">
              <button
                onClick={() => setSelectedJob(null)}
                className="mb-6 flex items-center text-highlight hover:text-tertiary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to all openings
              </button>

              <div className="border-b border-white/10 pb-6 mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-accent2 px-3 py-1 rounded-full text-sm text-white">
                    {selectedJob.department}
                  </span>
                  <span className="bg-accent2 px-3 py-1 rounded-full text-sm text-white">
                    {selectedJob.location}
                  </span>
                  <span className="bg-accent2 px-3 py-1 rounded-full text-sm text-white">
                    {selectedJob.type}
                  </span>
                  <span className="bg-accent2 px-3 py-1 rounded-full text-sm text-white">
                    {selectedJob.experience} Experience
                  </span>
                </div>
                <p className="text-tertiary">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Responsibilities
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index} className="text-tertiary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Requirements
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index} className="text-tertiary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => handleJobSelect(selectedJob)}
                  className="primary-btn inline-block"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="card hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={job.id * 100}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-accent2 px-2 py-1 rounded-full text-xs text-white">
                          {job.department}
                        </span>
                        <span className="bg-accent2 px-2 py-1 rounded-full text-xs text-white">
                          {job.location}
                        </span>
                        <span className="bg-accent2 px-2 py-1 rounded-full text-xs text-white">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-tertiary text-sm mb-4 md:mb-0">
                        {job.description.substring(0, 120)}...
                      </p>
                    </div>
                    <button
                      onClick={() => openJobDetails(job)}
                      className="self-start md:self-center mt-4 md:mt-0 secondary-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Application Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Hiring Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h4 className="font-bold mb-2">Application</h4>
              <p className="text-sm text-gray-400">
                Submit your resume and cover letter through our careers page
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h4 className="font-bold mb-2">Initial Screening</h4>
              <p className="text-sm text-gray-400">
                Our HR team will review your application and schedule a phone
                interview
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h4 className="font-bold mb-2">Technical Assessment</h4>
              <p className="text-sm text-gray-400">
                Complete a skills assessment or technical interview with our
                team
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent2 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h4 className="font-bold mb-2">Final Interview</h4>
              <p className="text-sm text-gray-400">
                Meet with the team and discuss your potential role in detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
