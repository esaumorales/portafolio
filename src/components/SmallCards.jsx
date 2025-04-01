import data from '@Models/SmallCards.json';

export default function SmallCards() {
  return (
    <div>
      {data.map((card, index) => (
        <div key={index} className='flex flex-col '>
          <div className='border border-primary w-52 h-auto p-1 flex flex-wrap gap-2'>
            {card.languages.map((language) => (
              <p
                key={`${card.title}-${language}`}
                className='text-primary text-[14px] bg-primary/10 rounded w-auto h-auto p-1'>
                {language}
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-2 border border-primary w-52 h-auto p-1'>
            <p className='text-[20px] text-gray-500 dark:text-white'>{card.title}</p>
            <p className='text-gray-500 dark:text-primary text-[16px]'>
              {card.descripcion}
            </p>
            <div className='flex justify-start'>
              <a
                href={card.buttonGit}
                target='_blank'
                rel='noopener noreferrer'>
                <button className='border border-secondary w-fit p-[1.5px] text-gray-500 dark:text-white'>
                  Github{' '}
                  <span className='before:content-["<~>"] before:text-gray-500 dark:before:text-white'></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
