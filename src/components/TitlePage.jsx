export default function TitlePage({ title, parraf }) {
  return (
    <div className='mb-8 md:mb-12 flex flex-col gap-2 px-4 md:px-0'>
      <h1 className='text-gray-700 dark:text-white text-xl md:text-2xl before:content-["/"] before:text-secondary'>
        {title}
      </h1>
      <p className='text-gray-600 dark:text-white text-[11px] md:text-[12px] max-w-full md:max-w-[80%]'>
        {parraf}
      </p>
    </div>
  );
}