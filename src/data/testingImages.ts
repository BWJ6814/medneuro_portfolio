function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const TESTING_IMAGES = {
  unitOverview: publicImage('/images/testing/unit-test-overview.png'),
  unitTable: publicImage('/images/testing/unit-test-table.png'),
  integrationOverview: publicImage('/images/testing/integration-test-overview.png'),
  integrationTable5: publicImage('/images/testing/integration-test-table-5.png'),
  integrationTable6: publicImage('/images/testing/integration-test-table-6.png'),
} as const
