function publicVideo(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

/** `public/video/medneuro시연.mp4` */
export const MEDNEURO_DEMO_VIDEO = publicVideo('/video/medneuro시연.mp4')
