// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hello, I am Ramsha </h1>
        <p>
          I'm an undergraduate computer engineering major at Jamia Millia Islamia, New Delhi exploring how systems can be made secure for people and curious about security, privacy and other things in between.
        </p>
        {/* <div className="social_icons">
            <a
              href="https://github.com/rrmsha"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ramsha-anwar-2b3167218/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div> */}
      </div>
    </div>
  )
}

export default Hero;