import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between from-xAI
  align-items: center;
  padding: 1.5rem 3rem;
  position: sticky;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.body}ee;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 800;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(20deg);
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function Header({ toggleTheme, theme }) {
  return (
    <Nav>
      <Logo>Navyendhu Menon</Logo>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <NavLinks>
          <Link href="#home">Home</Link>
          <Link href="#technologies">Technologies</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://github.com/navyendhu" target="_blank">GitHub</Link>
        </NavLinks>
        <ThemeButton onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeButton>
      </div>
    </Nav>
  );
}

export default Header;