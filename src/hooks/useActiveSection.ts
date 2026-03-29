import { useEffect, useState } from 'react'
import { getOrderedSectionIds } from '../data/navigation'

/** 고정 헤더 아래 읽기 기준선 (scroll-mt와 맞춤) */
const HEADER_OFFSET_PX = 96

/**
 * 스크롤 스파이: 헤더 기준선(offset)을 '가로지르는' 섹션을 활성으로 둠.
 * (기존: top만 비교 → 이미 지나간 섹션이 끝까지 활성으로 남는 버그)
 */
function computeActiveId(ids: string[], offset: number): string {
  // 1) 기준선이 이 섹션 블록 안에 있음: top <= offset < bottom
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= offset && bottom > offset) {
      return id
    }
  }

  // 2) 기준선이 섹션 사이(갭)에 있을 때: 기준선보다 아래에 처음 나타나는 섹션(가장 위쪽)
  let candidate: string | null = null
  let minTop = Infinity
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    const { top } = el.getBoundingClientRect()
    if (top > offset && top < minTop) {
      minTop = top
      candidate = id
    }
  }
  if (candidate) {
    return candidate
  }

  // 3) 맨 아래까지 스크롤: 마지막 섹션이 기준선 위로만 올라온 경우
  const lastId = ids[ids.length - 1]
  if (lastId) {
    const lastEl = document.getElementById(lastId)
    if (lastEl) {
      const { top } = lastEl.getBoundingClientRect()
      if (top < offset) {
        return lastId
      }
    }
  }

  return ids[0] ?? 'intro'
}

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState('intro')

  useEffect(() => {
    const ids = getOrderedSectionIds()

    const update = () => {
      setActiveId(computeActiveId(ids, HEADER_OFFSET_PX))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return activeId
}
