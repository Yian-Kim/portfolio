interface AchievementDetailsProps {
  details: string[];
}

export const AchievementDetails: React.FC<AchievementDetailsProps> = ({
  details,
}) => (
  <div className='mt-2'>
    <ul className='list-disc pl-5 space-y-1'>
      {details.map((detail, index) => (
        <li
          key={index}
          className='text-sm text-neutral-600 dark:text-neutral-400 pl-1'
        >
          {detail}
        </li>
      ))}
    </ul>
  </div>
);
