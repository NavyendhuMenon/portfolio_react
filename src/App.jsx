import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';
import Achievement from './components/Achievements';


const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.body};
  margin-left: 350px; // Matches sidebar width
  width: calc(100% - 350px); // Ensure it takes full remaining width
  border-left: 4px solid transparent;
  border-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M0 0 Q 5 10 10 0" fill="none" stroke="${({ theme }) => theme.accent}" stroke-width="2"/></svg>') 10 stretch;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
    border-left: none;
    border-top: 4px solid transparent;
    border-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M0 0 Q 5 10 10 0" fill="none" stroke="${({ theme }) => theme.accent}" stroke-width="2"/></svg>') 10 stretch;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Sidebar toggleTheme={toggleTheme} theme={theme} />
        <MainContent>
          <Hero />
          {/* <Technologies /> */}
          <Projects />
          <Achievement/>
          <Contact />
          <Footer />
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;