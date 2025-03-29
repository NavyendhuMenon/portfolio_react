import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 800;
  letter-spacing: -1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.accent};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: ${({ theme }) => theme.accent};
      animation: underline 0.3s ease forwards;
    }
  }
  @keyframes underline {
    from { width: 0; }
    to { width: 100%; }
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
`;

function Header({ toggleTheme, theme }) {
  return (
    <Nav>
      <Logo>Navyendhu Menon</Logo>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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