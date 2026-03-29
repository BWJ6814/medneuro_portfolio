/** `public/images/analysis/` — 발표자료에서 복사한 PNG 파일명과 일치 */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const ANALYSIS_IMAGES = {
  userFlowGuest: publicImage('/images/analysis/user-flow-guest.png'),
  userFlowLawyer: publicImage('/images/analysis/user-flow-lawyer.png'),
  permissionsOverview: publicImage('/images/analysis/permissions-overview.png'),
  requirementsAiChat: publicImage('/images/analysis/requirements-ai-chat.png'),
  requirementsLegalBoard1: publicImage(
    '/images/analysis/requirements-legal-board-1.png',
  ),
  requirementsLegalBoard2: publicImage(
    '/images/analysis/requirements-legal-board-2.png',
  ),
} as const
