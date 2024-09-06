const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
        <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card java">
            <i className="fa-brands fa-java java-icon"></i>
            <p>Java</p>
          </div>
          <div className="skill-card c">
            <i className="fa-brands fa-c c-icon"></i>
            <p>C/C++</p>
          </div>
          <div className="skill-card android">
            <i className="fa-brands fa-android js-icon"></i>
            <p>Android Studio</p>
          </div>
          <div className="skill-card golang">
            <i className="fa-brands fa-golang golang-icon"></i>
            <p>Golang</p>
          </div>
          <div className="skill-card angular">
            <i className="fa-brands fa-angular angular-icon"></i>
            <p>Angular</p>
          </div>
          </div>
      </div>
    )
  }
  
  export default Skills;