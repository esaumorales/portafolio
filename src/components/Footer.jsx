import { CustomIcon } from '@Assets/icons/icon';
import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';

export default function Footer() {
  return (
    <footer className='px-4 md:px-0'>
      <hr className='mb-8 text-primary' />
      <div className='mx-4 md:mx-32 h-auto md:h-24'>
        <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-0'>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4'>
              <CustomIcon className='w-8 text-gray-700 dark:text-white' />
              <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                <p className='text-gray-700 dark:text-white'>Esau Morales</p>
                <p className='text-gray-500 dark:text-primary text-sm md:text-base'>
                  jose.morales@upeu.edu.pe
                </p>
              </div>
            </div>
            <div>
              <p className='text-gray-500 dark:text-primary ml-0 md:ml-2 mt-2 md:mt-0'>
                Desarrollador Web
              </p>
            </div>
          </div>

          <div className='md:mr-12'>
            <div>
              <p className='text-gray-700 dark:text-white mb-2'>Media</p>
            </div>
            <div className='flex flex-row gap-4'>
              <a href='/' className='hover:opacity-80 transition-opacity'>
                <GitHubIcon className='w-6 md:w-8 text-gray-500 dark:text-primary' />
              </a>
              <a href='/' className='hover:opacity-80 transition-opacity'>
                <LinkedInIcon className='w-6 md:w-8 text-gray-500 dark:text-primary' />
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-6 md:mt-0 pb-4 md:pb-0'>
          <p className='text-gray-600 dark:text-primary text-sm md:text-base text-center'>
            ©Copyright 2025. Hecho por Esau
          </p>
        </div>
      </div>
    </footer>
  );
}