import styled from "styled-components";
import eatables from "../assets/eatablesCoverPhoto.jpg";
import netflix from "../assets/Netflix_Home.jpg";
import chatApp from "../assets/chatApp.jpg";
import Ums from "../assets/MERN_AUTH_PROFILE.jpg";

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
  width: calc(100% - 250px);
  margin-left: 200px;
  margin-top: 50px;
  border-radius: 15px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 20px 20px 20px 20px 25px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 2rem 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProjectsSection = styled.section`
  padding: 4rem 3rem;
  width: 100%;

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.accent}33;
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.accent};
  font-size: 1.6rem;
  margin-bottom: 1rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TechStack = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.95rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Projects() {
  return (
    <ProjectContainer>
      <ProjectsSection id="projects">
        <Title>Projects</Title>
        <ProjectGrid>
          <ProjectCard>
            <ProjectImage src={chatApp} alt="Chat App" />
            <ProjectTitle>Real-time ChatApp (In progress)</ProjectTitle>
            <ProjectDesc>Building a real-time chat app with instant messaging features.</ProjectDesc>
            <TechStack>React, Socket.io, Node.js, Redux-Toolkit, MongoDB, JWT</TechStack>
            <Link href="https://github.com/NavyendhuMenon/Chat_App" target="_blank" rel="noopener noreferrer">Source Code</Link>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={netflix} alt="Netflix Clone" />
            <ProjectTitle>Netflix-Clone</ProjectTitle>
            <ProjectDesc>A Netflix clone built with React and Firebase, featuring movie browsing, watchlists, and admin controls.</ProjectDesc>
            <TechStack>React, Firebase, Custom APIs, CSS</TechStack>
            <Link href="https://github.com/NavyendhuMenon/Netflix_Clone_React.js" target="_blank" rel="noopener noreferrer">Source Code</Link>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={eatables} alt="eatables" />
            <ProjectTitle>Eatables E-commerce</ProjectTitle>
            <ProjectDesc>Fully functional e-commerce platform with admin features.</ProjectDesc>
            <TechStack>MongoDB, Node.js, Express.js, EJS, JWT, AWS EC2, Razorpay</TechStack>
            <Link href="https://github.com/NavyendhuMenon/my-eatables" target="_blank" rel="noopener noreferrer">Source Code</Link>
            <Link href="https://eatables.shop" target="_blank" rel="noopener noreferrer">Live</Link>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={Ums} alt="UMS" />
            <ProjectTitle>User Management System</ProjectTitle>
            <ProjectDesc>Secure role-based system with efficient CRUD operations.</ProjectDesc>
            <TechStack>React, Redux, Node.js, Express.js, MongoDB, Tailwind CSS</TechStack>
            <Link href="https://github.com/NavyendhuMenon/User-Management-System---Express.js" target="_blank" rel="noopener noreferrer">Source Code</Link>
          </ProjectCard>
        </ProjectGrid>
      </ProjectsSection>
    </ProjectContainer>
  );
}

export default Projects;