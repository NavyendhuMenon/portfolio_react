import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
  width: calc(100% - 250px);
  margin-left: 200px;
  margin-top: 50px;
  border-radius: 15px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
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

  input,
  textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.shadow};
    font-size: 1.2rem;
  }

  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    padding: 15px;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.accent};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactInfo>
        <p><FaEnvelope /> navyendhummenon@gmail.com</p>
        <p><FaPhone /> +91 8921466823</p>
        <p><FaLinkedin /> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Navyendhu Menon</a></p>
      </ContactInfo>
      <ContactForm>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="6" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;


