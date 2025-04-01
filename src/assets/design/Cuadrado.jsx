const Cuadrado = ({ size = 50, color = 'gray', className }) => {
  return (
    <div
      className={`border ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color, // Color dinámico sin `twMerge`
      }}></div>
  );
};

export default Cuadrado;
