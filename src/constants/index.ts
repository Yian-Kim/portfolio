import config from '../config/config.json';
import type { ExperienceType } from '../app/components/Experience/experience.d';

export const Author = config.author;

export const SocialMedia = {
  GITHUB_URL: `https://github.com/${config.socialMedia.GITHUB_USER}`,
  LINKEDIN_URL: `https://www.linkedin.com/in/${config.socialMedia.LINKEDIN_USER}`,
  TISTORY_URL: `https://${config.socialMedia.TISTORY_USER}.tistory.com`,
  DEV_COMMUNITY_URL: `https://dev.to/${config.socialMedia.DEV_COMMUNITY_USER}`,
  THREADS_URL: `https://www.threads.net/${config.socialMedia.THREADS_USER}`,
  TWITTER_URL: `https://x.com/${config.socialMedia.TWITTER_USER}`,
};

/**
 * Function that generate Project information
 */
const createProjectEntry = (project: {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
}) => ({
  name: project.name,
  description: project.description,
  image: project.image,
  github: project.github,
  link: project.link,
});

/**
 * Function that generate Experience inportmation
 */
const createExperienceEntry = (experience: ExperienceType): ExperienceType => ({
  company: experience.company,
  period: experience.period,
  position: experience.position,
  description: experience.description,
  logo: experience.logo,
  url: experience.url,
  techStack: experience.techStack,
  achievements: experience.achievements,
});

/**
 * Mapping with JSON to create Project information objects
 */
export const Project = config.projects.reduce(
  (projectMap, project, index) => {
    const key = String(index + 1).padStart(2, '0');
    projectMap[key] = createProjectEntry(project);
    return projectMap;
  },
  {} as Record<
    string,
    {
      name: string;
      description: string;
      image: string;
      github: string;
      link: string;
    }
  >
);

/**
 * Mapping with JSON to create Experience information objects
 */
export const Experience = config.experiences.reduce<
  Record<string, ExperienceType>
>((expMap, experience: ExperienceType, index) => {
  const key = String(index + 1).padStart(2, '0');
  expMap[key] = createExperienceEntry(experience);
  return expMap;
}, {});
