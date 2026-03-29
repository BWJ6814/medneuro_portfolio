import { SectionImage } from '../components/doc/SectionImage'
import { ANALYSIS_IMAGES } from '../data/analysisImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

/** 역할(일반·비회원 / 변호사)에 따른 서비스 이용 경로 */
export function UserFlowArticle() {
  return (
    <div className="max-w-none space-y-10">
      <SectionImage
        src={ANALYSIS_IMAGES.userFlowGuest}
        alt="일반·비회원 사용자의 LawPartner 서비스 이용 단계 흐름"
        caption="일반·비회원 — 서비스 이용 흐름"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>다이어그램의 목적</span>
          <div className={midWrap}>
            <p className={midP}>
              회원 유형에 따라 메인 화면 진입부터 상담·결제·마이페이지까지 이어지는
              경로를 한눈에 보여 줍니다. 단순 화면 전환이 아니라, &quot;어떤 선택이
              어떤 기능으로 이어지는지&quot;를 시나리오 단위로 정리했습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>일반·비회원 흐름에서 보는 포인트</span>
          <div className={midWrap}>
            <p className={midP}>
              로그인 여부에 따라 노출되는 메뉴와 AI 상담·게시판·변호사 찾기 등
              핵심 기능으로의 진입이 어떻게 갈라지는지 확인할 수 있습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                비회원도 일부 콘텐츠 탐색·상담 진입이 가능한지, 회원 전환 지점이
                어디인지 파악합니다.
              </li>
              <li className={dashLi}>
                결제·예약·1:1 채팅 등 권한이 필요한 단계는 로그인 이후로 묶었는지
                검증합니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <SectionImage
        src={ANALYSIS_IMAGES.userFlowLawyer}
        alt="변호사 회원의 LawPartner 서비스 이용 단계 흐름"
        caption="변호사 회원 — 서비스 이용 흐름"
      />
      <ol className={`${ol1} list-none`}>
        <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['1.'] sm:pl-6">
          <span className={strong1}>변호사 전용 경로의 의미</span>
          <div className={midWrap}>
            <p className={midP}>
              변호사는 일반 사용자와 다른 대시보드·프로필·상담 응대 화면을 사용합니다.
              다이어그램은 로그인 후 변호사 마이페이지·상담 관리·일정 등으로 이어지는
              흐름을 강조합니다.
            </p>
          </div>
        </li>
        <li className="relative mt-6 pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
          <span className={strong1}>검토 시 체크</span>
          <div className={midWrap}>
            <p className={midP}>
              의뢰인·상담 건과 연결되는 지점과, 변호사만 접근해야 하는 메뉴가
              일반 회원 경로와 섞이지 않는지 설계 일관성을 확인합니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

/** 권한(역할)별 기능 접근 정리 */
export function PermissionsArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={ANALYSIS_IMAGES.permissionsOverview}
        alt="LawPartner 권한·역할별 기능 접근 정리표"
        caption="권한별 기능 정리 — 역할에 따른 화면·기능 접근"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>문서의 역할</span>
          <div className={midWrap}>
            <p className={midP}>
              비회원·일반 회원·변호사·관리자 등 역할마다 사용할 수 있는 메뉴와 API
              권한을 표로 정리했습니다. 요구사항·화면설계와 대조해 누락된 권한 분기가
              없는지 기준으로 삼습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>활용 방법</span>
          <div className={midWrap}>
            <p className={midP}>
              신규 기능 추가 시 &quot;어느 역할까지 허용할지&quot;를 이 표에 먼저
              반영한 뒤, 백엔드 보안·프론트 라우팅을 맞춥니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                AI 상담·게시판·결제처럼 민감한 기능은 행 단위로 권한이 명확한지
                확인합니다.
              </li>
              <li className={dashLi}>
                관리자 전용 기능은 일반 경로에서 노출되지 않도록 별도 행으로
                구분했습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}

/** 전체 19건 중 PM 담당 영역(AI 채팅 상담, 법률 상담 게시판) 요구사항 발췌 */
export function RequirementsArticle() {
  return (
    <div className="max-w-none space-y-10">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        프로젝트 전체에서{' '}
        <strong className="font-semibold text-slate-800">요구사항 19건</strong>을
        정의했으며, 아래는 제가 주로 개발한{' '}
        <strong className="font-semibold text-slate-800">
          AI 채팅 상담·법률 상담 게시판
        </strong>{' '}
        영역에 해당하는 정의서를 발췌해 올린 것입니다.
      </p>

      <SectionImage
        src={ANALYSIS_IMAGES.requirementsAiChat}
        alt="AI 법률 채팅 상담 요구사항 정의서"
        caption="요구사항 정의서 — AI 채팅 상담"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>AI 채팅 상담 요구사항의 초점</span>
          <div className={midWrap}>
            <p className={midP}>
              RAG 기반 응답, 세션·대화 이력, 변호사 연계·예약으로 이어지는 흐름 등
              기능·비기능 요구를 구분해 기술했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                입력·응답 품질, 타임아웃, 오류 시 사용자 메시지 등 운영 기준을
                포함합니다.
              </li>
              <li className={dashLi}>
                백엔드(FastAPI)·프론트(React) 간 계약에 맞춰 API·상태 관리 요구가
                정리되어 있습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <SectionImage
        src={ANALYSIS_IMAGES.requirementsLegalBoard1}
        alt="법률 상담 게시판 요구사항 정의서 (1/2)"
        caption="요구사항 정의서 — 법률 상담 게시판 (1/2)"
      />
      <SectionImage
        src={ANALYSIS_IMAGES.requirementsLegalBoard2}
        alt="법률 상담 게시판 요구사항 정의서 (2/2)"
        caption="요구사항 정의서 — 법률 상담 게시판 (2/2)"
      />
      <ol className={`${ol1} list-none`}>
        <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['1.'] sm:pl-6">
          <span className={strong1}>법률 상담 게시판 요구사항</span>
          <div className={midWrap}>
            <p className={midP}>
              게시글 CRUD, 답변·댓글, 공개 범위, 신고·검색 등 게시판 도메인 규칙을
              두 장의 표로 나누어 담았습니다. 분량이 많아 1·2로 구분했습니다.
            </p>
          </div>
        </li>
        <li className="relative mt-6 pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
          <span className={strong1}>구현·테스트 시 연결</span>
          <div className={midWrap}>
            <p className={midP}>
              각 요구사항 ID에 맞춰 단위 테스트·화면 설계서·권한 테이블을 추적할 수
              있도록 작성했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                작성자·비밀글·관리자 조회 등 권한 요구와 UI 동작이 일치하는지 검증합니다.
              </li>
              <li className={dashLi}>
                AI 상담과의 연계(게시글에서 채팅으로 이동 등)가 있는 경우 동일 요구
                번호로 맞춥니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
