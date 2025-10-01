import React, { useState, useEffect } from "react";
import axios from "axios";
import SkillCard from "./SkillCard"; // your original SkillCard component
import '../index.css'; // make sure spinner CSS is here

function SkillsSection({ skillsUrl }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(skillsUrl)
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [skillsUrl]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <p className="loading-message">
          Fetching skills from backend... Please wait if the server was inactive.
        </p>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="row">
      {skills.map((skill, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
