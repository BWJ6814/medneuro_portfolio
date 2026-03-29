/** `public/images/design/` — 발표자료에서 복사한 PNG 파일명과 일치 */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const DESIGN_IMAGES = {
  screenAiChat: publicImage('/images/design/screen-design-ai-chat.png'),
  screenLegalBoard: publicImage('/images/design/screen-design-legal-board.png'),
} as const
