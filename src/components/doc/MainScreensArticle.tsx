import { useCallback, useRef } from 'react'
import { Clapperboard, Film } from 'lucide-react'
import { MEDNEURO_DEMO_VIDEO } from '../../data/implementationVideos'

type TimelineRow = { timeLabel: string; label: string; seconds: number }

const MEDNEURO_DEMO_TIMELINE: TimelineRow[] = [
  { timeLabel: '00:00', label: '로그인', seconds: 0 },
  { timeLabel: '00:06', label: '파일 업로드', seconds: 6 },
  { timeLabel: '00:15', label: 'Axial축 2D 이미지 출력', seconds: 15 },
  { timeLabel: '00:21', label: '코멘트 CRUD', seconds: 21 },
  { timeLabel: '01:12', label: '3D 전환', seconds: 72 },
  { timeLabel: '01:42', label: '파일 변경', seconds: 102 },
]

export function MainScreensArticle() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const jumpTo = useCallback((seconds: number) => {
    const el = videoRef.current
    if (!el) return
    el.currentTime = seconds
    void el.play().catch(() => {
      /* 사용자 제스처 없이 재생이 막힐 수 있음 */
    })
  }, [])

  return (
    <div className="max-w-none space-y-6">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/90 pb-2">
        <Clapperboard className="h-5 w-5 text-teal-700" aria-hidden />
        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          주요 화면 시연
        </h3>
      </div>
      <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
        MedNeuro 전체 시연 영상입니다. 아래 타임라인을 누르면 해당 시각으로
        이동해 재생합니다.
      </p>

      <div className="overflow-hidden rounded-xl border-2 border-teal-800/80 bg-black/5 shadow-sm ring-1 ring-teal-900/[0.12]">
        <video
          ref={videoRef}
          className="block w-full max-h-[min(70vh,560px)] bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          title="MedNeuro 시연"
          src={MEDNEURO_DEMO_VIDEO}
        >
          브라우저에서 video 태그를 지원하지 않습니다.
        </video>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/[0.04]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/90 px-3 py-2.5 sm:px-4">
          <Film className="h-4 w-4 shrink-0 text-teal-700" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600 sm:text-sm">
            기능별 타임라인
          </p>
        </div>
        <div className="max-h-[min(52vh,420px)] overflow-y-auto overscroll-contain">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 z-[1] bg-teal-900/[0.08] text-xs text-slate-800 sm:text-sm">
              <tr>
                <th className="w-[5.5rem] px-3 py-2 font-bold sm:w-24 sm:px-4">
                  시각
                </th>
                <th className="px-2 py-2 font-bold sm:px-4">화면·기능</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MEDNEURO_DEMO_TIMELINE.map((row) => (
                <tr key={`${row.timeLabel}-${row.label}`}>
                  <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-slate-600 sm:px-4 sm:text-sm">
                    {row.timeLabel}
                  </td>
                  <td className="px-2 py-1.5 sm:px-4 sm:py-2">
                    <button
                      type="button"
                      onClick={() => jumpTo(row.seconds)}
                      className="w-full rounded-lg px-2 py-1.5 text-left text-[13px] font-medium text-teal-800 underline-offset-2 transition-colors hover:bg-teal-900/[0.06] hover:underline sm:text-sm"
                    >
                      {row.label}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
