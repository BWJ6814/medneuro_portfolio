import type { ReactNode } from 'react'
import {
  type LucideIcon,
  Braces,
  Calendar,
  ChevronDown,
  Code2,
  Database,
  FileCode,
  LayoutGrid,
  Layers,
  Leaf,
  Monitor,
  Network,
  Table2,
  Target,
  Users,
} from 'lucide-react'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const INTRO_HERO = `${base}/images/hero/medneuro-main-hero.png`

function TechChip({
  icon: Icon,
  children,
  compact,
}: {
  icon: LucideIcon
  children: ReactNode
  compact?: boolean
}) {
  return (
    <span
      className={
        compact
          ? 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-1 text-xs font-medium text-slate-800 shadow-sm sm:gap-1.5 sm:px-2 sm:text-sm'
          : 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-800 shadow-sm sm:gap-1.5 sm:px-2 sm:py-1 sm:text-[11px]'
      }
    >
      <Icon
        className="h-3 w-3 shrink-0 text-teal-700 sm:h-3.5 sm:w-3.5"
        aria-hidden
      />
      {children}
    </span>
  )
}

function TechCategoryBox({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex min-h-0 min-w-0 flex-col gap-1 rounded-lg border border-slate-200/90 bg-slate-50/90 p-1.5 shadow-sm ring-1 ring-slate-900/[0.03] sm:gap-1.5 sm:p-2">
      <p className="text-center text-[11px] font-bold uppercase tracking-wide text-slate-800 sm:text-xs">
        {label}
      </p>
      <div className="flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-1.5">
        {children}
      </div>
    </div>
  )
}

export function LandingIntro() {
  return (
    <section
      id="intro"
      className="flex min-h-[calc(88svh-3.5rem)] flex-col gap-1.5 px-2 pb-1.5 pt-2 sm:gap-2 sm:px-4 sm:pb-2 sm:pt-3 lg:gap-2.5 lg:px-6"
    >
      <div className="relative aspect-[3/1] w-full shrink-0 overflow-hidden rounded-2xl border border-slate-300/90 bg-[#0a0a0c] shadow-[0_14px_44px_-18px_rgba(15,23,42,0.12),0_6px_20px_-10px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/[0.06] sm:rounded-[1.125rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-slate-200/80"
          aria-hidden
        />
        <img
          src={INTRO_HERO}
          alt="MedNeuro — NIfTI 뇌 영상 2D·3D 분석·주석 플랫폼 소개"
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
        />
      </div>

      {/* 프로젝트 소개 | 역할 | 개발환경 */}
      <div className="grid min-h-0 shrink-0 grid-cols-1 gap-1.5 sm:gap-2 lg:grid-cols-3 lg:items-stretch lg:gap-2.5">
        <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-3">
          <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
            <Target className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            프로젝트 소개
          </h2>
          <div className="mb-2 flex shrink-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-600 sm:text-sm">
            <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
              <Calendar className="h-3.5 w-3.5 text-slate-600 sm:h-4 sm:w-4" aria-hidden />
              2025.12.08 – 2025.12.31
            </span>
            <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
              <Users className="h-3.5 w-3.5 text-slate-600 sm:h-4 sm:w-4" aria-hidden />
              3인 (PM)
            </span>
          </div>
          <p className="min-h-0 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-snug">
            MedNeuro는 NIfTI 등 뇌 영상 데이터를 불러와 2D 슬라이스와 3D 볼륨으로
            시각화하고, 뇌종양 영역 분석·검토를 돕는 웹 서비스입니다.
          </p>
        </article>

        <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-3">
          <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
            <Code2 className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            역할
          </h2>
          <div className="min-h-0 flex-1 divide-y divide-slate-200/90 text-xs leading-relaxed text-slate-600 sm:text-sm">
            <p className="pb-2">
              <span className="font-semibold text-slate-800">팀 프로젝트 총괄 관리</span>
            </p>
            <p className="py-2">
              <span className="font-semibold text-slate-800">프로젝트 분석 및 설계</span>
            </p>
            <p className="py-2">
              <span className="font-semibold text-slate-800">풀스택 개발</span>
            </p>
            <p className="pt-2">
              <span className="font-semibold text-slate-800">영상 처리·3D 파이프라인</span>
            </p>
          </div>
        </article>

        <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-3">
          <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
            <Monitor className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            개발 환경
          </h2>
          <div className="min-h-0 flex-1 overflow-x-auto rounded-lg border border-slate-200/90 bg-white/80">
            <table className="w-full min-w-[200px] border-collapse text-left text-xs text-slate-700 sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/90">
                  <th className="px-2 py-1.5 font-bold text-slate-900 sm:px-2.5">
                    구분
                  </th>
                  <th className="px-2 py-1.5 font-bold text-slate-900 sm:px-2.5">
                    도구
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="whitespace-nowrap px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    IDE / Editor
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">
                    IntelliJ IDEA, VSCode
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    OS
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">Windows</td>
                </tr>
                <tr>
                  <td className="px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    Runtime
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">
                    Node.js, Java, Python
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <article className="flex shrink-0 flex-col overflow-hidden rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-2.5">
        <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
          <Layers className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          핵심 기술
        </h2>
        <div className="grid min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-3 sm:gap-2">
          <TechCategoryBox label="Backend">
            <TechChip compact icon={Leaf}>
              Spring Boot
            </TechChip>
            <TechChip compact icon={Table2}>
              MyBatis
            </TechChip>
          </TechCategoryBox>
          <TechCategoryBox label="Database">
            <TechChip compact icon={Database}>
              Oracle Database
            </TechChip>
          </TechCategoryBox>
          <TechCategoryBox label="Frontend">
            <TechChip compact icon={FileCode}>
              JSP
            </TechChip>
            <TechChip compact icon={Braces}>
              JavaScript
            </TechChip>
            <TechChip compact icon={Code2}>
              jQuery
            </TechChip>
            <TechChip compact icon={Network}>
              Ajax
            </TechChip>
            <TechChip compact icon={LayoutGrid}>
              Bootstrap
            </TechChip>
          </TechCategoryBox>
        </div>
      </article>

      <p className="flex shrink-0 items-center justify-center gap-1.5 py-0.5 text-center text-xs text-slate-600 sm:text-sm">
        <span>프로젝트 문서는 아래로 스크롤</span>
        <ChevronDown
          className="h-3.5 w-3.5 animate-bounce text-slate-500 sm:h-4 sm:w-4"
          aria-hidden
        />
      </p>
    </section>
  )
}
