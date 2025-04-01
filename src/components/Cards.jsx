import data from '@Models/DataCards.json';
import localFallbackImage from '@Assets/img/error404.png';

export default function Cards() {
  return (
    <div className='flex flex-wrap gap-4'>
      {data.slice(0, 4).map((card) => (
        <Card key={card.nProject} card={card} />
      ))}
    </div>
  );
}

function Card({ card }) {
  const isWebsite =
    card.imgUrl.startsWith('http') &&
    !card.imgUrl.match(/\.(jpeg|jpg|png|gif|webp)$/);

  const previewImage = isWebsite
    ? `https://image.thum.io/get/width/400/https://${card.imgUrl.replace(
        'https://',
        ''
      )}`
    : card.imgUrl;

  return (
    <div
      key={card.nProject}
      className='max-w-[220px] max-h-[500px] border border-gray-500 dark:border-primary flex flex-col'>
      <div className='w-full h-32 border-y border-x-none border-gray-500 dark:border-primary'>
        <img
          src={previewImage}
          alt={card.nProject}
          className='w-full h-full object-cover'
          onError={(e) => {
            console.warn(
              `Error al cargar la imagen de ${card.imgUrl}, usando imagen local.`
            );
            e.target.src = localFallbackImage; // Usa la imagen de respaldo local
          }}
        />
      </div>
      <div className='border-y border-x-none border-gray-500 dark:border-primary text-primary text-sm p-2 overflow-y-auto max-h-[150px]'>
        <div className='flex flex-wrap gap-2'>
          {card.languages.map((language) => (
            <p
              key={`${card.nProject}-${language}`}
              className='px-1 py-1 bg-primary/10 rounded'>
              {language}
            </p>
          ))}
        </div>
      </div>
      <div className='flex flex-col flex-grow'>
        <div className='p-2'>
          <h3 className='text-gray-500 dark:text-white text-xl truncate'>{card.nProject}</h3>
          <p className='text-primary text-sm break-words'>{card.description}</p>
        </div>
        <div className='flex gap-4 justify-center p-2'>
          <a href={card.buttonDemo} target='_blank' rel='noopener noreferrer'>
            <button className='border border-secondary hover:bg-secondary/10 px-1 text-gray-500 dark:text-white'>
              Live{' '}
              <span className='before:content-["<~>"] before:text-gray-500 dark:before:text-white'></span>
            </button>
          </a>
          <a href={card.buttonGit} target='_blank' rel='noopener noreferrer'>
            <button className='border border-primary hover:bg-secondary/10 px-1 text-primary'>
              Git{' '}
              <span className='before:content-[">="] before:text-primary'></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Componente principal que muestra las tarjetas
