type RiskItem = {
  title: string
  risk: string
  resolution: string
  outcome: string
}

const RISK_ITEMS: RiskItem[] = [
  {
    title: '[성능] 대용량 의료 영상 데이터 렌더링 최적화',
    risk:
      '수십 MB의 NII 파일 직접 렌더링 시 브라우저 메모리 초과 및 지연(10초 이상)',
    resolution:
      '서버 사이드에서 .obj 데이터 추출 후 클라이언트에 전송하는 아키텍처로 변경',
    outcome: '초기 로딩 속도 약 70% 단축 및 시스템 안정성 확보',
  },
  {
    title: '[연동] 기술 스택 간 데이터 파이프라인 구축',
    risk: 'Spring 환경과 Python 의료 라이브러리 간의 연동 및 호환성 이슈',
    resolution:
      'ProcessBuilder 기반의 동적 프로세스 실행 및 데이터 스트림 최적화',
    outcome:
      'Java-Python 간 데이터 연동 오류 억제 및 안정적인 분석 환경 구축',
  },
  {
    title: '[협업] 개발 인력 이탈에 따른 업무 공백 발생',
    risk:
      '프로젝트 중반부 팀원 1인 하차로 인한 개발 인력 감소 및 담당 모듈 개발 중단 위기',
    resolution:
      '업무 우선순위 재조정 및 페어 프로그래밍을 통한 로직 인수인계 주도, 개발 업무 로드 재배분',
    outcome:
      '추가 인력 없이 기존 일정 내 프로젝트 100% 완수 및 팀 내 기술 공유 밀도 강화',
  },
]

function RiskSection({
  eyebrow,
  title,
  accentClass,
  items,
}: {
  eyebrow: string
  title: string
  accentClass: string
  items: RiskItem[]
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.035]">
      <div className={`h-1 bg-gradient-to-r ${accentClass}`} aria-hidden />
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50/90 to-white px-4 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-[13px]">
          {eyebrow}
        </p>
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h3>
      </div>
      <ul className="divide-y divide-slate-100">
        {items.map((item, idx) => (
          <li key={item.title} className="px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <p className="min-w-0 text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                <span className="mr-2 font-bold text-slate-600">{idx + 1}.</span>
                {item.title}
              </p>
              <span className="inline-flex shrink-0 items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-slate-900/50 sm:text-[13px]">
                해결완료
              </span>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border-2 border-black bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-900 sm:text-sm">
                  문제
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.risk}
                </p>
              </div>
              <div className="rounded-xl border-2 border-slate-700 bg-slate-50 px-3.5 py-3 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-800 sm:text-sm">
                  해결
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.resolution}
                </p>
              </div>
              <div className="rounded-xl border-2 border-slate-700 bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-800 sm:text-sm">
                  성과
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.outcome}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function RiskManagementCards() {
  return (
    <div className="space-y-8">
      <RiskSection
        eyebrow="Risk management"
        title="리스크 관리"
        accentClass="from-teal-600/30 via-teal-800 to-teal-600/30"
        items={RISK_ITEMS}
      />
    </div>
  )
}
