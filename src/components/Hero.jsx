import styled from 'styled-components';
// import profilePic from '../assets/profile-pic.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 3rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.body});

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  animation: slideIn 1s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ProfilePic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${({ theme }) => theme.accent};
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 800;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Hero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        {/* <ProfilePic src={profilePic} alt="Navyendhu Menon" /> */}
        <TextContent>
          <Title>Navyendhu Menon</Title>
          <Subtitle>MERN Stack Developer</Subtitle>
          <Tagline>Crafting scalable web solutions with creativity and precision</Tagline>
        </TextContent>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;