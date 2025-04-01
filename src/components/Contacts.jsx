import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';
export default function Contacts() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-primary w-120'>
          <p>
          Estoy empezando en el mundo de la Programacion. Si tienes alguna pregunta, no dudes en contactarme.

          </p>
        </div>
        <div>
          <div className='flex flex-col border border-primary p-2 gap-4'>
            <div>
              <p className='text-gray-600 dark:text-white'>Envia un mensaje.</p>
            </div>
            <div className='text-primary flex flex-col gap-2'>
              <div className='flex flex-row gap-2'>
                <GitHubIcon className='w-6' />
                <p>esaumorales</p>
              </div>
              <div className='flex flex-row gap-2'>
                <LinkedInIcon className='w-6' />
                <p>Jose Esau Morales Ramos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
