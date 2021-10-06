import React, { useEffect } from "react";
import FreelancerCard from "./FreelancerCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserAppBar from "../UserNavbar";
import "./freelancer.css";
import CompanyAppBar from "../NavbarCompany";

import { GET, GET_AUTH } from "../../api";

const FreelancerInfo = () => {
  const [freelancer, setFreelancer] = React.useState([]);

  var hashTags = [];

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET(`freelancer`);
        console.log(data);
        setFreelancer(data);
        console.log(freelancer);
      } catch (e) {
        console.log(e);
      }
    };
    exe();
  }, []);

  return (
    <section className="comp">
      {localStorage.getItem("access_token") != null ? <CompanyAppBar /> : ""}
      <div>
        <div className="title">
          <h2> Find Talents</h2>
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

          {freelancer.map((pro) => (
            <FreelancerCard
              id={pro.uid}
              name={pro.name}
              bio={pro.bio.substring(0, 100)}
              skill={pro.freelancerSkill}
              oncardClick={() => {
                localStorage.getItem("access_token") != null
                  ? (window.location.href = `/companyuser-profile/${pro.uid}`)
                  : (window.location.href = `/sign-in`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerInfo;
