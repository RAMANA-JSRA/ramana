import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(true); // State to track valid email input
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidName = name.trim() !== "";
    const isValidMessage = message.trim() !== "";

    if (!isValidEmail || !isValidName || !isValidMessage) {
      setValidEmail(isValidEmail);
      return;
    }

    // Simulate submission (replace with actual submission logic)
    setTimeout(() => {
      setSubmitted(true);
      setValidEmail(true); // Reset valid email state
      // Reset form after submission (optional)
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Validate email format for newsletter subscription
    const isValidNewsletterEmail = /\S+@\S+\.\S+/.test(newsletterEmail);
    if (!isValidNewsletterEmail) {
      setValidEmail(false);
      return;
    }

    // Simulate subscription (replace with actual subscription logic)
    setTimeout(() => {
      setSubscribed(true);
      setValidEmail(true); // Reset valid email state
      // Clear newsletter email input (optional)
      setNewsletterEmail("");
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <p className="description">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        <div className="contact-form-container">
          {submitted ? (
            <div className="submitted-message">
              <p>Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={!validEmail ? "invalid" : ""}
                  required
                />
                {!validEmail && (
                  <p className="error-message">Please enter a valid email!</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="left-col">
              <h3>Join the newsletter</h3>
              <p>Get the latest insights and updates straight to your inbox.</p>
            </div>
            <div className="right-col">
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setValidEmail(true); // Reset validation on email change
                    }}
                    className={`newsletter-email ${
                      !validEmail ? "invalid" : ""
                    }`}
                    required
                  />
                  <button type="submit" className="subscribe-button">
                    Subscribe
                  </button>
                </div>
                {!validEmail && (
                  <p className="error-message">Please enter a valid email!</p>
                )}
              </form>
              {subscribed && (
                <p className="subscribed-message">Thank you for subscribing!</p>
              )}
              <p>Your privacy is important. I never share your email.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
