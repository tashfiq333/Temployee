import React, { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./companyinfo.css";
import { GET } from "../../api";

const CompanyInfo = () => {
  const [project, setProject] = React.useState([]);
  var hashTags = [];

  useEffect(() => {
    const exe = async () => {
      try {
        const { data } = await GET(`project`);
        console.log(data);
        setProject(data);
        if (data.tags.length > 3) {
          hashTags = data.tags.slice(0, 3);
        }
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

          {project.map((pro) => (
            <CompanyCard
              id={pro.id}
              name={pro.name}
              months={pro.duration}
              price={pro.price}
              level={pro.level}
              des={pro.description.substring(0, 100)}
              tags={pro.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
