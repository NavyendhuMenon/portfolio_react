import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

import dp from "../assets/portfolio_dp.jpg";

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
    min-width: unset;
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

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
  text-align: center; /* Ensuring text is left-aligned */
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    font-size: 2.5rem; /* Increased size */
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.accen};
  }
`;

const AboutContent = styled.div`
  flex: 1;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    line-height: 1.6; // Increased line height
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.8; // Adjusted for more spacing between lines
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
  text-align: left;
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

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const TechIconContainer = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Added flex direction column for stacking the name and icon */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TechIconName = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const technologies = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
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
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <HeroContainer>
      <ContentWrapper>
        <AboutContent>
          <Title>About Me</Title>
          <p>
            Hi, my name is Navyendhu Menon. Over the past year, I have been
            actively developing and implementing features using the MERN stack,
            focusing on building scalable and efficient web applications. My
            work involves designing user-friendly interfaces, optimizing backend
            performance, and ensuring seamless integration between frontend and
            backend systems. I am committed to delivering solutions that align
            with project requirements while continuously enhancing my skills in
            modern web technologies
          </p>
          <p>
            <strong>Phone:</strong> +91 8921466823
          </p>
          <p>
            <strong>Email:</strong> navyendhummenon@gmail.com
          </p>
          <p>
            <strong>Languages:</strong> English, Malayalam, Tamil
          </p>
          <p>
            <strong>Soft Skills:</strong> Communication, Flexibility,
            Leadership, Teamwork, Problem-Solving
          </p>
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
          </SocialLinks>{" "}
        </AboutContent>
        <ProfileImage src={dp} alt="Navyendhu Menon" />
      </ContentWrapper>
      <TechSection>
        <TechSkills>Tech Skills</TechSkills>
        <CarouselContainer>
          <Slider {...settings}>
            {technologies.map((tech, index) => (
              <div key={index}>
                <TechIconContainer>
                  {tech.icon}
                  <TechIconName>{tech.name}</TechIconName>
                </TechIconContainer>
              </div>
            ))}
          </Slider>
        </CarouselContainer>
      </TechSection>
    </HeroContainer>
  );
}

export default Hero;
