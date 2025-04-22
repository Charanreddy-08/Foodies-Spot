import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 m-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {currentYear} Foodies Spot. All rights reserved.
        </p>
        <p className="mb-0">
        </p>
      </div>
    </footer>
  );
};

export default Footer;
