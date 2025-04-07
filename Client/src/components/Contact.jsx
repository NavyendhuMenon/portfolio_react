import styled from "styled-components";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
  width: calc(100% - 250px);
  margin-top: 50px;
  margin-left: 200px;
  border-radius: 15px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;


const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap; /* Allows the cards to wrap when there is not enough space */

  @media (max-width: 1024px) {
    justify-content: space-between;
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;


const ContactCard = styled.div`
background: ${({ theme }) => theme.cardBg};
padding: 20px;
border-radius: 10px;
box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};
text-align: center;
font-size: 1.2rem;
font-weight: 500;
flex: 1;
min-width: 250px;
max-width: 300px; /* Limit the maximum width of the card */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 0.3s ease;
word-break: break-word;
white-space: normal;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px ${({ theme }) => theme.shadow};
}

a,
span {
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: color 0.3s ease;
  text-align: center;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
}
`;


const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  background: ${({ theme }) => theme.cardBg};
  padding: 4rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};
  margin-top: 30px;

  input,
  textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.shadow};
    font-size: 1.2rem;
    box-sizing: border-box;
  }

  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    padding: 15px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.accent};
    }
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("On handle submit")
  
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required!");
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email format!");
      return;
    }
  
    setErrorMessage("");
  
   console.log("VALIDATION DONE")

  
    try {

      console.log("inside try")

      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

      console.log("BACKEND URL", BACKEND_URL);
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
  
            
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };
  

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContactCards>
        <ContactCard>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <span>navyendhummenon@gmail.com</span>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          <span>+91 8921466823</span>
        </ContactCard>
        <ContactCard>
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <a
            href="https://www.linkedin.com/in/navyendhu-menon-0074231b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navyendhu Menon
          </a>
        </ContactCard>
      </ContactCards>
      {/* Display error message */}
      {errorMessage && (
        <div
          style={{
            color: "red",
            marginTop: "10px",
            fontSize: "1.5rem",
            padding: "10px",
            textAlign: "center",
          }}
        >
          {errorMessage}
        </div>
      )}

      {/* Display success message */}
      {successMessage && (
        <div
          style={{
            color: "green",
            marginTop: "10px",
            fontSize: "1.5rem",
            padding: "10px",
            textAlign: "center",
          }}
        >
          {successMessage}
        </div>
      )}

      <ContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          rows="6"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
