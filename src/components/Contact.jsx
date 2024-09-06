// components/Contact.jsx

const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>I am actively looking for opportunities in security, privacy and HCI. If you think I am a good fit, let me know! </p>
        {/* <a href="mailto:ramshaanwar11@gmail.com" className='cta-btn'>Say Hello</a> */}
        <div className="contact-links">
        <a href="mailto:ramshaanwar11@gmail.com"> <i> Mail</i> </a> 
        <a
              href="https://github.com/rrmsha"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            > <i> GitHub</i></a>
           <a
              href="https://www.linkedin.com/in/ramsha-anwar-2b3167218/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            > <i> LinkedIn </i></a>
            </div>
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
    )
  }
  
  export default Contact;