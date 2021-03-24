import './styles/index.css'

import HorizontalScrollButtons from './components/HorizpntalScrollButtons';
import HeaderSection from './section/Header';
import ProfileSection from './section/Profile'
import Lesson from './section/Lesson'
import EventSection from './section/Event/index';
import FooterSection from './section/Footer'
import Contact from './section/Contact'

function App() {
  return (
    <>
      <HorizontalScrollButtons />
      <HeaderSection />
      <ProfileSection />
      <Lesson />
      <EventSection />
      <Contact />
      <FooterSection />
    </>
  );
}

export default App;
