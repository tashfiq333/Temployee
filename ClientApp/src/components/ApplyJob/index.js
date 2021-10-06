import React, { useEffect } from "react";
import CompanyCard from "../CompanyInfo/CompanyCard";
import UserAppBar from "../UserNavbar";

import { GET, GET_AUTH } from "../../api";

const ApplyJob = () => {
  const [project, setProject] = React.useState([]);

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET_AUTH(`project/appliedjob`);
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
      <UserAppBar />
      <div>
        <div className="title">
          <h2>Applied Job</h2>
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

          {project != null
            ? project.map((pro) => (
                <CompanyCard
                  id={pro.id}
                  name={pro.name}
                  months={pro.duration}
                  price={pro.price}
                  level={pro.level}
                  des={pro.description.substring(0, 100)}
                  tags={pro.tags}
                  status="Hired"
                />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default ApplyJob;
