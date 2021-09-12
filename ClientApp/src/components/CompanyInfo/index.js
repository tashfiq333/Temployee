import React from "react";
import CompanyCard from "./CompanyCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./companyinfo.css";

const CompanyInfo = () => {
  return (
    <section className="comp">
      <div>
        <div className="title">
          <h2> Catagory</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
          </div>
        </div>
        <div className="row body_padding">
          {/* <LinearProgress
      className="progress_bar"
      variant="determinate"
      value={50}
    /> */}

          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
