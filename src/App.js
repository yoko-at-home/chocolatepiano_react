import './styles/index.css'

import HorizontalScrollButtons from './components/HorizpntalScrollButtons';
import HeaderSection from './section/Header';
import ProfileSection from './section/Profile'
import Lesson from './section/Lesson'
import EventSection from './section/Event/index';
import FooterSection from './section/Footer'

function App() {
  return (
    <>
      <HorizontalScrollButtons />
      <HeaderSection />
      <ProfileSection />
      <Lesson />
      <EventSection />
      <FooterSection />
    </>
  );
}

export default App;
