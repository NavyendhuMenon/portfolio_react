import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.body};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.accent};
  font-size: 1.6rem;
  margin-bottom: 1rem;

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
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Real-time Chat App</ProjectTitle>
          <ProjectDesc>Building a real-time chat app with instant messaging features.</ProjectDesc>
          <TechStack>React, Socket.io, Node.js, Redux-Toolkit, MongoDB, JWT</TechStack>
          <Link href="https://github.com/navyendhu" target="_blank">Source Code</Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Eatables E-commerce</ProjectTitle>
          <ProjectDesc>Fully functional e-commerce platform with admin features.</ProjectDesc>
          <TechStack>MongoDB, Node.js, Express.js, EJS, JWT, AWS EC2, Razorpay</TechStack>
          <Link href="https://github.com/navyendhu" target="_blank">Source Code</Link>
          <Link href="https://eatables.shop" target="_blank">Live</Link>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>User Management System</ProjectTitle>
          <ProjectDesc>Secure role-based system with efficient CRUD operations.</ProjectDesc>
          <TechStack>React, Redux, Node.js, Express.js, MongoDB, Tailwind CSS</TechStack>
          <Link href="https://github.com/navyendhu" target="_blank">Source Code</Link>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;