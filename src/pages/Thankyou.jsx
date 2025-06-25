import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="wrapper h-full flex flex-col items-center gap-3 text-white text-center">
        <h1 className="heading-1">Thank You!</h1>
        <p className="desc">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="primary-btn w-fit mt-4">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
