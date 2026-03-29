function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const MANAGEMENT_IMAGES = {
  meetingNotes: publicImage('/images/management/meeting-notes.png'),
  feedbackRevisions: publicImage('/images/management/feedback-revisions.png'),
} as const
