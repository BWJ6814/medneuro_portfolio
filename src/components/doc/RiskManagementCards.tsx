type RiskItem = {
  title: string
  risk: string
  resolution: string
  /** 자소서 형식의 성과(선택) */
  outcome?: string
}

const INFRA_ITEMS: RiskItem[] = [
  {
    title: 'React 도입·Tailwind CSS·Axios로 UX 고도화',
    risk:
      '학원 과정에서 익숙했던 JSP 위주 환경은 인터랙션이 적어 서비스 사용성·반응성이 아쉬웠습니다.',
    resolution:
      'React와 Tailwind CSS 도입을 주도하고, 비동기 통신은 Axios로 정리해 API 연동을 일관되게 맞췄습니다.',
    outcome:
      '화면 전환 속도와 UI 반응성이 개선되어 사용자 경험을 끌어올릴 수 있었습니다.',
  },
  {
    title: 'DB 마이그레이션 (Oracle → MySQL) 및 서버 자원 최적화',
    risk:
      '클라우드 배포 단계에서 Oracle 엔진의 메모리 점유가 높아 서버 부하·다운 및 배포 실패가 발생했습니다.',
    resolution:
      '경량화된 MySQL로 전환을 결정하고, SQL 문법·애플리케이션 설정을 전면 수정한 뒤 데이터 마이그레이션을 수행했습니다.',
    outcome:
      '메모리 사용을 줄여 안정적인 배포 환경을 갖추고 운영 비용 절감에도 기여했습니다.',
  },
  {
    title: '멀티 서버 연동 이슈 (React–Spring–FastAPI)',
    risk:
      '프론트(3000) / 백엔드(8080) / AI 서버(8000) 중 한쪽에만 문제가 생겨도 기능 전체가 끊겼고, 호출 주소가 조금만 달라도 연동 오류가 발생했습니다.',
    resolution:
      '요청 흐름을 "React → Spring API → FastAPI"로 고정하고, FastAPI는 /chat, /summarize-consult처럼 역할별 엔드포인트를 분리했습니다.',
    outcome:
      '역할이 나뉜 만큼 장애 시 원인 파악이 쉬워졌고, AI·메인 API 호출이 꼬이지 않아 통합 시나리오 테스트도 안정적으로 돌릴 수 있었습니다.',
  },
  {
    title: 'RAG 데이터 준비 시간/비용 리스크',
    risk:
      '판례 데이터를 임베딩해 벡터 DB에 넣는 과정이 오래 걸렸고, 한 번에 몰아 처리할 때 중간 실패가 잦았습니다.',
    resolution:
      'update_db.py에서 데이터를 구간 단위로 나눠 적재하고, 문서도 배치로 저장해 실패를 줄였습니다. main.py는 실행 시마다 ./db를 로딩하도록 개발했습니다.',
    outcome:
      '재실행·재적재 부담이 줄어 RAG 서비스 오픈 일정을 맞출 수 있었고, 벡터 데이터 갱신 시에도 부분만 다시 돌리는 식으로 운영할 수 있게 되었습니다.',
  },
  {
    title: '보안/개인정보 리스크',
    risk:
      '설정 파일에 키가 남아 있거나 AccessLog에 IP·사용자 정보·에러 메시지가 그대로 쌓이면서 유출·남용 우려가 있었습니다.',
    resolution:
      '운영 환경에서는 키를 파일이 아니라 환경변수·배포 환경 설정으로 분리하는 방향을 정리했고, 로그 조회는 관리자 권한에서만 가능하도록 제한했습니다. 응답 데이터는 필요한 경우 마스킹 처리로 노출을 줄이도록 구성했습니다.',
    outcome:
      '저장소·로그에 민감값이 노출될 여지를 줄였고, 감사·보안 점검 시에도 정책을 설명하기 쉬운 구조를 갖추었습니다.',
  },
  {
    title: 'AccessLog 저장에 따른 성능/운영 리스크',
    risk:
      '모든 요청을 DB에 저장하던 방식에서는 사용자가 늘수록 DB 응답이 느려졌고, 로그가 과다하게 쌓여 필요한 정보를 찾기 어려웠습니다.',
    resolution:
      '로그에 핵심 정보(처리시간, 상태코드, 에러 내용)만 남기고, 관리자 화면에서 기간·검색어·에러로 쉽게 걸러보게 해 문제 파악용 로그로 활용했습니다.',
    outcome:
      'DB 부하와 로그 용량이 줄어 서비스 성능을 유지하면서도, 장애 발생 시 필요한 흔적만 빠르게 찾을 수 있었습니다.',
  },
]

const COLLAB_ITEMS: RiskItem[] = [
  {
    title: '팀원 간 기술 격차 및 소통 갈등 중재',
    risk:
      '개인 실력 차이로 특정 팀원에게 업무가 몰리고, 팀 내 불만이 쌓이면서 개발 속도가 정체되었습니다.',
    resolution:
      '정기 대화 세션으로 불만을 공론화하고, 페어 프로그래밍으로 기술을 나누며 업무를 재분배했습니다.',
    outcome:
      '오해를 줄이고 기술 수준을 평준화해 전체 개발 속도를 다시 끌어올렸습니다.',
  },
  {
    title: 'Git 형상 관리·충돌 대응 및 유실 데이터 복구',
    risk:
      '동시에 같은 파일을 수정하며 충돌·병합 누락이 발생했고, 조작 실수로 핵심 설정 파일이 유실되거나 브랜치 충돌로 일정이 밀리기도 했습니다.',
    resolution:
      '작업 전 pull --rebase로 최신화하고 기능 브랜치를 분리한 뒤 리뷰 후 병합하기로 했습니다. Git 이력 추적으로 커밋을 복구하고, .gitignore를 재설정했으며 팀원 대상 형상관리·복구 실무 중심 기술 세션(약 4시간)을 진행했습니다.',
    outcome:
      '병합 오류가 줄고 코드 통합이 안정되어 전체 생산성이 좋아졌습니다.',
  },
  {
    title: '업무 책임감·공정 관리',
    risk:
      '상습 결석·업무 태만으로 팀 사기가 떨어지고 전체 일정이 밀릴 위기가 있었습니다.',
    resolution:
      '감정적 대응 대신 일일 목표 체크리스트와 공정 관리표로 업무 의존성과 진행을 눈에 보이게 정리했습니다.',
    outcome:
      '지연 원인을 객관적으로 공유해 책임감을 유도했고, 중도 포기 없이 프로젝트를 끝까지 완수했습니다.',
  },
  {
    title: 'API 규격 변경으로 연동 깨짐',
    risk:
      '프론트/백엔드/AI가 따로 개발되다 보니 필드명·경로가 바뀔 때마다 다른 파트에서 연동 오류가 바로 났습니다.',
    resolution:
      '요청/응답 형식을 먼저 합의하고, 변경은 공유 후 동시에 반영하기로 했습니다.',
    outcome:
      '연동 깨짐으로 인한 긴급 핫픽스 횟수가 줄었고, 프론트·백·AI 간 디버깅 시간이 단축되었습니다.',
  },
  {
    title: '요구사항 해석 차이로 재작업',
    risk:
      '1:1 채팅 등을 개발하는 과정에서 같은 기능을 서로 다르게 이해해 결과물이 달라졌고, 통합 단계에서 에러가 발생했습니다.',
    resolution:
      '기능 명세를 입력·출력·예외까지 짧게 정리하고, 단위 테스트로 맞추며 문제를 해결했습니다.',
    outcome:
      '통합 단계에서의 “의도와 다른 구현” 재작업이 줄었고, 동일 기능에 대한 기대 동작을 팀원 간에 맞출 수 있었습니다.',
  },
  {
    title: '코드 스타일/구조 불일치로 유지보수 난이도 증가',
    risk:
      '초기에는 파일 위치·이름·작성 방식이 제각각이라 다른 사람이 수정하기 어렵고 작업 속도가 느려졌습니다.',
    resolution:
      '폴더·네이밍 규칙을 간단히 통일하고, 리뷰에서 구조를 맞추는 기준을 유지하기로 약속했습니다.',
    outcome:
      '코드 리뷰 시 논의 포인트가 줄었고, 다른 파트 코드를 열었을 때도 찾기·수정하기 쉬워져 협업 속도가 나아졌습니다.',
  },
  {
    title: '민감정보 공유/노출',
    risk:
      '메신저·깃 등에 키나 계정 정보가 남는 일이 있어 유출 우려가 커졌습니다.',
    resolution:
      '개인별 키 발급과 환경변수로 관리하기로 했습니다.',
    outcome:
      '공유 채널·저장소에 비밀이 남는 실수를 줄였고, 키 회전·권한 회수 시에도 영향 범위를 한정할 수 있었습니다.',
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
      <div
        className={`h-1 bg-gradient-to-r ${accentClass}`}
        aria-hidden
      />
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
                <span className="mr-2 font-bold text-[#0047AB]/90">{idx + 1}.</span>
                {item.title}
              </p>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#003580] px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-[#002451]/50 sm:text-[13px]">
                해결완료
              </span>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border-2 border-black bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-900 sm:text-sm">
                  리스크
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.risk}
                </p>
              </div>
              <div className="rounded-xl border-2 border-[#003580] bg-[#0047AB]/[0.07] px-3.5 py-3 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-[#002a5c] sm:text-sm">
                  해결
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.resolution}
                </p>
              </div>
              {item.outcome ? (
                <div className="rounded-xl border-2 border-[#003580] bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#002a5c] sm:text-sm">
                    성과
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                    {item.outcome}
                  </p>
                </div>
              ) : null}
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
        eyebrow="Risk · Collaboration"
        title="협업"
        accentClass="from-slate-400/40 via-slate-500 to-slate-400/40"
        items={COLLAB_ITEMS}
      />
      <RiskSection
        eyebrow="Risk · Technical"
        title="기술·인프라"
        accentClass="from-[#0047AB]/30 via-[#0047AB] to-[#0047AB]/30"
        items={INFRA_ITEMS}
      />
    </div>
  )
}
