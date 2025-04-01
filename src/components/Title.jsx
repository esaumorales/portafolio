export default function Title({ title }) {
  return (
    <div className=' flex justify-between mb-12 mt-12'>
      <div className='flex items-center gap-4'>
        <div className=' flex flex-row before:content-["#"] before:text-secondary text-2xl'>
          <p className='text-gray-600 dark:text-primary'>{title}</p>
        </div>
        <div id='heroSection'>
          <span className='block w-120 h-[1.5px] bg-secondary  '></span>
        </div>
      </div>
    </div>
  );
}
