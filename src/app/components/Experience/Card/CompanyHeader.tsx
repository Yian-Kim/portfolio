interface CompanyHeaderProps {
  company: string;
  url: string;
  period: string;
  position: string;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({
  company,
  url,
  period,
  position,
}) => (
  <div className='flex flex-wrap justify-between items-start gap-2 mb-1'>
    <div>
      <div className='flex items-center gap-2'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg font-semibold text-neutral-800 dark:text-neutral-100 hover:text-teal-500 dark:hover:text-teal-500 transition-colors'
        >
          {company}
        </a>
        <span className='text-sm text-neutral-600 dark:text-neutral-400'>
          {period}
        </span>
      </div>
      <span className='inline-block mt-2 px-3 py-1 text-sm rounded-full bg-teal-500/20 text-teal-500 dark:bg-teal-500/10'>
        {position}
      </span>
    </div>
  </div>
);
