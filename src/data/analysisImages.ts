/** `public/images/발표자료이미지/` */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const ANALYSIS_IMAGES = {
  serviceFlow: publicImage('/images/발표자료이미지/이용흐름도.png'),
  useCase: publicImage('/images/발표자료이미지/유스케이스다이어그램.png'),
  requirements: publicImage('/images/발표자료이미지/요구사항정의서.png'),
} as const
