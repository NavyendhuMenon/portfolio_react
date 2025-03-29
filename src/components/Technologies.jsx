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
  padding: 4rem 3rem;
  width: 100%;
  max-width: none;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
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

const TechIcon = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
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

function Technologies() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
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
   
      <CarouselContainer>
        <h1>Tech Skills</h1>
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index}>
              <TechIcon>{tech.icon}</TechIcon>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </TechSection>
  );
}

export default Technologies;
