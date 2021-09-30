import React, { useEffect } from "react";
import FreelancerCard from "./FreelancerCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserAppBar from "../UserNavbar";
import "./freelancer.css";

import { GET, GET_AUTH } from "../../api";

const FreelancerInfo = () => {
  const [project, setProject] = React.useState([]);

  var hashTags = [];

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET(`project`);
        console.log(data);
        setProject(data);
        console.log("tjdf" + project);
      } catch (e) {
        console.log(e);
      }
    };
    exe();
  }, []);

  return (
    <section className="comp">
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

          {/* {project.map((pro) => (
            <CompanyCard
              id={pro.id}
              name={pro.name}
              months={pro.duration}
              price={pro.price}
              level={pro.level}
              des={pro.description.substring(0, 100)}
              tags={pro.tags}
              oncardClick={() => {
                localStorage.getItem("access_token") != null
                  ? (window.location.href = `/detail-post/${pro.id}`)
                  : (window.location.href = `/sign-in`);
              }}
            />
          ))} */}
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
        </div>
      </div>
    </section>
  );
};

export default FreelancerInfo;
