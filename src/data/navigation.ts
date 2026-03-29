export type NavChild = { id: string; label: string }

export type NavCategory = {
  id: string
  label: string
  children: NavChild[]
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'overview',
    label: '개요',
    children: [
      { id: 'project-background', label: '프로젝트 배경' },
      { id: 'project-goals', label: '프로젝트 목표' },
      { id: 'architecture', label: '시스템 아키텍쳐' },
      { id: 'team-roles', label: '팀원 역할 분배' },
      { id: 'schedule', label: '프로젝트 스케쥴' },
    ],
  },
  {
    id: 'analysis',
    label: '분석',
    children: [
      { id: 'user-flow', label: '서비스 이용 흐름' },
      { id: 'use-case', label: '유스케이스' },
      { id: 'requirements', label: '요구사항 정의서' },
    ],
  },
  {
    id: 'design',
    label: '설계',
    children: [
      { id: 'screen-design-upload', label: '화면 설계서 (업로드)' },
      { id: 'screen-design-2d', label: '화면 설계서 (2D 분석)' },
      { id: 'db-erd', label: 'DB-ERD 설계서' },
    ],
  },
  {
    id: 'implementation',
    label: '주요화면 구현',
    children: [{ id: 'main-screens', label: '주요화면 구현' }],
  },
  {
    id: 'management',
    label: '관리',
    children: [{ id: 'risk-management', label: '리스크 관리' }],
  },
]

const INTRO_ID = 'intro'

export function getOrderedSectionIds(): string[] {
  return [
    INTRO_ID,
    ...NAV_CATEGORIES.flatMap((c) => c.children.map((ch) => ch.id)),
  ]
}

export function findNavLabels(activeId: string): {
  category: string
  sub?: string
} | null {
  if (activeId === INTRO_ID) return null
  for (const cat of NAV_CATEGORIES) {
    const child = cat.children.find((c) => c.id === activeId)
    if (child) {
      return { category: cat.label, sub: child.label }
    }
  }
  return null
}

export function categoryContainsId(
  category: NavCategory,
  activeId: string,
): boolean {
  return category.children.some((c) => c.id === activeId)
}

/** 스크롤 위치 기준으로 펼칠 대분류 id (한 번에 하나만). intro면 null */
export function getOpenCategoryId(activeId: string): string | null {
  if (activeId === INTRO_ID) return null
  for (const cat of NAV_CATEGORIES) {
    if (categoryContainsId(cat, activeId)) return cat.id
  }
  return null
}
