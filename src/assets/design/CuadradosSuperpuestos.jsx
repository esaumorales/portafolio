const CuadradosSuperpuestos = ({ size = 50, color = '#a855f7', className }) => {
  return (
    <svg className={`absolute ${className}`} width={size * 2} height={size * 2}>
      <rect
        x='10'
        y='10'
        width={size}
        height={size}
        stroke={color}
        strokeWidth='2'
        fill='none'
      />
      <rect
        x='30'
        y='30'
        width={size}
        height={size}
        stroke={color}
        strokeWidth='2'
        fill='none'
      />
    </svg>
  );
};

export default CuadradosSuperpuestos;
