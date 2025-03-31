import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const GlobalTextStyle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

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
  box-shadow: 20px 20px 20px 20px 25px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled(GlobalTextStyle).attrs({ as: 'h2' })`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    flex-direction: column;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
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
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactInfo>
        <p>
          <FaEnvelope /> navyendhummenon@gmail.com
        </p>
        <p>
          <FaPhone /> +91 8921466823
        </p>
        <p>
          <FaLinkedin />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            Navyendhu Menon
          </a>
        </p>
      </ContactInfo>
      <ContactForm>
        <textarea type="text" placeholder="Your Name" required />
        <textarea type="email" placeholder="Your Email" required />
        <textarea rows="6" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
