import { EmailAddressID } from '../../../constants';

export const EmailAddressDisplay = () => {
  return (
    <span className='text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200 block mt-2'>
      {EmailAddressID} <span className='text-emerald-500'>[at]</span> gmail{' '}
      <span className='text-emerald-500'>[dot]</span> com
    </span>
  );
};
