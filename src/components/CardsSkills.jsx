import data from '@Models/DataSkills.json';

export default function CardsSkills() {
  const limitedData = data.slice(0, 6);
  return (
    <div className='flex flex-wrap gap-4'>
      {limitedData.map((card, index) => (
        <div key={index} className='border border-gray-500 dark:border-primary w-44 min-h-28'>
          <div className='border border-gray-500 dark:border-primary p-1'>
            <p className='text-gray-400 dark:text-white'>{card.title}</p>
          </div>
          <div className='text-primary p-1 h-auto'>
            <div className='flex flex-wrap gap-2'>
              {card.languages.map((language) => (
                // <p className='px-1 bg-primary/10 rounded'>{languages}</p> PrimeraForma sin el map
                <p
                  key={`${card.title}-${language}`}
                  className='px-1 bg-primary/10 rounded'>
                  {language}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
