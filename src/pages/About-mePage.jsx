import AboutMeSection from '@Section/About-meSection';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

export default function AboutMePage() {
  return (
    <div className='min-h-screen flex flex-col dark:bg-background bg-white-500 '>
      <Header />

      <main className='flex-1 mr-32 ml-32 mb-24 | max-sm:mr-16 max-sm:ml-16 |  max-md:mr-16 max-md:ml-16 | max-lg:mr-16 max-lg:ml-16 |  max-xl:ml-16 max-xl:mr-16  '>
        <AboutMeSection />
      </main>

      <Footer className='mt-auto' />
    </div>
  );
}
