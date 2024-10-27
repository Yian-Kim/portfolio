import config from './config.json';

export const Author = config.author;

export const SocialMedia = {
    GITHUB_URL: `https://github.com/${config.socialMedia.GITHUB_USER}`,
    LINKEDIN_URL:`https://www.linkedin.com/in/${config.socialMedia.LINKEDIN_USER}`,
    TISTORY_URL: `https://${config.socialMedia.TISTORY_USER}.tistory.com`,
    DEV_COMMUNITY_URL: `https://dev.to/${config.socialMedia.DEV_COMMUNITY_USER}`,
    THREADS_URL: `https://www.threads.net/${config.socialMedia.THREADS_USER}`,
    TWITTER_URL: `https://x.com/${config.socialMedia.TWITTER_USER}`
}

/**
 * Project 정보를 생성하는 함수
 * 
 * @param project 
 * @returns 
 */
const createProjectEntry = (project: { name: string, description: string, image: string, github: string; link: string }) => ({
    name: project.name,
    description: project.description,
    image: project.image,
    github: project.github,
    link: project.link,
});

/**
 * 프로젝트 정보를 매핑하여 객체 생성
 */
export const Project = config.project.reduce((projectMap, project, index) => {
    const key = String(index + 1).padStart(2, '0'); // '01', '02'와 같은 형식
    projectMap[key] = createProjectEntry(project); // 프로젝트 정보 추가
    return projectMap; // 누적된 결과 반환
}, {} as Record<string, { name: string, description: string, image: string, github: string; link: string }>);
