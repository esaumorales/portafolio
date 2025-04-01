export default function TitlePage({ title, parraf }) {
  return (
    <div className='mb-12 flex flex-col gap-2'>
      <h1 className='text-gray-700 dark:text-white text-2xl before:content-["/"] before:text-secondary'>
        {title}
      </h1>
      <p className='text-gray-600 dark:text-white text-[12px]'>{parraf}</p>
    </div>
  );
}
