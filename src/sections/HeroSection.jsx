import Profile from '@Components/Profile';
import Projects from '@Components/Projects';
import Skills from '@Components/Skills';
import AboutMe from '@Components/About-me';
import Contacts from '@Components/Contacts';
import Title from '@Components/Title';

export default function HeroSection() {
  return (
    <>
      <div>
        <Profile />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Title title='Habilidades' />
        <Skills />
      </div>
      <div>
        <Title title='Sobre mi' />
        <AboutMe />
      </div>
      <div>
        <Title title='Contactame' />
        <Contacts />
      </div>
    </>
  );
}
