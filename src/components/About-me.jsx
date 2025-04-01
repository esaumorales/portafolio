import fotoExample from '@Assets/img/example.png';

export default function AboutMe() {
  return (
    <div className='px-4 md:px-0'>
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12'>
        <div className='flex flex-col w-full md:w-160 text-primary gap-4'>
          <p>
            !Hola, soy <b className='text-secondary'>Esau!</b>
          </p>
          <p className='text-sm md:text-base'>
            Soy un estudiante de desarrollo frontend, actualmente en la
            Universidad Peruana Union, Perú. Aunque todavía estoy en mis
            primeros pasos, me apasiona crear sitios web responsivos y sencillos
            de usar.
          </p>
          <p className='text-sm md:text-base'>
            Desde que empecé a aprender programación, me gusta ver mis ideas en
            sitios web. Aunque no tengo mucha experiencia, disfruto trabajando
            en proyectos personales y ayudando a conocidos a estar en línea.
          </p>
          <div>
            <button className='border border-secondary p-[4px] hover:bg-secondary/10 transition-colors'>
              Leer Mas...
            </button>
          </div>
        </div>
        <div className='w-full md:w-140 flex justify-center'>
          <img
            src={fotoExample}
            alt='Foto'
            className='w-40 md:w-52 !blur-3xl !grayscale !scale-x-[-1]'
          />
        </div>
      </div>
    </div>
  );
}