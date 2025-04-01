import data from '@Models/FunFacts.json';

export default function FunFacts() {
  // Aseguramos que data y data.funfacts existan
  return (
    <div className=''>
      {data?.length ? (
        <ul className='flex flex-wrap gap-4' >
          {data.map(({ funfacts }, index) => (
            <li key={index} className='border border-primary w-fit h-fit p-2 text-primary'>
              {funfacts}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-white'>No se encontraron datos.</p>
      )}
    </div>
  );
}
