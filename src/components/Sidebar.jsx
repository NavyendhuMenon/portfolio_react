import styled from 'styled-components';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import images from '../assets/alien.jpg';

const SidebarContainer = styled.aside`
  width: 500px;
  background: ${({ theme }) => theme.cardBg};
  padding: 3.5rem 2.5rem;
  position: fixed;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 20px 25px ${({ theme }) => theme.shadow};
  border-radius: 15px;
  margin: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    padding: 2rem 1.5rem;
    margin: 0;
    border-radius: 0;
  }
`;

const ProfilePic = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 5px solid ${({ theme }) => theme.secondary};
`;

const Name = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Role = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secondary};
  margin: 0.5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const InfoSection = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.7rem 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsSection = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillBubble = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.body};
  text-align: center;
  position: relative;
`;

const SkillLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 0.5rem;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin: 1.5rem 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
    color: ${({ theme }) => theme.accent};
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.body};
  padding: 1rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
`;

function Sidebar({ toggleTheme, theme }) {
  return (
    <SidebarContainer>
      <ProfilePic src={images} alt="Navyendhu Menon" />
      <Name>Navyendhu Menon</Name>
      <Role>MERN Stack Developer</Role>
      <InfoSection>
        <InfoItem>
          <span>Residence:</span>
          <span>India</span>
        </InfoItem>
        <InfoItem>
          <span>State:</span>
          <span>Kerala</span>
        </InfoItem>
        <InfoItem>
          <span>City:</span>
          <span>Kochi</span>
        </InfoItem>
        <InfoItem>
          <span>Languages:</span>
          <span>English, Malayalam, Hindi</span>
        </InfoItem>
      </InfoSection>
      <SkillsSection>
        {[{ skill: 'MongoDB', progress: 92 }, { skill: 'Express', progress: 88 }, { skill: 'React', progress: 85 }, { skill: 'Node.js', progress: 80 }].map(({ skill, progress }) => (
          <div key={skill}>
            <SkillBubble>{progress}%</SkillBubble>
            <SkillLabel>{skill}</SkillLabel>
          </div>
        ))}
      </SkillsSection>
      <ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeButton>
      <DownloadButton href="#" download>
        <FaDownload /> Download CV
      </DownloadButton>
    </SidebarContainer>
  );
}

export default Sidebar;