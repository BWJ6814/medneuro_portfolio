import type { ReactNode } from 'react'
import {
  Calendar,
  ChevronDown,
  Code2,
  Database,
  Layers,
  Monitor,
  Target,
  Users,
} from 'lucide-react'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
/** 생성·교체 시 이 파일명 유지하거나 경로만 맞추면 됨 */
const FLOW_IMAGE = `${base}/images/hero/lawpartner-service-flow-hero.png`

type SiProps = { slug: string; color: string; title: string }

function Si({ slug, color, title }: SiProps) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
      alt=""
      className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]"
      loading="lazy"
      title={title}
    />
  )
}

function TechChip({
  children,
  icon,
  compact,
}: {
  children: ReactNode
  icon?: ReactNode
  compact?: boolean
}) {
  return (
    <span
      className={
        compact
          ? 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-1 text-xs font-medium text-slate-800 shadow-sm sm:px-2 sm:text-sm'
          : 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-800 shadow-sm sm:gap-1.5 sm:px-2 sm:py-1 sm:text-[11px]'
      }
    >
      {icon ? (
        <span className="flex shrink-0 items-center [&>img]:h-4 [&>img]:w-4 sm:[&>img]:h-[1.125rem] sm:[&>img]:w-[1.125rem]">
          {icon}
        </span>
      ) : null}
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
    <div className="flex min-h-0 min-w-0 flex-col gap-1 rounded-lg border border-slate-200/90 bg-white/90 p-1.5 shadow-sm ring-1 ring-slate-900/[0.03] sm:gap-1.5 sm:p-2">
      <p className="text-center text-[11px] font-bold uppercase tracking-wide text-[#0047AB] sm:text-xs">
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
      {/* 섹션1: 원본 비율 유지 — 테두리·그림자로 플로팅 카드 느낌 */}
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl border border-slate-400/90 bg-white shadow-[0_14px_44px_-18px_rgba(0,71,171,0.22),0_6px_20px_-10px_rgba(15,23,42,0.1)] ring-1 ring-[#0047AB]/[0.16] sm:rounded-[1.125rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/60"
          aria-hidden
        />
        <img
          src={FLOW_IMAGE}
          alt="LawPartner AI 법률 상담 플랫폼 서비스 이용 흐름: AI 채팅부터 변호사 매칭까지"
          className="relative block h-auto w-full max-w-full"
          decoding="async"
        />
      </div>

      {/* 섹션2: 프로젝트 소개 | 역할 | 개발환경 — lg에서 카드 높이 동일 */}
      <div className="grid min-h-0 shrink-0 grid-cols-1 gap-1.5 sm:gap-2 lg:grid-cols-3 lg:items-stretch lg:gap-2.5">
          <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-400/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-[#0047AB]/[0.16] sm:p-3">
            <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#0047AB] sm:text-base">
              <Target className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
              프로젝트 소개
            </h2>
            <div className="mb-2 flex shrink-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-600 sm:text-sm">
              <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
                <Calendar className="h-3.5 w-3.5 text-[#0047AB] sm:h-4 sm:w-4" aria-hidden />
                2026.01.30 – 2026.03.25 (8주)
              </span>
              <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
                <Users className="h-3.5 w-3.5 text-[#0047AB] sm:h-4 sm:w-4" aria-hidden />
                5인 (PM)
              </span>
            </div>
            <p className="min-h-0 flex-1 text-xs leading-relaxed text-slate-700 sm:text-sm sm:leading-snug">
              LawPartner는 사용자가 겪은 사건에 대해 상담을 받고, 그 맥락을 바탕으로
              적합한 변호사를 찾아 구인·매칭할 수 있도록 돕는 웹 서비스입니다.
            </p>
          </article>

          <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-400/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-[#0047AB]/[0.16] sm:p-3">
            <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#0047AB] sm:text-base">
              <Code2 className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
              역할
            </h2>
            <div className="min-h-0 flex-1 divide-y divide-slate-200/90 text-xs leading-relaxed text-slate-700 sm:text-sm">
              <p className="pb-2">
                <span className="font-semibold text-slate-800">팀 프로젝트 총괄 관리</span>
              </p>
              <p className="py-2">
                <span className="font-semibold text-slate-800">풀스택 개발</span>
              </p>
              <p className="py-2">
                <span className="font-semibold text-slate-800">RAG 시스템 구축</span>
              </p>
              <p className="pt-2">
                <span className="font-semibold text-slate-800">CI/CD</span>
              </p>
            </div>
          </article>

          <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-400/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-[#0047AB]/[0.16] sm:p-3">
            <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#0047AB] sm:text-base">
              <Monitor className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
              개발 환경
            </h2>
            <div className="min-h-0 flex-1 overflow-x-auto rounded-lg border border-slate-400/80 bg-white/80">
              <table className="w-full min-w-[200px] border-collapse text-left text-xs text-slate-700 sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#0047AB]/[0.06]">
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
                      Cursor, IntelliJ IDEA, Eclipse
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

      {/* 섹션3: 핵심 기술 — 1행 5열 (콘텐츠 높이만큼만, 아래 빈 여백 없음) */}
      <article className="flex shrink-0 flex-col overflow-hidden rounded-xl border border-slate-400/90 bg-gradient-to-br from-white to-slate-50/90 p-2 shadow-sm ring-1 ring-[#0047AB]/[0.16] sm:p-2.5">
        <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#0047AB] sm:text-base">
          <Layers className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          핵심 기술
        </h2>
        <div className="grid min-w-0 grid-cols-5 gap-1.5 sm:gap-2">
            <TechCategoryBox label="프론트엔드">
              <TechChip compact icon={<Si slug="react" color="61DAFB" title="React" />}>
                React
              </TechChip>
              <TechChip compact icon={<Si slug="axios" color="5A29E4" title="Axios" />}>
                Axios
              </TechChip>
              <TechChip
                compact
                icon={<Si slug="tailwindcss" color="06B6D4" title="Tailwind CSS" />}
              >
                Tailwind
              </TechChip>
            </TechCategoryBox>
            <TechCategoryBox label="백엔드">
              <TechChip
                compact
                icon={<Si slug="springboot" color="6DB33F" title="Spring Boot" />}
              >
                Spring Boot
              </TechChip>
              <TechChip compact icon={<Si slug="jsonwebtokens" color="000000" title="JWT" />}>
                JWT
              </TechChip>
              <TechChip compact icon={<Si slug="hibernate" color="59666C" title="JPA" />}>
                JPA
              </TechChip>
              <TechChip compact icon={<Si slug="fastapi" color="009688" title="FastAPI" />}>
                FastAPI
              </TechChip>
              <TechChip compact icon={<Si slug="langchain" color="1C3C3C" title="LangChain" />}>
                LangChain
              </TechChip>
            </TechCategoryBox>
            <TechCategoryBox label="DB">
              <TechChip
                compact
                icon={<Database className="h-4 w-4 text-[#F80000] sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />}
              >
                Oracle DB
              </TechChip>
              <TechChip
                compact
                icon={<Database className="h-4 w-4 text-slate-600 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />}
              >
                FAISS
              </TechChip>
            </TechCategoryBox>
            <TechCategoryBox label="CI/CD">
              <TechChip
                compact
                icon={<Si slug="githubactions" color="2088FF" title="GitHub Actions" />}
              >
                GitHub Actions
              </TechChip>
              <TechChip compact icon={<Si slug="docker" color="2496ED" title="Docker" />}>
                Docker
              </TechChip>
              <TechChip compact icon={<Si slug="amazonaws" color="232F3E" title="AWS EC2" />}>
                AWS EC2
              </TechChip>
              <TechChip
                compact
                icon={<Database className="h-4 w-4 text-[#232F3E] sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />}
              >
                AWS RDS
              </TechChip>
            </TechCategoryBox>
            <TechCategoryBox label="협업">
              <TechChip compact icon={<Si slug="github" color="181717" title="GitHub" />}>
                GitHub
              </TechChip>
              <TechChip compact icon={<Si slug="notion" color="000000" title="Notion" />}>
                Notion
              </TechChip>
              <TechChip compact icon={<Si slug="discord" color="5865F2" title="Discord" />}>
                Discord
              </TechChip>
            </TechCategoryBox>
        </div>
      </article>

      {/* 섹션4: 스크롤 안내 */}
      <p className="flex shrink-0 items-center justify-center gap-1.5 py-0.5 text-center text-xs text-slate-900 sm:text-sm">
        <span>프로젝트 문서는 아래로 스크롤</span>
        <ChevronDown
          className="h-3.5 w-3.5 animate-bounce text-[#0047AB] sm:h-4 sm:w-4"
          aria-hidden
        />
      </p>
    </section>
  )
}
