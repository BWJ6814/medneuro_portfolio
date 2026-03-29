import { useCallback, useMemo, useState } from 'react'
import { Clapperboard, Film, ListVideo } from 'lucide-react'
import {
  FULL_DEMO_YOUTUBE_ID,
  IMPLEMENTATION_VIDEOS,
} from '../../data/implementationVideos'

const SCREEN_FEATURES = [
  '메인페이지',
  '일반회원 회원가입',
  '변호사 회원가입',
  '아이디·비밀번호 찾기',
  'AI 법률 상담',
  'AI 상담 → 상담게시판 연동',
  '상담게시판 CRUD · 변호사 1:1 대화 요청',
  '평점 및 후기 등록',
  '마이페이지',
  '1:1 채팅',
  '프로필 변경',
  '결제 페이지',
  '변호사 프로필 검색',
  '고객센터',
  '관리자 페이지',
] as const

const DEMO_VIDEO_SECTIONS = [
  {
    id: 'demo-ai-legal',
    title: 'AI 법률 상담',
    description:
      'RAG 기반으로 판례·데이터를 참고해 답변하는 AI 채팅 화면과 상담 흐름을 구현했습니다.',
    src: IMPLEMENTATION_VIDEOS.aiLegalConsultation,
    fileHint: '/images/video/ai-legal-consultation.mp4',
  },
  {
    id: 'demo-ai-to-board',
    title: (
      <>
        AI 법률 상담 <span className="mx-0.5 text-[#0047AB]">➡️</span> 상담게시판 연동
      </>
    ),
    description:
      'AI 상담 내용을 바탕으로 상담 요청글이 자동 구성·등록되어 게시판으로 이어지는 과정입니다.',
    src: IMPLEMENTATION_VIDEOS.aiToConsultationBoard,
    fileHint: '/images/video/ai-to-consultation-board.mp4',
  },
  {
    id: 'demo-board-crud',
    title: '상담게시판 CRUD',
    description:
      '게시글 작성·조회·수정·삭제와 변호사 댓글·1:1 대화 요청까지 포함한 게시판 기능입니다.',
    src: IMPLEMENTATION_VIDEOS.consultationBoardCrud,
    fileHint: '/images/video/consultation-board-crud.mp4',
  },
] as const

type TimelineRow = { timeLabel: string; label: string; seconds: number }

function parseMmSsToSeconds(timeLabel: string): number {
  const [a, b] = timeLabel.split(':').map((x) => parseInt(x, 10))
  if (Number.isNaN(a) || Number.isNaN(b)) return 0
  return a * 60 + b
}

const FULL_DEMO_TIMELINE: TimelineRow[] = [
  { timeLabel: '00:07', label: '메인페이지', seconds: parseMmSsToSeconds('00:07') },
  {
    timeLabel: '01:50',
    label: '일반회원 회원가입',
    seconds: parseMmSsToSeconds('01:50'),
  },
  {
    timeLabel: '03:36',
    label: '아이디·비밀번호 찾기',
    seconds: parseMmSsToSeconds('03:36'),
  },
  {
    timeLabel: '05:10',
    label: '변호사 회원가입 · 승인 플로우',
    seconds: parseMmSsToSeconds('05:10'),
  },
  { timeLabel: '07:30', label: 'AI 상담', seconds: parseMmSsToSeconds('07:30') },
  {
    timeLabel: '08:35',
    label: 'AI 상담 → 상담게시판 연동',
    seconds: parseMmSsToSeconds('08:35'),
  },
  {
    timeLabel: '10:53',
    label: '상담게시판 CRUD · 변호사 1:1 대화 요청',
    seconds: parseMmSsToSeconds('10:53'),
  },
  {
    timeLabel: '11:55',
    label: '별점 및 후기 등록',
    seconds: parseMmSsToSeconds('11:55'),
  },
  { timeLabel: '13:01', label: '마이페이지', seconds: parseMmSsToSeconds('13:01') },
  { timeLabel: '14:28', label: '1:1 채팅', seconds: parseMmSsToSeconds('14:28') },
  {
    timeLabel: '15:48',
    label: '프로필 변경',
    seconds: parseMmSsToSeconds('15:48'),
  },
  {
    timeLabel: '16:12',
    label: '결제 페이지',
    seconds: parseMmSsToSeconds('16:12'),
  },
  {
    timeLabel: '16:40',
    label: '변호사 프로필 검색',
    seconds: parseMmSsToSeconds('16:40'),
  },
  { timeLabel: '17:06', label: '고객센터', seconds: parseMmSsToSeconds('17:06') },
  {
    timeLabel: '18:05',
    label: '관리자 페이지',
    seconds: parseMmSsToSeconds('18:05'),
  },
]

function SectionVideo({
  src,
  title,
  fileHint,
}: {
  src: string
  title: string
  /** public 기준 상대 경로 (안내용) */
  fileHint: string
}) {
  const [loadError, setLoadError] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border-2 border-[#003580] bg-black/5 shadow-sm ring-1 ring-[#0047AB]/[0.12]">
      {loadError ? (
        <div className="flex min-h-[220px] flex-col justify-center gap-3 bg-slate-50 px-4 py-6 sm:px-6">
          <p className="text-sm font-semibold text-slate-800">
            동영상 파일을 불러오지 못했습니다.
          </p>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            아래 경로에 <code className="rounded bg-white px-1 py-0.5 text-[13px] text-slate-800">.mp4</code> 파일이
            있는지 확인해 주세요. (파일명·대소문자·확장자까지 코드와 동일해야 합니다.)
          </p>
          <code className="block break-all rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-[11px] text-slate-800 sm:text-xs">
            public{fileHint}
          </code>
          <p className="text-xs text-slate-500">
            개발 서버를 켠 뒤 파일을 넣었다면 저장하고 브라우저를 새로고침하세요.
            배포 주소가 하위 경로라면 빌드 설정의 <code className="text-slate-700">base</code>와 맞는지도 확인하세요.
          </p>
        </div>
      ) : (
        <video
          className="block w-full max-h-[min(70vh,560px)] bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          title={title}
          src={src}
          onError={() => setLoadError(true)}
        >
          브라우저에서 video 태그를 지원하지 않습니다.
        </video>
      )}
    </div>
  )
}

export function MainScreensArticle() {
  const [demoStartSeconds, setDemoStartSeconds] = useState(0)
  const embedUrl = useMemo(
    () =>
      `https://www.youtube.com/embed/${FULL_DEMO_YOUTUBE_ID}?start=${demoStartSeconds}&autoplay=1&rel=0`,
    [demoStartSeconds],
  )

  const jumpTo = useCallback((seconds: number) => {
    setDemoStartSeconds(seconds)
  }, [])

  return (
    <div className="max-w-none space-y-10">
      {/* 요약: 구현 화면 수 + 동영상 3종 */}
      <div className="overflow-hidden rounded-2xl border border-slate-400/90 bg-gradient-to-br from-white to-slate-50/90 shadow-sm ring-1 ring-[#0047AB]/[0.16]">
        <div
          className="h-1 bg-gradient-to-r from-[#0047AB]/30 via-[#0047AB] to-[#0047AB]/30"
          aria-hidden
        />
        <div className="border-b border-slate-100/90 px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0047AB]/[0.09] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0047AB] ring-1 ring-[#0047AB]/20 sm:text-sm">
              <ListVideo className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
              구현 화면
            </span>
            <p className="text-sm font-semibold text-slate-800 sm:text-base">
              총 <span className="text-[#0047AB]">{SCREEN_FEATURES.length}</span>
              개 화면 중{' '}
              <span className="rounded-md bg-amber-100/90 px-1.5 py-0.5 font-bold text-amber-900 ring-1 ring-amber-200/80">
                핵심 3종
              </span>
              을 동영상으로 정리했습니다.
            </p>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            나머지 구간은 하단{' '}
            <span className="font-medium text-slate-800">풀 시연 영상(YouTube)</span>의
            타임라인에서 바로 이동할 수 있습니다.
          </p>
        </div>
        <div className="px-3 pb-4 pt-1 sm:px-4 sm:pb-5">
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {SCREEN_FEATURES.map((name) => (
              <li key={name}>
                <span className="inline-flex rounded-lg border border-slate-200/95 bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/[0.04] sm:text-xs">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 섹션 1~3: 로컬 동영상 */}
      {DEMO_VIDEO_SECTIONS.map((block, idx) => (
        <section
          key={block.id}
          id={block.id}
          className="scroll-mt-24 space-y-3"
        >
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-slate-200/90 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Section {idx + 1}
            </span>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {block.title}
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {block.description}
          </p>
          <SectionVideo
            src={block.src}
            fileHint={block.fileHint}
            title={typeof block.title === 'string' ? block.title : '데모 영상'}
          />
        </section>
      ))}

      {/* 섹션 4: YouTube 풀버전 + 타임라인 */}
      <section id="demo-full-youtube" className="scroll-mt-24 space-y-4">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/90 pb-2">
          <Clapperboard className="h-5 w-5 text-[#0047AB]" aria-hidden />
          <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            풀 시연 영상{' '}
            <span className="text-base font-semibold text-slate-500">(YouTube)</span>
          </h3>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
          전체 기능을 순서대로 담은 단일 시연입니다. 아래 타임라인을 누르면 해당
          구간부터 재생됩니다.
        </p>

        <div className="overflow-hidden rounded-xl border-2 border-[#003580] bg-white shadow-sm ring-1 ring-[#0047AB]/[0.12]">
          <div className="aspect-video w-full bg-black">
            <iframe
              key={embedUrl}
              title="LawPartner 전체 시연 영상"
              src={embedUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/[0.04]">
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/90 px-3 py-2.5 sm:px-4">
            <Film className="h-4 w-4 shrink-0 text-[#0047AB]" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600 sm:text-sm">
              기능별 타임라인
            </p>
          </div>
          <div className="max-h-[min(52vh,420px)] overflow-y-auto overscroll-contain">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="sticky top-0 z-[1] bg-[#0047AB]/[0.08] text-xs text-slate-800 sm:text-sm">
                <tr>
                  <th className="w-[5.5rem] px-3 py-2 font-bold sm:w-24 sm:px-4">
                    시각
                  </th>
                  <th className="px-2 py-2 font-bold sm:px-4">화면·기능</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FULL_DEMO_TIMELINE.map((row) => (
                  <tr key={`${row.timeLabel}-${row.label}`}>
                    <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-slate-600 sm:px-4 sm:text-sm">
                      {row.timeLabel}
                    </td>
                    <td className="px-2 py-1.5 sm:px-4 sm:py-2">
                      <button
                        type="button"
                        onClick={() => jumpTo(row.seconds)}
                        className="w-full rounded-lg px-2 py-1.5 text-left text-[13px] font-medium text-[#0047AB] underline-offset-2 transition-colors hover:bg-[#0047AB]/[0.06] hover:underline sm:text-sm"
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
      </section>
    </div>
  )
}
