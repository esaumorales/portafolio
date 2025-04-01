import { CustomIcon } from '@Assets/icons/icon';
import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';

export default function Footer() {
  return (
    <footer>
      <hr className='mb-8 text-primary' />
      <div className='ml-32 mr-32 h-24'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
              <CustomIcon className='w-8 text-gray-700 dark:text-white' />
              <div className='flex flex-row gap-4'>
                <p className='text-gray-700 dark:text-white'>Esau Morales</p>
                <p className='text-gray-500 dark:text-primary'>jose.morales@upeu.edu.pe</p>
              </div>
            </div>
            <div>
              <p className='text-gray-500 dark:text-primary ml-2'>Desarrollador Web</p>
            </div>
          </div>
          <div className='mr-12'>
            <div className=''>
              <p className='text-gray-700 dark:text-white'>Media</p>
            </div>
            <div className='flex flex-row gap-4'>
              <a href='/'>
                <GitHubIcon className='w-8  text-gray-500 dark:text-primary' />
              </a>
              <a href='/'>
                <LinkedInIcon className='w-8 text-gray-500 dark:text-primary' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-gray-600 dark:text-primary'>©Copyright 2025. Hecho por Esau</p>
        </div>
      </div>
    </footer>
  );
}
