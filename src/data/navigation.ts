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
      { id: 'network-diagram', label: '네트워크 구조도' },
      { id: 'team-roles', label: '팀원 역할 분배' },
      { id: 'schedule', label: '프로젝트 스케쥴' },
    ],
  },
  {
    id: 'analysis',
    label: '분석',
    children: [
      { id: 'user-flow', label: '역할별 서비스 이용 흐름' },
      { id: 'permissions', label: '권한별 기능 정리' },
      { id: 'requirements', label: '요구사항 정의서' },
    ],
  },
  {
    id: 'design',
    label: '설계',
    children: [
      { id: 'screen-design', label: '화면 설계서' },
      { id: 'db-erd', label: 'DB-ERD 설계서' },
    ],
  },
  {
    id: 'implementation',
    label: '주요화면 구현',
    children: [
      { id: 'core-tech', label: '핵심 기술 소개' },
      { id: 'main-screens', label: '주요화면 구현' },
    ],
  },
  {
    id: 'testing',
    label: '테스트',
    children: [
      { id: 'unit-tests', label: '단위 테스트' },
      { id: 'integration-tests', label: '통합 테스트' },
    ],
  },
  {
    id: 'management',
    label: '관리',
    children: [
      { id: 'meeting-notes', label: '회의록' },
      { id: 'risk-management', label: '리스크 관리' },
      { id: 'feedback', label: '피드백 수정사항' },
    ],
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
