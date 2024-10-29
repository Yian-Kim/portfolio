export interface AchievementType {
  name: string;
  details: string[];
}

export interface ExperienceType {
  company: string;
  period: string;
  position: string;
  description: string;
  logo: string;
  url: string;
  techStack: string | string[];
  achievements: AchievementType | AchievementType[];
}
