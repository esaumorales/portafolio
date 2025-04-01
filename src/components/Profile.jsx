import fotoExample from '@Assets/img/example.png';
import { QuoteIcon } from '@Assets/icons/icon-quote.jsx';
export default function Profile() {
  return (
    <main className='mt-10 pt-8 overflow-hidden px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-0'>
        {/* Left Content */}
        <div className='flex flex-col gap-4 justify-center md:w-[600px]'>
          <div>
            <p className='text-gray-700 dark:text-white text-xl md:text-2xl whitespace-normal md:whitespace-nowrap'>
              Estudiante de la Carrera de Ingenieria de Sistemas
            </p>
            <p className='text-secondary text-xl md:text-2xl'>Desarrollador Front-end</p>
          </div>
          <div>
            <p className='text-sm w-full md:w-160 text-primary'>
              Este es mi portafolio virtual, donde podrás explorar mis proyectos
              y habilidades.
            </p>
          </div>
          <a href='/'>
            <button className='bg-transparent border border-secondary w-32 h-8'>
              <p className='text-gray-700 dark:text-white text-sm'>Contactame !</p>
            </button>
          </a>
        </div>

        {/* Right Content */}
        <div className='flex flex-col items-center md:mr-12 flex-shrink-0'>
          <div>
            <img
              src={fotoExample}
              alt='Imagen'
              className='w-40 md:w-52 !blur-3xl !grayscale !scale-x-[-1]'
            />
          </div>
          <div className='mt-2 w-full md:w-108 h-8 border flex flex-row items-center justify-center gap-2'>
            <span className='block w-4 h-4 bg-secondary'></span>
            <p className='dark:text-white text-gray-700'>¿Quieres ver mi CV?</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className='mt-12 flex justify-center px-4'>
        <div className='w-8 h-8 absolute md:mr-84 mt-[-12px] flex justify-center bg-white dark:bg-background'>
          <QuoteIcon className='w-6 text-gray-700 dark:text-primary' />
        </div>
        <div className='flex flex-col items-end'>
          <p className='text-base md:text-lg text-gray-700 dark:text-white border border-primary w-full md:w-96 h-16 flex items-center justify-center px-4'>
            Cada paso te acerca a tu objetivo.
          </p>
          <div>
            <div className='w-8 h-8 absolute md:ml-32 mt-[-12px] flex justify-center bg-white dark:bg-background'>
              <QuoteIcon className='w-6 dark:text-primary text-gray-700' />
            </div>
            <p className='text-base md:text-lg text-gray-700 dark:text-white border border-primary w-full md:w-42 h-16 flex items-center justify-center px-4'>
              - Esau Morales
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}