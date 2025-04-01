import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

  a, span {
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
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <ContactCards>
        <ContactCard>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <span>navyendhummenon@gmail.com</span>
        </ContactCard>
        <ContactCard>
          <IconWrapper><FaPhone /></IconWrapper>
          <span>+91 8921466823</span>
        </ContactCard>
        <ContactCard>
          <IconWrapper><FaLinkedin /></IconWrapper>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            Navyendhu Menon
          </a>
        </ContactCard>
      </ContactCards>
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
