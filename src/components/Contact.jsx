import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 5rem 3rem;
  text-align: center;
  background: ${({ theme }) => theme.cardBg};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Get in Touch</Title>
      <ContactInfo>
        <InfoText>Email: <Link href="mailto:navyendhummenon@gmail.com">navyendhummenon@gmail.com</Link></InfoText>
        <InfoText>Phone: <Link href="tel:+918921466823">(+91) 892-146-6823</Link></InfoText>
        <InfoText>LinkedIn: <Link href="https://linkedin.com/in/navyendhu" target="_blank">linkedin.com/in/navyendhu</Link></InfoText>
        <InfoText>GitHub: <Link href="https://github.com/navyendhu" target="_blank">github.com/navyendhu</Link></InfoText>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact;