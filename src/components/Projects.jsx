import Title from './Title';
import Cards from './Cards';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      {/* TITLE */}
      <div className='flex flex-row items-center justify-between'>
        <div>
          <Title title='Proyectos' />
        </div>
        <div>
          <div className='flex flex-row'>
            <Link to='/works' className='flex flex-row gap-2 '>
              <p className='underline text-white'>Ver mas</p>
              <span className='before:content-["~~>"] before:text-white'></span>
            </Link>
          </div>
        </div>
      </div>
      {/* CARDS */}
      <div className='gap-4 grid grid-row-4 max-w-max'>
        <Cards />
      </div>
    </div>
  );
}
