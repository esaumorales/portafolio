import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';

export default function Contacts() {
  return (
    <div className='px-4 md:px-0'>
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12'>
        <div className='text-primary w-full md:w-120'>
          <p className='text-sm md:text-base'>
            Estoy empezando en el mundo de la Programacion. Si tienes alguna pregunta, 
            no dudes en contactarme.
          </p>
        </div>
        
        <div className='w-full md:w-auto'>
          <div className='flex flex-col border border-primary p-4 md:p-2 gap-4'>
            <div>
              <p className='text-gray-600 dark:text-white text-base md:text-lg'>
                Envia un mensaje.
              </p>
            </div>
            <div className='text-primary flex flex-col gap-4 md:gap-2'>
              <a 
                href="https://github.com/esaumorales" 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex flex-row gap-2 items-center hover:opacity-80 transition-opacity'
              >
                <GitHubIcon className='w-5 md:w-6' />
                <p className='text-sm md:text-base'>esaumorales</p>
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='flex flex-row gap-2 items-center hover:opacity-80 transition-opacity'
              >
                <LinkedInIcon className='w-5 md:w-6' />
                <p className='text-sm md:text-base'>Jose Esau Morales Ramos</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}