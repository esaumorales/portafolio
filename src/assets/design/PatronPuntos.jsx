const PatronPuntos = ({ size = 5, color = 'gray', className }) => {
  return (
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className='rounded-full'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color, // Color dinámico sin `twMerge`
          }}></div>
      ))}
    </div>
  );
};

export default PatronPuntos;
