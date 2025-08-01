// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Personal headshot" />
      <div className="hero-text">
        <h1>Hello, I am Ramsha </h1>
        <p>
          I'm a first-year PhD student at the University of New Mexico working in the guidance of Dr Afsah Anwar. I aim to bring creativity into my research and currently am curious about security, privacy and other things in between. 
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