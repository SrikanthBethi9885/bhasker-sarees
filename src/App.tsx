import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomeContent from './HomeContent/HomeContent';
import Footer from './Footer/Footer';
import AboutContent from './AboutContent/AboutContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  flex: 1;
`;

const Header = styled.header`
  background-color: #008080;
  height: 50px;
  color: white;
  padding:10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 15px;
`;

const Logo = styled.text`
`;

const Main = styled.main`
  padding: 20px 0;
`;
//const AboutContent = () => <p>This is the About page content.</p>;
const ServicesContent = () => <p>This is the Services page content.</p>;
const ContactContent = () => <p>This is the Contact page content.</p>;
const App = () => {
  return (
    <Container>
      <Router>
        <FormContainer>
          <Header>
            <NavLink to="/" ><Logo style={{ width: '200px', height: '50px' }}>Bhasker Sarees</Logo></NavLink>
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>

            </div>
          </Header>
          <Wrapper>
            <Main>
              <Routes>
                <Route path="/about" element={<AboutContent />} />
                <Route path="/services" element={<ServicesContent />} />
                <Route path="/contact" element={<ContactContent />} />
                <Route path="/" element={<HomeContent />} />
              </Routes>
            </Main>
          </Wrapper>
          <Footer />
        </FormContainer>
      </Router>
    </Container>
  );
};

export default App;
