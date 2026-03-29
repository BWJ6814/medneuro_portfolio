/** `public/images/발표자료이미지/` */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const DESIGN_IMAGES = {
  screenUpload: publicImage('/images/발표자료이미지/화면설계서.png'),
  screen2d: publicImage('/images/발표자료이미지/화면설계서-2d.png'),
  erd: publicImage('/images/발표자료이미지/ERD.png'),
} as const
