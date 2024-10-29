import { AchievementType } from '../experience.d';
import { AchievementDetails } from './AchievementDetails';

interface AchievementProps {
  achievement: AchievementType;
}

export const Achievement: React.FC<AchievementProps> = ({ achievement }) => (
  <div className='pl-4 border-l-2 border-neutral-300 dark:border-neutral-700'>
    <h4 className='font-semibold mb-2 text-sm text-neutral-800 dark:text-neutral-200'>
      {achievement.name}
    </h4>
    <div className='mt-2'>
      {achievement.details && achievement.details.length > 0 && (
        <AchievementDetails details={achievement.details} />
      )}
    </div>
  </div>
);
