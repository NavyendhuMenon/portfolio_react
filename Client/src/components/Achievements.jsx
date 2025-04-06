import styled from 'styled-components';
import { FaTrophy, FaChalkboardTeacher, FaCogs } from 'react-icons/fa';

const AchievementContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 3rem;
  width: calc(100% - 250px);
  margin-left: 200px;
  margin-top: 50px;
  border-radius: 15px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0 5px 20px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  font-family: "IBM Plex Mono", monospace;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AchievementItem = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};
  text-align: center;
  font-weight: 500;
  flex: 1;
  min-width: 280px;
  max-width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

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
    background: ${({ theme }) => theme.accent}33; /* Light accent overlay */
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: auto;
  }
`;


const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px; /* Space between icon and text */
`;

function Achievement() {
  return (
    <AchievementContainer>
      <Title>Achievements</Title>
      <AchievementList>
        <Row>
          <AchievementItem>
            <IconWrapper><FaCogs /></IconWrapper>
            <span>Mastered problem-solving with 330+ LeetCode challenges, earning milestone badges for 50, 100, and 200 days of consistent coding.</span>
          </AchievementItem>
          <AchievementItem>
            <IconWrapper><FaTrophy /></IconWrapper>
            <span>Led as Event Chairman for Mercatura, a prestigious inter-college management fest, successfully coordinating and executing key events.</span>
          </AchievementItem>
          <AchievementItem>
            <IconWrapper><FaChalkboardTeacher /></IconWrapper>
            <span>Trained 100+ students to improve their English communication skills and boost their confidence in presentations and public speaking.</span>
          </AchievementItem>
        </Row>
      </AchievementList>
    </AchievementContainer>
  );
}

export default Achievement;
