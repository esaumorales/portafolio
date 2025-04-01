import { CustomIcon } from '@Assets/icons/icon';
import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';

import { Link } from 'react-router-dom';
import Button from '@Components/Button';

export default function Header() {
  return (
    <header className='mt-8 ml-32 mr-32 | md:ml-16 md:mr-16 | sm:ml-16 sm:mr-16 |'>
      <div>
        <span className='absolute block w-[1px] h-38 mt-[-32px] bg-gray-500 dark:bg-primary'></span>
        <div className='absolute mt-32 ml-[-12px]'>
          <a
            href='https://github.com/esaumorales'
            target='_blank'
            rel='noopener noreferrer'>
            <GitHubIcon className='w-6 text-gray-500 dark:text-primary' />
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <LinkedInIcon className='w-6 text-gray-500 dark:text-primary' />
          </a>
        </div>
      </div>

      <div>
        <div className='ml-16 mr-16 w-auto h-1/2 flex justify-between items-center'>
          <div className='flex flex-row'>
            <CustomIcon className='w-8 dark:text-white text-gray-700' />
            <p className='text-gray-700 dark:text-primary self-center pointer-events-none'>
              Esau Morales
            </p>
          </div>

          <div className='flex flex-row gap-12 text-gray-700 dark:text-primary items-center'>
            <Link
              to='/home'
              className='hover:text-gray-400 dark:hover:text-white  before:content-["#"] before:text-secondary before:mr-0.5'>
              home
            </Link>

            <Link
              to='/works'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              works
            </Link>

            <Link
              to='/about-me'
              className='hover:text-gray-400 dark:hover:text-white  before:content-["#"] before:text-secondary before:mr-0.5'>
              about-me
            </Link>

            <Link
              to='/contacts'
              className='hover:text-gray-400 dark:hover:text-white  before:content-["#"] before:text-secondary before:mr-0.5'>
              contacts
            </Link>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
}
