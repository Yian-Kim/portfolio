import { ExperienceType } from '../experience.d';
import { CompanyLogo } from './CompanyLogo';
import { CompanyHeader } from './CompanyHeader';
import { Achievement } from './Achievement';

interface ExperienceCardProps {
  experience: ExperienceType;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const achievements = Array.isArray(experience.achievements)
    ? experience.achievements
    : [experience.achievements];

  const techStacks = Array.isArray(experience.techStack)
    ? experience.techStack
    : [experience.techStack];

  return (
    <div className='flex gap-6 p-6 rounded-lg transition-colors bg-white dark:bg-neutral-800 shadow-lg'>
      <CompanyLogo src={experience.logo} alt={experience.company} />
      <div className='flex-grow'>
        <CompanyHeader
          company={experience.company}
          url={experience.url}
          period={experience.period}
          position={experience.position}
        />
        <p className='mb-4 mt-4 text-neutral-600 dark:text-neutral-400'>
          {experience.description}
        </p>
        <div className='flex flex-wrap gap-1 mb-4'>
          {techStacks.map((tech, techIndex) => (
            <span
              key={techIndex}
              className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
            >
              {tech}
            </span>
          ))}
        </div>
        {achievements.length > 0 && (
          <div className='space-y-4'>
            {achievements.map((achievement, idx) => (
              <Achievement key={idx} achievement={achievement} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
