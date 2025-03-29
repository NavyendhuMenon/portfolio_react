import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import {  
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,  
  FaGitAlt, FaAws, FaDatabase, FaBootstrap  
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';
import images from '../assets/alien.jpg';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
  width: calc(100% - 250px);
  margin-left: 200px;
  border-radius: 15px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 20px 20px 20px 20px 25px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s;
  }
  
  a:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;


const AboutContent = styled.div`
  flex: 1;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 1400px) {
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.secondary};

  @media (max-width: 1400px) {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;


const TechSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
`;

const TechSkills = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const CarouselContainer = styled.div`
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev, .slick-next {
    display: none !important;
  }
`;

const TechIcon = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const technologies = [
  { name: 'React', icon: <FaReact color="#61DBFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#38B2AC" /> },
  { name: 'Express', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { name: 'AWS', icon: <FaAws color="#FF9900" /> },
];

function Hero() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <HeroContainer>
      <ContentWrapper>
        <AboutContent>
          <h1>About Me</h1>
          <p>Hi, my name is Navyendhu Menon. I have dedicated the past year to developing and implementing features on the MERN stack, ensuring they are tailored to meet project needs.</p>
          <p><strong>Phone:</strong> +91 8921466823</p>
          <p><strong>Email:</strong> navyendhummenon@gmail.com</p>
          <SocialLinks>
            <a href="https://github.com/Faydevlop" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          </SocialLinks>          <p><strong>Languages:</strong> English, Hindi, Malayalam</p>
        </AboutContent>
        <ProfileImage src={images} alt="Fayis Nambiyath" />
      </ContentWrapper>
      <TechSection>
        <TechSkills>Tech Skills</TechSkills>
        <CarouselContainer>
          <Slider {...settings}>
            {technologies.map((tech, index) => (
              <div key={index}>
                <TechIcon>{tech.icon}</TechIcon>
              </div>
            ))}
          </Slider>
        </CarouselContainer>
      </TechSection>
    </HeroContainer>
  );
}

export default Hero;
