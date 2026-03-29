import { SectionImage } from '../components/doc/SectionImage'
import { TESTING_IMAGES } from '../data/testingImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

export function UnitTestsArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={TESTING_IMAGES.unitOverview}
        alt="단위 테스트 및 주차별 진행 현황 개요"
        caption="단위 테스트 — 개요 및 주차별 진행"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>테스트 환경 및 결과 요약</span>
          <div className={midWrap}>
            <p className={midP}>
              Spring Boot 환경에서 JUnit 기반으로 단위 테스트를 수행했고, 정의한
              테스트 케이스 <strong className="font-semibold text-slate-800">8건</strong>
              을 완료했습니다. 테스트 과정에서 식별된 리스크는 모두 조치해 미해결
              항목이 없도록 관리했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                기능 검증·품질 보증·사용자 경험·회귀 방지 등을 목표로 삼았습니다.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <span className={strong1}>주차별 진행(1~6주차)</span>
          <div className={midWrap}>
            <p className={midP}>
              1~2주차에는 구조 설계·환경 구축, UI·보안 권한 고도화에 집중했습니다.
            </p>
            <p className={midP}>
              3~4주차에는 서버·DB 통신 최적화와 채팅·결제 로직 연동을 진행했습니다.
            </p>
            <p className={midP}>
              5~6주차에는 RAG 통합과 단위 테스트·배포 준비로 마무리했습니다.
            </p>
          </div>
        </li>
      </ol>

      <SectionImage
        src={TESTING_IMAGES.unitTable}
        alt="단위 테스트 케이스 및 결과 표"
        caption="단위 테스트 — 상세 결과표"
      />
      <ol className={`${ol1} list-none`}>
        <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['1.'] sm:pl-6">
          <span className={strong1}>표 활용</span>
          <div className={midWrap}>
            <p className={midP}>
              위 표에서 케이스 ID, 대상 모듈, 시나리오, 기대 결과, 통과 여부를
              한눈에 확인할 수 있습니다. 리그레션 시 동일 케이스를 재실행하는 기준으로
              사용합니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function IntegrationTestsArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={TESTING_IMAGES.integrationOverview}
        alt="통합 테스트 개요"
        caption="통합 테스트 — 개요"
      />
      <ol className={`${ol1} mb-6`}>
        <li>
          <span className={strong1}>통합 테스트 범위</span>
          <div className={midWrap}>
            <p className={midP}>
              모듈·API·DB·외부 연동이 함께 동작하는 시나리오를 기준으로 검증했습니다.
              전체 시나리오 표는 다수(약 78건)이나, 여기서는 제가 담당한{' '}
              <strong className="font-semibold text-slate-800">
                AI 채팅 상담·법률 상담 게시판
              </strong>{' '}
              관련 결과만 발췌해 순서대로 제시합니다.
            </p>
          </div>
        </li>
      </ol>

      <SectionImage
        src={TESTING_IMAGES.integrationTable5}
        alt="통합 테스트 결과표 — AI 채팅 상담"
        caption="통합 테스트 결과 — AI 채팅 상담"
      />
      <SectionImage
        src={TESTING_IMAGES.integrationTable6}
        alt="통합 테스트 결과표 — 법률 상담 게시판"
        caption="통합 테스트 결과 — 법률 상담 게시판"
      />
      <ol className={`${ol1} list-none`}>
        <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['1.'] sm:pl-6">
          <span className={strong1}>AI 채팅(표 5번)</span>
          <div className={midWrap}>
            <p className={midP}>
              세션 생성, 메시지 송수신, RAG 응답·출처 표시, 오류 처리 등 엔드투엔드
              흐름을 시나리오별로 확인한 결과입니다.
            </p>
          </div>
        </li>
        <li className="relative mt-6 pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
          <span className={strong1}>법률 상담 게시판(표 6번)</span>
          <div className={midWrap}>
            <p className={midP}>
              글 등록·조회·수정·삭제, 답변·권한 분기 등 게시판과 백엔드 API가 맞물린
              동작을 통합 단위에서 검증했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}
