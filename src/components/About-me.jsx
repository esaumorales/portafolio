import fotoExample from '@Assets/img/example.png';

export default function AboutMe() {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-160 text-primary gap-4'>
          <p>
            !Hola, soy <b className='text-secondary'>Esau!</b>
          </p>
          <p>
            Soy un estudiante de desarrollo frontend, actualmente en la
            Universidad Peruana Union, Perú. Aunque todavía estoy en mis
            primeros pasos, me apasiona crear sitios web responsivos y sencillos
            de usar.
          </p>
          <p>
            Desde que empecé a aprender programación, me gusta ver mis ideas en
            sitios web. Aunque no tengo mucha experiencia, disfruto trabajando
            en proyectos personales y ayudando a conocidos a estar en línea.
          </p>
          <div>
            <button className='border border-secondary p-[4px]'>
              Leer Mas...
            </button>
          </div>
        </div>
        <div className='w-140 flex justify-center'>
          <img
            src={fotoExample}
            alt='Foto'
            className='w-52 !blur-3xl !grayscale !scale-x-[-1]'
          />
        </div>
      </div>
    </div>
  );
}
