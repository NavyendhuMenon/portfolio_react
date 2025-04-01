import styled from "styled-components";
import {
  FaSun,
  FaMoon,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import images from "../assets/gibli_navyendhu.jpg";

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
  font-family: "Poppins", sans-serif; // Default font family for the sidebar

  @media (max-width: 1024px) {
    position: static;
    width: calc(100% - 60px); // Account for margin
    height: auto;
    padding: 2rem 1.5rem;
    margin: 30px;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 10px;
    width: calc(100% - 20px);
  }
`;

const ProfilePic = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 5px solid ${({ theme }) => theme.secondary};

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const Name = styled.h1`
  font-family: "IBM Plex Mono", monospace; // Explicitly set to IBM Plex Mono
  font-size: 2.2rem;
  font-weight: 700; // Use bold weight for emphasis
  color: ${({ theme }) => theme.primary};
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Role = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secondary};
  margin: 0.5rem 0;
  text-align: center;
  font-family: "IBM Plex Mono", monospace;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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
  font-family: "IBM Plex Mono", monospace;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
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
  font-family: "IBM Plex Mono", monospace;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
  }
`;

const SkillLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 0.5rem;
  font-family: "IBM Plex Mono", monospace;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin: 1.5rem 0;
  transition: transform 0.3s ease;
  font-family: "IBM Plex Mono", monospace;

  &:hover {
    transform: rotate(20deg);
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
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
  font-family: "IBM Plex Mono", monospace;

  &:hover {
    background: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

function Sidebar({ toggleTheme, theme }) {
  return (
    <SidebarContainer>
      <ProfilePic src={images} alt="Navyendhu Menon" />
      <Name>Navyendhu Menon</Name>
      <Role>Full Stack Developer</Role>
      <InfoSection>
        <InfoItem>
          <span>Residence:</span>
          <span>India</span>
        </InfoItem>
        {/* <InfoItem>
          <span>State:</span>
          <span>Kerala</span>
        </InfoItem> */}
        <InfoItem>
          <span>City:</span>
          <span>Kochi</span>
        </InfoItem>
        <InfoItem>
          <span>Languages:</span>
          <span>English, Malayalam, Tamil</span>
        </InfoItem>
      </InfoSection>
      <SocialLinks>
        <a
          href="https://github.com/NavyendhuMenon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/navyendhu-menon-0074231b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/navyendhummenon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.instagram.com/stories.by.navyendhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/+918921466823"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </SocialLinks>

      <SkillsSection>
        {[
          { skill: "MongoDB", progress: 90 },
          { skill: "Express", progress: 93 },
          { skill: "React", progress: 85 },
          { skill: "Node.js", progress: 93 },
        ].map(({ skill, progress }) => (
          <div key={skill}>
            <SkillBubble>{progress}%</SkillBubble>
            <SkillLabel>{skill}</SkillLabel>
          </div>
        ))}
      </SkillsSection>
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </ThemeButton>
      <DownloadButton href="/Navyendhu_MERN_Resume.pdf" download>
        <FaDownload /> Download CV
      </DownloadButton>
    </SidebarContainer>
  );
}

export default Sidebar;
