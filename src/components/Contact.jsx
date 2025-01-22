import React, { useState } from "react";

import '../css/contact.css';

const Footer = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const showSuccessAlert = () => {
    swal({
      title: "Success",
      text: "Your response was submitted successfully.",
      icon: "success",
      buttons: false,
      timer: 1500,
    });
  };

  const showErrorAlert = () => {
    swal({
      title: "Error",
      text: "There was a problem submitting your response.",
      icon: "error",
      buttons: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xkgwlvny', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showSuccessAlert();
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        showErrorAlert();
        setStatus(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  const sites = [
    { name: 'location-dot', color: '#FF6347', url: 'https://g.co/kgs/MzAVH5v' },
    { name: 'kaggle', color: '#00BFFF', url: 'https://www.kaggle.com/vinayakrhatankar12' },
    { name: 'linkedin', color: '#0077B5', url: 'https://www.linkedin.com/in/vinayak-rhatankar-448897263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'github', color: '#333333', url: 'https://github.com/VinayakR12' },
    { name: 'envelope', color: '#FF69B4', url: 'mailto:rhatankarvinayak@gmail.com' },
  ];

  const handleClick = (index) => {
    setActiveBtn(index);
  };

  return (
    <div className="Main11" id="Contact">
      <div className="box1">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-4 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:rounded-lg flex flex-col justify-center items-start">
                <h1 className="hi1">Get in touch</h1>
                <p className="newP" style={{color:"black"}}>Fill in the form to start a conversation</p>

                <div className="social-btns">
                  {sites.map((site, index) => (
                    <a
                      key={site.name}
                      href={site.url}
                      className={`btn ${activeBtn === index ? 'active' : ''} ${site.name}`}
                      onClick={() => handleClick(index)}
                      style={{ backgroundColor: site.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${
                          site.name === 'phone'|| site.name === 'location-dot' || site.name === 'envelope'
                            ? `fa-solid fa-${site.name}`
                            : `fab fa-${site.name}`
                        }`}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div>

                  <input
                    className="in"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
    
                  <input
                    className="in"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  {/* <label htmlFor="message" className="visually-hidden">Message</label> */}
                  <textarea
                    className="in"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="Subutton">Submit</button>
                {status && <p>{status}</p>}
                <p className="newP">
                  Reach out today to start a conversation about your project, and let’s work together to turn your vision into reality.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
