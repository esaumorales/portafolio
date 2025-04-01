import CardsSkills from '@Components/CardsSkills';
import Title from '@Components/Title';
import PatronPuntos from '../assets/design/PatronPuntos';
import Cuadrado from '../assets/design/Cuadrado';
import CuadradosSuperpuestos from '../assets/design/CuadradosSuperpuestos';

export default function Skills() {
  return (
    <div>
      <div>
      </div>
      <div className='flex flex-row justify-around'>
        <div className=''>
          {/* <PatronPuntos
            size={6}
            color='gray'
            className='absolute top-300 left-48'
          />
          <PatronPuntos
            size={6}
            color='gray'
            className=' absolute top-320 left-84'
          />

          <Cuadrado
            size={80}
            color='gray'
            className=' absolute top-294 left-112'
          />
          <Cuadrado
            size={56}
            color='gray'
            className=' absolute top-322 left-124'
          />
          <CuadradosSuperpuestos
            size={50}
            color='#C778DD'
            className='absolute top-320 left-54'
          /> */}
        </div>
        <div className='flex  justify-end max-w-160'>
          <CardsSkills />
        </div>
      </div>
    </div>
  );
}
