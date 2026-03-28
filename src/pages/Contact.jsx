function Contact() {
  return (
    <section className="section reveal active">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info glass-card">
          <h3>Let's Connect</h3>
          <p>I am currently open to new opportunities, internships, and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className="social-links" style={{marginTop: "2rem"}}>
            <a href="https://www.linkedin.com/in/ramanuj-kumar1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Ramanujkumar91" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="mailto:ramanuj.dav10@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="contact-form glass-card">
          <form action="#" method="POST" id="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required className="form-control" />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Message" required className="form-control" style={{resize: "vertical"}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message <i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
