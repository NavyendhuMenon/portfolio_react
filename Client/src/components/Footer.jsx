import styled from 'styled-components';

const FooterSection = styled.footer`

  padding: 3rem;
  margin-top : 100px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.body};
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterSection>
      <FooterText>© 2025 Navyendhu Menon | Crafted with Passion</FooterText>
    </FooterSection>
  );
}

export default Footer;