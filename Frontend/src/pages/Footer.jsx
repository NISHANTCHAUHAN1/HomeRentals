import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="w-full overflow-hidden py-8 bg-white text-textColor border-t border-gray-500">
      <div className="flex h-full justify-center items-center px-12 mx-auto">
        {/* <div className="mb-4 inline-flex items-center">
          logo
        </div> */}
        <div>
          <p className="text-lg font-semibold">
            &copy; 2024{" "}
           <Link
              to="https://nish14.vercel.app/"
              target="_blank"
              className="text-primary"
            >
              Nishant Chauhan
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
