import "./About.css";
import College from "../../img/college.png";
import Me from "../../img/mee.png";
import Resume from "../../Sathyan_Natarajan.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div className="a-award">
          <img src={College} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-awards-title">Bachelor in Engineering</h4>
            <p className="a-award-desc">
              Materials Science and Engineering <br />
              Graduated - 2018
            </p>
          </div>
        </div>
        {/* <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> */}
        <p className="a-sub">
          First solve the problem. Then write the code – John Johnson
        </p>
        <a href={Resume} target="_blank" rel="noreferrer" className="a-resume">
          For More About Me !!!
        </a>
      </div>
    </div>
  );
};

export default About;
