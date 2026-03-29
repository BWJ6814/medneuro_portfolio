/**
 * 이미지는 저장소의 `public/images/overview/` 에 두세요. (빌드 시 그대로 복사됨)
 * 아래 이름·확장자와 정확히 같아야 합니다. (리눅스 서버는 대소문자 구분)
 *
 * 모두 PNG 권장. (SVG만 있으면 확장자를 맞추고 overviewImages에서 .svg로 바꾸면 됨)
 */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const OVERVIEW_IMAGES = {
  projectBackground: publicImage('/images/overview/project-background.png'),
  architecture: publicImage('/images/overview/system-architecture.png'),
  network: publicImage('/images/overview/network-diagram.png'),
  scheduleTeam1: publicImage('/images/overview/schedule-team-1.png'),
  scheduleTeam2: publicImage('/images/overview/schedule-team-2.png'),
  schedulePersonal1: publicImage('/images/overview/schedule-personal-1.png'),
  schedulePersonal2: publicImage('/images/overview/schedule-personal-2.png'),
} as const
