import "./Work.css";

const About = () => {
  return (
    <div className="w">
      <div className="w-left">
        {/* <div className="w-card bg"></div> */}
        <div className="w-card">
          <img
            src="https://www.tcs.com/content/dam/tcs/images/Newtcslogo/tcs-logo-tata-white-1x-dec2021.png"
            alt="TCS"
            className="w-img"
          />
        </div>
      </div>
      <div className="w-right">
        <h1 className="w-title">Work Experience</h1>
        <p className="w-sub">Full Stack Developer</p>
        <p className="w-desc">2018 - Present</p>
        <div className="w-award">
          <div className="w-award-texts">
            <h4 className="w-awards-title">Technologies Used</h4>
            <p className="w-award-desc">
              HTML, CSS, JavaScript <br />
              ReactJS, Spring Boot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
