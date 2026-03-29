import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  NAV_CATEGORIES,
  getOpenCategoryId,
  getOrderedSectionIds,
  type NavCategory,
} from '../data/navigation'

/** 대분류 클릭 직후, 스크롤이 목표 소분류에 닿기 전까지만 스파이보다 우선 */
type PendingNav = {
  categoryId: string
  targetSectionId: string
}

type DocSidebarProps = {
  activeId: string
  mobileOpen: boolean
  onCloseMobile: () => void
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * pending: 클릭으로 스크롤 중일 때만 유효.
 * - 목표 섹션에 도달하면 무시 → 이후 하이라이트·펼침은 전부 스크롤(activeId) 기준.
 * - 목표보다 아래로 내려가면(형제/다음 대분류) 무시 → 스크롤 스파이만 사용.
 */
function computeEffectivePending(
  pendingNav: PendingNav | null,
  activeId: string,
): PendingNav | null {
  if (!pendingNav) return null
  if (activeId === pendingNav.targetSectionId) return null

  const ids = getOrderedSectionIds()
  const tIdx = ids.indexOf(pendingNav.targetSectionId)
  const aIdx = ids.indexOf(activeId)
  if (tIdx === -1 || aIdx === -1) return null

  // 아직 목표 위(인트로 등) — 스크롤 진행 중
  if (aIdx < tIdx) return pendingNav

  // 목표를 지나 아래 섹션으로 이동 — 클릭 하이라이트 종료
  return null
}

export function DocSidebar({
  activeId,
  mobileOpen,
  onCloseMobile,
}: DocSidebarProps) {
  const [pendingNav, setPendingNav] = useState<PendingNav | null>(null)

  const fromScroll = useMemo(
    () => getOpenCategoryId(activeId),
    [activeId],
  )

  const effectivePending = useMemo(
    () => computeEffectivePending(pendingNav, activeId),
    [pendingNav, activeId],
  )

  const openCategoryId =
    effectivePending?.categoryId ?? fromScroll

  useEffect(() => {
    if (!openCategoryId) return
    const el = document.getElementById(`sidebar-cat-${openCategoryId}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [openCategoryId])

  const onCategoryClick = useCallback(
    (cat: NavCategory) => {
      const first = cat.children[0]?.id
      if (!first) return
      setPendingNav({ categoryId: cat.id, targetSectionId: first })
      scrollToId(first)
      onCloseMobile()
    },
    [onCloseMobile],
  )

  const onChildClick = useCallback(
    (id: string) => {
      setPendingNav(null)
      scrollToId(id)
      onCloseMobile()
    },
    [onCloseMobile],
  )

  const goIntro = useCallback(() => {
    setPendingNav(null)
    scrollToId('intro')
    onCloseMobile()
  }, [onCloseMobile])

  const sidebarInner = (
    <>
      <div className="relative flex h-[3.75rem] shrink-0 items-center border-b border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] px-4 lg:h-[4.25rem] lg:px-5">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%221%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%2F%3E%3C%2Fsvg%3E')]"
          aria-hidden
        />
        <a
          href="#intro"
          className="relative text-lg font-semibold tracking-tight text-neutral-100 drop-shadow-sm"
          onClick={(e) => {
            e.preventDefault()
            goIntro()
          }}
        >
          MedNeuro
        </a>
        <button
          type="button"
          className="relative ml-auto rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-neutral-100 lg:hidden"
          onClick={onCloseMobile}
          aria-label="메뉴 닫기"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav
        className="flex-1 overflow-y-auto px-3 py-4 lg:px-4"
        aria-label="문서 목차"
      >
        <ul className="space-y-1.5">
          {NAV_CATEGORIES.map((cat) => {
            const isOpen = openCategoryId === cat.id
            return (
              <li key={cat.id} id={`sidebar-cat-${cat.id}`}>
                <button
                  type="button"
                  onClick={() => onCategoryClick(cat)}
                  className={`flex w-full items-center gap-1.5 rounded-lg px-2.5 py-2.5 text-left text-[15px] leading-snug transition-colors ${
                    isOpen
                      ? 'bg-white/10 text-neutral-100 shadow-sm ring-1 ring-white/15'
                      : 'text-neutral-300 hover:bg-white/[0.06] hover:text-neutral-100'
                  }`}
                >
                  {isOpen ? (
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-neutral-400"
                      strokeWidth={2}
                    />
                  ) : (
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-neutral-500"
                      strokeWidth={2}
                    />
                  )}
                  <span className="font-sans font-bold tracking-tight">
                    {cat.label}
                  </span>
                </button>
                {isOpen ? (
                  <ul className="ml-1 mt-1 space-y-0.5 border-l-2 border-white/15 py-1 pl-3">
                    {cat.children.map((child) => {
                      const isPendingHighlight =
                        effectivePending?.categoryId === cat.id &&
                        effectivePending.targetSectionId === child.id
                      const isActive =
                        activeId === child.id || isPendingHighlight
                      return (
                        <li key={child.id}>
                          <button
                            type="button"
                            onClick={() => onChildClick(child.id)}
                            className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm transition-all ${
                              isActive
                                ? 'bg-neutral-100 font-medium text-neutral-950 shadow-sm ring-1 ring-white/20'
                                : 'text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-100'
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
        onClick={onCloseMobile}
      />
      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-[min(88vw,300px)] flex-col border-r border-white/10 bg-gradient-to-b from-[#08090b] via-[#0a0b0d] to-[#0c0d10] shadow-[4px_0_24px_-8px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out lg:w-1/5 lg:max-w-none lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {sidebarInner}
      </aside>
    </>
  )
}
