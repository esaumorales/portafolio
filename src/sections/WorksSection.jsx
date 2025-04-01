import TitlePage from '@Components/TitlePage';
import Cards from '@Components/Cards';
import SmallCards from '@Components/SmallCards';
import TitleSection from '@Components/TitleSection'

export default function WorksSection() {
  return (
    <div className='mt-12 mb-12'>
      <div>
        <TitlePage title='Proyectos' parraf='Lista de mis proyectos' />
      </div>
      <div className='mb-12 mt-12'>
        <TitleSection title='Proyectos' />
        <Cards />
      </div>
      <div className='mb-12 mt-12'>
        <TitleSection title='Proyectos pequeños' />
        <SmallCards />
      </div>
    </div>
  );
}
