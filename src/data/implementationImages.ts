function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const IMPLEMENTATION_IMAGES = {
  coreTech: publicImage('/images/implementation/core-tech.png'),
} as const
