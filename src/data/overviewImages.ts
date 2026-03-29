/** `public/images/발표자료이미지/` — 파일명·확장자 일치 필요 */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const OVERVIEW_IMAGES = {
  projectBackground: publicImage('/images/발표자료이미지/프로젝트배경.png'),
  projectGoals: publicImage('/images/발표자료이미지/프로젝트목표.png'),
  architecture: publicImage('/images/발표자료이미지/시스템아키텍쳐.png'),
  teamRoles: publicImage('/images/발표자료이미지/팀원및역할.png'),
  scheduleTeam: publicImage('/images/발표자료이미지/프로젝트일정.png'),
  schedulePersonal: publicImage('/images/발표자료이미지/개인일정.png'),
} as const
