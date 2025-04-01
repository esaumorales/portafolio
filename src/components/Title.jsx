export default function Title({ title }) {
  return (
    <div className='flex justify-between mb-8 md:mb-12 mt-8 md:mt-12 px-4 md:px-0'>
      <div className='flex items-center gap-2 md:gap-4'>
        <div className='flex flex-row before:content-["#"] before:text-secondary text-xl md:text-2xl'>
          <p className='text-gray-600 dark:text-primary'>{title}</p>
        </div>
        <div id='heroSection'>
          <span className='block w-32 md:w-120 h-[1.5px] bg-secondary'></span>
        </div>
      </div>
    </div>
  );
}