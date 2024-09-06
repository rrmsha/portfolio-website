// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>Research Motivation</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          I'm passionate about creating technology that genuinely serves people. 
          So, my interest in security is driven by how systems can be made more secure for people and 
          how their privacy is integrated into today's technological landscape. 
          I want to further explore Human-Computer Interaction (HCI) and contribute to making security solutions more robust.
          </p>
          <p>I am currently leading a research project on healthcare security at the 
            <a href="https://www.afsah.org/beyonddefense" target="_blank"> <u>BeyondDefense Lab</u> </a>, 
            under the guidance of Dr. Afsah Anwar and Dr. Sazzadur Rahman.
            My research aims to investigate how people interact with everyday healthcare 
            technology and assess the extent to which their privacy is upheld, using qualitative
            analysis, privacy policy evaluation, and exploring privacy through the lens of 
            contextual integrity.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;