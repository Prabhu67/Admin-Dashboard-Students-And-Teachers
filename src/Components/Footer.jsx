import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            Prabhu
          </a>
          <span className="text-muted">© 2023 Tech Company, Inc.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
