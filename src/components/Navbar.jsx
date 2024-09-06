// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Ramsha Anwar
        </Link>
      </div>
      <a href="/resume.pdf" target="_blank" className="cta-btn">Resume</a>
    </div>
  )   
}

export default Navbar;