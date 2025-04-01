import AboutMe from '@Components/About-me';
import TitlePage from '@Components/TitlePage';
import TitleSection from '@Components/TitleSection';
import CardsSkills from '@Components/CardsSkills';
import FunFacts from '@Components/FunFacts';
export default function AboutMeSection() {
  return (
    <div className='mt-12 mb-12'>
      <div>
        <TitlePage title='Sobre Mi' parraf='Quien soy yo?' />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <div>
          <TitleSection title='Habilidades' />
        </div>
        <div>
          <CardsSkills />
        </div>
      </div>
      <div>
        <div>
          <TitleSection title='Habilidades Blandas' />
        </div>
        <div className='flex justify-around gap-24'>
          <div className='w-280'>
            <FunFacts />
          </div>
          <div className='w-280'>Estilos</div>
        </div>
      </div>
    </div>
  );
}
