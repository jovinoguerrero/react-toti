import './App.css';
import NavBar from './components/nav';
import Banner from './components/Banner/banner';
import Experiences from './components/Experiences/experiences';
import Skills from './components/Skills/skills';
import Certificates from './components/Certificates/certificates';

export default function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Experiences></Experiences>
      <Skills></Skills>
      <Certificates></Certificates>
    </>
  );
}
