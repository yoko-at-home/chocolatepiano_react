import './styles/index.css'

import HeaderSection from './section/Header';
import ProfileSection from './section/Profile'
import Lesson from './section/Lesson'
import EventSection from './section/Event/index';
import FooterSection from './section/Footer'

function App() {
  return (
    <>
      <HeaderSection />
      <ProfileSection />
      <Lesson />
      <EventSection />
      <FooterSection />
    </>
  );
}

export default App;
