import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaGitAlt, FaAws, FaDatabase, FaBootstrap 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const TechSection = styled.section`
  padding: 5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CarouselContainer = styled.div`
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev, .slick-next {
    color: ${({ theme }) => theme.accent};
    z-index: 1;
  }

  .slick-prev:before, .slick-next:before {
    color: ${({ theme }) => theme.accent};
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    .slick-prev:before, .slick-next:before {
      font-size: 1.5rem;
    }
  }
`;

const TechCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 120px;
    padding: 1rem;
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TechName = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const technologies = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'AWS', icon: <FaAws /> },
];

function Technologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <TechSection id="technologies">
      <Title>Technologies I Know</Title>
      <CarouselContainer>
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index}>
              <TechCard>
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechCard>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </TechSection>
  );
}

export default Technologies;