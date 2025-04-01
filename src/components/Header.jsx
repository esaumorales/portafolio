import { useState } from 'react';
import { CustomIcon } from '@Assets/icons/icon';
import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';
import { Link } from 'react-router-dom';
import Button from '@Components/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='mt-8 px-8 md:ml-16 md:mr-16 relative'>
      {/* Social Media Bar */}
      <div className='hidden md:block'>
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
        <div className='w-auto flex justify-between items-center'>
          {/* Logo and Name */}
          <div className='flex flex-row items-center'>
            <CustomIcon className='w-8 dark:text-white text-gray-700' />
            <p className='text-gray-700 dark:text-primary self-center pointer-events-none'>
              Esau Morales
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-gray-700 dark:text-primary'>
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex flex-row gap-12 text-gray-700 dark:text-primary items-center'>
            <Link
              to='/home'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              home
            </Link>
            <Link
              to='/works'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              works
            </Link>
            <Link
              to='/about-me'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              about-me
            </Link>
            <Link
              to='/contacts'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              contacts
            </Link>
            <Button />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute left-0 right-0 bg-white dark:bg-gray-800 mt-4 py-4 px-8 shadow-lg rounded-lg`}>
          <div className='flex flex-col gap-4 text-gray-700 dark:text-primary'>
            <Link
              to='/home'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              home
            </Link>
            <Link
              to='/works'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              works
            </Link>
            <Link
              to='/about-me'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              about-me
            </Link>
            <Link
              to='/contacts'
              className='hover:text-gray-400 dark:hover:text-white before:content-["#"] before:text-secondary before:mr-0.5'>
              contacts
            </Link>
            <div className='py-2'>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}