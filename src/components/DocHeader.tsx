import { BookOpen, ExternalLink } from 'lucide-react'
import { findNavLabels } from '../data/navigation'

const DEPLOY_URL = 'http://lawpartner.kro.kr/'
const GITHUB_URL = 'https://github.com/MadSadly/LawPartner'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

type DocHeaderProps = {
  activeId: string
  onMenuClick?: () => void
  showMenuButton?: boolean
}

export function DocHeader({
  activeId,
  onMenuClick,
  showMenuButton,
}: DocHeaderProps) {
  const labels = findNavLabels(activeId)
  const isIntro = activeId === 'intro' || !labels

  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-slate-200/60 bg-[#f7f9fc]/95 shadow-[0_1px_0_0_rgba(0,71,171,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-[#f7f9fc]/88 lg:left-[20%]">
      <div className="flex min-h-14 items-center gap-3 px-3 py-2.5 sm:px-4 lg:pl-6 lg:pr-5">
        {showMenuButton ? (
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-[#0047AB]/[0.08] hover:text-[#0047AB] lg:hidden"
            aria-label="메뉴 열기"
          >
            <span className="sr-only">메뉴</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        ) : null}

        <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
          <div
            className={`mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-[#0047AB]/10 sm:flex ${
              isIntro
                ? 'bg-gradient-to-br from-[#0047AB]/12 to-[#0047AB]/[0.04] text-[#0047AB]'
                : 'bg-[#0047AB]/[0.06] text-[#0047AB]'
            }`}
            aria-hidden
          >
            <BookOpen className="h-5 w-5" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            {isIntro ? (
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                <h1 className="text-left text-sm font-semibold tracking-tight text-slate-800 sm:text-base">
                  LawPartner 포트폴리오
                </h1>
                <span
                  className="hidden h-4 w-px shrink-0 bg-slate-200/90 sm:block"
                  aria-hidden
                />
                <a
                  href={DEPLOY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex max-w-full items-center gap-1.5 rounded-lg border border-[#0047AB]/15 bg-white/70 px-2.5 py-1 text-left text-xs font-medium text-[#0047AB]/95 shadow-sm transition-colors hover:border-[#0047AB]/28 hover:bg-white sm:text-sm"
                >
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0 opacity-80 group-hover:opacity-100"
                    strokeWidth={2}
                  />
                  <span className="truncate">배포 · {DEPLOY_URL}</span>
                </a>
              </div>
            ) : (
              <h1 className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 text-left text-lg font-bold leading-snug sm:text-xl">
                <span className="text-[#0047AB]">{labels.category}</span>
                <span
                  className="shrink-0 font-light text-slate-300"
                  aria-hidden
                >
                  |
                </span>
                <span className="text-sm font-semibold text-slate-800 sm:text-[15px]">
                  {labels.sub}
                </span>
              </h1>
            )}
          </div>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/70 bg-white/80 text-[#0047AB]/90 shadow-sm transition-colors hover:border-[#0047AB]/25 hover:bg-[#0047AB]/[0.07]"
          aria-label="GitHub 저장소 MadSadly/LawPartner"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      </div>
    </header>
  )
}
