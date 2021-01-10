import './styles/index.css'

import Landing from './pages/Landing'
import ProfileSection from './section/Profile'
import Lesson from './section/Lesson'
import EventSection from './section/Event'
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
  )
}

export default App;
