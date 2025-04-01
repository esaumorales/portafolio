import TitlePage from '@Components/TitlePage';
import Contacts from '@Components/Contacts';
import TitleSection from '@Components/TitleSection';
import { GitHubIcon } from '@Assets/icons/icon-github';
import { LinkedInIcon } from '@Assets/icons/icon-linkedink';
export default function ContactsSection() {
  return (
    <div className='mt-12 mb-12'>
      <div>
        <TitlePage title='Contactame' parraf='Como contactarme?' />
      </div>
      <div>
        <Contacts />
      </div>
      <div>
        <div>
          <TitleSection title='Todas mis redes Sociales' />
        </div>
        <div className='flex flex-wrap text-primary gap-2 items-center'>
          <GitHubIcon className='w-10' /> esaumorales
          <LinkedInIcon className='w-10' />Jose Esau Morales Ramos
        </div>
      </div>
    </div>
  );
}
