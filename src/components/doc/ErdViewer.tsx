import { Maximize2 } from 'lucide-react'
import erdHtmlUrl from '../../data/ERD.html?url'

export function ErdViewer() {
  const url = erdHtmlUrl

  return (
    <div className="my-6">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-snug text-slate-600">
          다이어그램이 넓어 아래 영역에서 가로·세로 스크롤로 확인할 수 있습니다.
        </p>
        <button
          type="button"
          onClick={() =>
            window.open(url, '_blank', 'noopener,noreferrer')
          }
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#0047AB]/25 bg-[#0047AB]/[0.09] px-4 py-2.5 text-sm font-semibold text-[#0047AB] shadow-sm transition-colors hover:bg-[#0047AB]/[0.16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047AB]"
        >
          <Maximize2 className="h-4 w-4" aria-hidden />
          전체화면으로 보기
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100/90 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04]">
        <iframe
          title="Law-Partner 논리 ERD"
          src={url}
          className="h-[min(75vh,640px)] w-full min-w-0 bg-white"
          loading="lazy"
        />
      </div>
    </div>
  )
}
