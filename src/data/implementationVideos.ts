/** `public/images/video/` 아래 mp4 파일명과 일치시키세요. */
function publicVideo(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const IMPLEMENTATION_VIDEOS = {
  aiLegalConsultation: publicVideo('/images/video/ai-legal-consultation.mp4'),
  aiToConsultationBoard: publicVideo('/images/video/ai-to-consultation-board.mp4'),
  consultationBoardCrud: publicVideo('/images/video/consultation-board-crud.mp4'),
} as const

export const FULL_DEMO_YOUTUBE_ID = 'Gf6rH7uUiC8'
