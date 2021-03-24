import './styles/index.css'

import HorizontalScrollButtons from './components/HorizpntalScrollButtons';
import HeaderSection from './section/Header';
import ProfileSection from './section/Profile'
import Lesson from './section/Lesson'
import Access from './section/Access/';
import EventSection from './section/Event/index';
import FooterSection from './section/Footer'
// import Contact from './section/Contact'
import TrialLesson from './components/TrialLesson';

function App() {
  return (
    <>
      <HorizontalScrollButtons />
      <HeaderSection />
      <ProfileSection />
      <Lesson />
      <Access />
      <EventSection />
      {/* <Contact /> */}
      <TrialLesson />
      <FooterSection />
    </>
  );
}

export default App;
